from gpiozero import PWMLED  # 导入PWMLED模块
from time import sleep       # 导入sleep模块

led = PWMLED(16)             # 定义LED引脚为16

while True:
    led.value = 0            # 熄灭
    sleep(1)
    led.value = 0.5          # 半亮
    sleep(1)
    led.value = 1            # 全亮
    sleep(1)