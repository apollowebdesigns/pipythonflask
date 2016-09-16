from flask import Flask, render_template
import RPi.GPIO as GPIO
import RPi.GPIO as GPIO
import datetime
import time
app = Flask(__name__)

@app.route("/")
def red():
    print "hello program"
    GPIO.setmode(GPIO.BCM)
    GPIO.setwarnings(False)
    GPIO.setup(23,GPIO.OUT)
    print "LED on"
    GPIO.output(23,GPIO.HIGH)
    time.sleep(1)
    print "LED off"
    GPIO.output(23,GPIO.LOW)
    return "hello world"

####test


@app.route("/page")
def hello():
   now = datetime.datetime.now()
   timeString = now.strftime("%Y-%m-%d %H:%M")
   templateData = {
      'title' : 'HELLO!',
      'time': timeString
      }
   return render_template('main.html', **templateData)






@app.route("/blue")
def blue():
    print "hello program"
    GPIO.setmode(GPIO.BCM)
    GPIO.setwarnings(False)
    GPIO.setup(17,GPIO.OUT)
    print "LED on"
    GPIO.output(17,GPIO.HIGH)
    time.sleep(1)
    print "LED off"
    GPIO.output(17,GPIO.LOW)

@app.route("/green")
def green():
    print "hello program"
    GPIO.setmode(GPIO.BCM)
    GPIO.setwarnings(False)
    GPIO.setup(24,GPIO.OUT)
    print "LED on"
    GPIO.output(24,GPIO.HIGH)
    time.sleep(1)
    print "LED off"
    GPIO.output(24,GPIO.LOW)

@app.route("/yellow")
def yellow():
    print "hello program"
    GPIO.setmode(GPIO.BCM)
    GPIO.setwarnings(False)
    GPIO.setup(15,GPIO.OUT)
    print "LED on"
    GPIO.output(15,GPIO.HIGH)
    time.sleep(1)
    print "LED off"
    GPIO.output(15,GPIO.LOW)


if __name__ == "__main__":
   app.run(host='0.0.0.0', port=9876, debug=True)