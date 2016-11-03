import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(2,GPIO.OUT)
print "LED on"
GPIO.output(2,GPIO.HIGH)
time.sleep(1)
GPIO.output(2,GPIO.LOW)
print "LED off"
GPIO.output(2,GPIO.LOW)
GPIO.setmode(GPIO.BCM)