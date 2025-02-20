#!/bin/bash

# 保存当前目录
current_dir=$(pwd)

# 进入program目录
cd "docs/program"

# 遍历genlist.txt文件的每一行
while IFS= read -r line
do
  # 如果行不为空
  if [ ! -z "$line" ]
  then
    # 读取文件内容
    content=$(cat "$line")

    # 获取文件路径
    file_path=$(dirname "$line")

    # 获取文件名
    file_name=$(basename "$line")

    # 构造输出文件名
    output_file_name="_${file_path//\//_}_${file_name}.mdx"

    # 获取文件扩展名
    file_extension="${file_name##*.}"

    # 判断文件扩展名
    if [ "$file_extension" == "cc" ] || [ "$file_extension" == "hh" ]
    then
      echo "\`\`\`cpp" > "$output_file_name"
    elif [ "$file_extension" == "py" ]
    then
      echo "\`\`\`py" > "$output_file_name"
    elif [ "$file_name" == "CMakeLists.txt" ]
    then
      echo "\`\`\`cmake" > "$output_file_name"
    else
      echo "\`\`\`"
    fi
    
    echo "$content" >> "$output_file_name"
    echo "\`\`\`" >> "$output_file_name"
  fi
done < gen_list.txt

# 返回原目录
cd "$current_dir"