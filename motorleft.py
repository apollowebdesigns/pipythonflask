from flask import Flask, render_template, jsonify
import RPi.GPIO as GPIO
import datetime
import time
from time import sleep

def move():

    GPIO.setmode(GPIO.BOARD)
    
    Motor1A = 16
    Motor1B = 18
    Motor1E = 22

    Motor2A = 11
    Motor2B = 13
    Motor2E = 15

    GPIO.setup(Motor1A,GPIO.OUT)
    GPIO.setup(Motor1B,GPIO.OUT)
    GPIO.setup(Motor1E,GPIO.OUT)
    
    print "Turning motor on"
    GPIO.output(Motor1A,GPIO.HIGH)
    GPIO.output(Motor1B,GPIO.LOW)
    GPIO.output(Motor1E,GPIO.HIGH)
    
    GPIO.setup(Motor2A,GPIO.OUT)
    GPIO.setup(Motor2B,GPIO.OUT)
    GPIO.setup(Motor2E,GPIO.OUT)
    
    print "Going backwards"
    GPIO.output(Motor2A,GPIO.LOW)
    GPIO.output(Motor2B,GPIO.HIGH)
    GPIO.output(Motor2E,GPIO.HIGH)
    
    sleep(2)
    
    print "Now stop"
    GPIO.output(Motor2E,GPIO.LOW)
    
    GPIO.cleanup()
    return "test"