# 这是一个同步脚本，用于编译并发布到服务器

#set -e
rm -rf ./build
npm run build

rsync -avz ./build/ pidoc.cn:/data/docker/nginx/web/pidoc.cn/
rsync -avz ./build/ pi5.pidoc.cn:/data/docker/nginx/web/pidoc.cn/