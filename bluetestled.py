import RPi.GPIO as GPIO
import time

#setting constants

#########################

LED = 2

#########################

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(LED,GPIO.OUT)
print "LED on"
GPIO.output(LED,GPIO.HIGH)
time.sleep(1)
print "LED off"
GPIO.output(LED,GPIO.LOW)