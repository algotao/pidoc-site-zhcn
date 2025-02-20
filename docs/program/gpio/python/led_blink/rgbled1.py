from gpiozero import RGBLED  # 导入LED模块
from signal import pause     # 导入pause模块

led = RGBLED(1, 16, 20)      # 定义RGBLED引脚为 红色1,绿色16,蓝色20
led.color = (1, 1, 0)        # 设置颜色为黄色（红+绿）

pause()                      # 保持程序运行