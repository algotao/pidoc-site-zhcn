cmake_minimum_required(VERSION 3.18)

# 设置项目名称
project(hello_world)

# 设置 C++ 标准
set(CMAKE_CXX_STANDARD 17)

# 查找 OpenCV 库
find_package(OpenCV REQUIRED)

# 这里需要指定从find_package中获取的opencv头文件路径
include_directories( ${OpenCV_INCLUDE_DIRS})

# 添加源文件
file(GLOB_RECURSE SOURCES "*.cc")

# 创建可执行文件
add_executable(hello_world ${SOURCES})

# 添加编译所需要的opencv library
target_link_libraries(hello_world ${OpenCV_LIBS})