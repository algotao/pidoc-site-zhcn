# 导入所需库
from gpiozero import DigitalInputDevice
from time import sleep
import sys
import os

# 设置传感器连接的GPIO引脚
gpio_pin = "GPIO17"

# 定义DHT11传感器类
class DHT11:
    def __init__(self, pin):
        self.pin = DigitalInputDevice(pin)
        print("inited")

    def read(self):
        # 发送开始信号
        print("start send")
        self.pin.pull_up()
        print("pullup end")
        
        sleep(0.1)
        self.pin.pull_down()
        sleep(0.018)
        self.pin.pull_up()
        sleep(0.04)
        print("sleep end")

        # 等待响应信号
        while self.pin.is_active:
            pass
        while not self.pin.is_active:
            pass
        while self.pin.is_active:
            pass

        # 读取数据
        data = []
        for _ in range(40):
            while not self.pin.is_active:
                pass
            sleep(0.025)
            data.append(self.pin.is_active)

        # 解析数据
        humidity = (data[0] * 256 + data[1]) / 10.0
        temperature = (data[2] * 256 + data[3]) / 10.0
        checksum = data[0] + data[1] + data[2] + data[3]

        if checksum != data[4]:
            raise Exception("数据校验失败")

        return humidity, temperature

# 创建DHT11传感器对象
dht11 = DHT11(gpio_pin)

# 循环获取传感器数据并打印
while True:
    try:
        humidity, temperature = dht11.read()
        print("温度: {:.1f}°C, 湿度: {:.1f}%".format(temperature, humidity))
    except Exception as e:
        print("无法读取传感器数据，请检查连接:", e)
    sleep(1)  # 每隔1秒钟读取一次数据