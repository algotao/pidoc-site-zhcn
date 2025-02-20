from gpiozero import LED  # 导入LED模块
from time import sleep    # 导入延时模块

led = LED(16)             # 定义LED引脚为16

while True:
    led.on()              # 点亮LED
    sleep(1)              # 等待1秒
    led.off()             # 关闭LED
    sleep(1)              # 等待1秒
