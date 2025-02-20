from gpiozero import PWMLED  # 导入PWMLED模块
from signal import pause     # 导入pause模块

led = PWMLED(16)             # 定义LED引脚为16

led.pulse()                  # 使用pulse()方法来实现LED的脉冲闪烁

pause()                      # 保持程序运行