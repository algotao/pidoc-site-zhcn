from gpiozero import LED
from time import sleep

red = LED(16)
yellow = LED(20)
green = LED(21)

while True:
    red.on()
    sleep(1)
    red.off()
    sleep(1)

    yellow.on()
    sleep(1)
    yellow.off()
    sleep(1)

    green.on()
    sleep(1)
    green.off()
    sleep(1)