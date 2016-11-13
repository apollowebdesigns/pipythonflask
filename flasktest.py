from flask import Flask, render_template, jsonify
import RPi.GPIO as GPIO
import datetime
import time
from time import sleep
from flask_cors import CORS, cross_origin
GPIO.setmode(GPIO.BOARD)
app = Flask(__name__)
CORS(app)


# tasks = [
#     {
#         'id': 1,
#         'title': u'Buy groceries',
#         'description': u'Milk, Cheese, Pizza, Fruit, Tylenol', 
#         'done': False
#     },
#     {
#         'id': 2,
#         'title': u'Learn Python',
#         'description': u'Need to find a good Python tutorial on the web', 
#         'done': False
#     }
# ]

# forwards = [
#     {
#         'id': 3,
#         'direction': u'forwards',
#         'description': u'motor is moving fowards', 
#         'done': True
#     }
# ]

@app.route('/hits/forwards', methods=['GET'])
def move_forwards():
    Motor1A = 16
    Motor1B = 18
    Motor1E = 22
    
    Motor2A = 23
    Motor2B = 21
    Motor2E = 19

    GPIO.setup(Motor1A,GPIO.OUT)
    GPIO.setup(Motor1B,GPIO.OUT)
    GPIO.setup(Motor1E,GPIO.OUT)
    
    GPIO.setup(Motor2A,GPIO.OUT)
    GPIO.setup(Motor2B,GPIO.OUT)
    GPIO.setup(Motor2E,GPIO.OUT)
    
    print "Going forwards"
    GPIO.output(Motor1A,GPIO.HIGH)
    GPIO.output(Motor1B,GPIO.LOW)
    GPIO.output(Motor1E,GPIO.HIGH)
    
    GPIO.output(Motor2A,GPIO.HIGH)
    GPIO.output(Motor2B,GPIO.LOW)
    GPIO.output(Motor2E,GPIO.HIGH)
    
    sleep(10)

    print "Now stop"
    GPIO.output(Motor1E,GPIO.LOW)
    GPIO.output(Motor2E,GPIO.LOW)
    
    GPIO.cleanup()
    return "test"



@app.route('/hits/motor', methods=['GET'])
def motor_move():

    def motor_test():
        Motor1A = 16
        Motor1B = 18
        Motor1E = 22
        
        Motor2A = 23
        Motor2B = 21
        Motor2E = 19
        
        GPIO.setup(Motor1A,GPIO.OUT)
        GPIO.setup(Motor1B,GPIO.OUT)
        GPIO.setup(Motor1E,GPIO.OUT)
        
        GPIO.setup(Motor2A,GPIO.OUT)
        GPIO.setup(Motor2B,GPIO.OUT)
        GPIO.setup(Motor2E,GPIO.OUT)
        
        print "Going forwards"
        GPIO.output(Motor1A,GPIO.HIGH)
        GPIO.output(Motor1B,GPIO.LOW)
        GPIO.output(Motor1E,GPIO.HIGH)
        
        GPIO.output(Motor2A,GPIO.HIGH)
        GPIO.output(Motor2B,GPIO.LOW)
        GPIO.output(Motor2E,GPIO.HIGH)
        
        sleep(2)
        
        print "Going backwards"
        GPIO.output(Motor1A,GPIO.LOW)
        GPIO.output(Motor1B,GPIO.HIGH)
        GPIO.output(Motor1E,GPIO.HIGH)
        
        GPIO.output(Motor2A,GPIO.LOW)
        GPIO.output(Motor2B,GPIO.HIGH)
        GPIO.output(Motor2E,GPIO.HIGH)
        
        sleep(2)
        
        print "Now stop"
        GPIO.output(Motor1E,GPIO.LOW)
        GPIO.output(Motor2E,GPIO.LOW)
        
        GPIO.cleanup()

    motor_test()
    return "test"


####test

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


@app.route("/")
def hello():
   now = datetime.datetime.now()
   timeString = now.strftime("%Y-%m-%d %H:%M")
   templateData = {
      'title' : 'HELLO!',
      'heading' : 'jumbotron',
      'forwards' : 'Forwards',
      'backwards' : 'Backwards',
      'time': timeString
      }
   return render_template('main.html', **templateData)



if __name__ == "__main__":
   app.run(host='0.0.0.0', port=9876, debug=True)