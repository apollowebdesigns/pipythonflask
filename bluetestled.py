from flask import Flask, render_template, jsonify
import RPi.GPIO as GPIO
import datetime
import time
from time import sleep


GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(17,GPIO.OUT)
print "LED on"
GPIO.output(17,GPIO.HIGH)
time.sleep(1)
GPIO.output(17,GPIO.LOW)
print "LED off"
GPIO.output(17,GPIO.LOW)
GPIO.setmode(GPIO.BCM)