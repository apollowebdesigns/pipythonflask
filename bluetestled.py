from flask import Flask, render_template, jsonify
import RPi.GPIO as GPIO
import datetime
import time
from time import sleep
GPIO.setmode(GPIO.BOARD)
app = Flask(__name__)

#setting constants

#########################

LED = 2

#########################

@app.route('/hits/blue', methods=['GET'])
def light_shine():

    GPIO.setmode(GPIO.BCM)
    GPIO.setwarnings(False)
    GPIO.setup(LED,GPIO.OUT)
    print "LED on"
    GPIO.output(LED,GPIO.HIGH)
    time.sleep(1)
    print "LED off"
    GPIO.output(LED,GPIO.LOW)

if __name__ == "__main__":
   app.run(host='0.0.0.0', port=9877, debug=True)
###TODO set up server and client to test led, then move service from python to javascript (or java)