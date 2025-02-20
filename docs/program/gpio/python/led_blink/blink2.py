from gpiozero import LED  # 导入LED模块
from signal import pause  # 导入pause模块

led = LED(16)             # 定义LED引脚为16

led.blink()               # 使用LED包的闪烁功能，默认闪烁频率为1Hz

pause()                   # 保持程序运行
