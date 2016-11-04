from flask import Flask, render_template, jsonify
import RPi.GPIO as GPIO
import datetime
import time
from time import sleep
GPIO.setmode(GPIO.BCM)
app = Flask(__name__)

@app.route('/hits/blue', methods=['GET'])
def lights():
    GPIO.setwarnings(False)
    GPIO.setup(18,GPIO.OUT)
    print "LED on"
    GPIO.output(18,GPIO.HIGH)
    time.sleep(1)
    GPIO.output(18,GPIO.LOW)
    print "LED off"
    GPIO.output(18,GPIO.LOW)
    GPIO.setmode(GPIO.BCM)
    return "hello pi"

if __name__ == "__main__":
   app.run(host='0.0.0.0', port=9877, debug=True)