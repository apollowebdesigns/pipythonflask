from flask import Flask, render_template, jsonify
import RPi.GPIO as GPIO
import datetime
import time
from time import sleep
from flask_cors import CORS, cross_origin
import light
import motorforwards
import motorbackwards
import motortest
GPIO.setmode(GPIO.BOARD)
app = Flask(__name__)
CORS(app)

class TemplateData:
    def __init__(self, title, heading, forwards, backwards, time):
        self.title = title
        self.heading = heading
        self.forwards = forwards
        self.backwards = backwards
        self.time = time

templateDataInit = TemplateData('HELLO!', 'jumbotron', 'Forwards', 'Backwards', 'Right', 'Left', datetime.datetime.now().strftime("%Y-%m-%d %H:%M"))

@app.route('/hits/forwards', methods=['GET'])
def move_forwards():
    return motorforwards.move()

@app.route('/hits/backwards', methods=['GET'])
def move_backwards():
    return motorbackwards.move()

@app.route('/hits/right', methods=['GET'])
def move_right():
    return motorright.move()

@app.route('/hits/left', methods=['GET'])
def move_backwards():
    return motorleft.move()

@app.route('/hits/motor', methods=['GET'])
def motor_test():
    return motortest.motormove()

@app.route('/hits/blue', methods=['GET'])
def lightroute():
    return light.lights()

@app.route("/map")
def map():
   return render_template('map.html')

@app.route("/")
def hello():
   now = datetime.datetime.now()
   timeString = now.strftime("%Y-%m-%d %H:%M")
   templateData = {
      'title' : 'HELLO!',
      'heading' : 'jumbotron',
      'forwards' : 'Forwards',
      'backwards' : 'Backwards',
      'right' : 'Right',
      'left' : 'Left',
      'time': timeString
      }
   return render_template('main.html', **templateData)



if __name__ == "__main__":
   app.run(host='0.0.0.0', port=80, debug=True, threaded=True)