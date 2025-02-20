#include <opencv2/opencv.hpp> // 引用opencv2 头文件
#include <string>

using namespace cv; // 使用opencv2命名空间

int main()
{
    // 指定文件名
    std::string image_path = "/path/to/image";

    // 从文件中读取图像
    Mat img = imread(image_path, IMREAD_COLOR);

    // 展示图像
    imshow("Display window", img);
    // 等待按键按下
    int k = waitKey(0);
    return 0;
}