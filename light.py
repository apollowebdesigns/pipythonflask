from flask import Flask, render_template, jsonify
import RPi.GPIO as GPIO
import datetime
import time
from time import sleep
from flask_cors import CORS, cross_origin

def lights():
    GPIO.setmode(GPIO.BOARD)
    GPIO.setwarnings(False)
    GPIO.setup(12,GPIO.OUT)
    print "LED on"
    GPIO.output(12,GPIO.HIGH)
    time.sleep(1)
    print "LED off"
    GPIO.output(12,GPIO.LOW)
    return "hello pi"