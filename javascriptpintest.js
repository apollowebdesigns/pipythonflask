var gpio = require("pi-gpio");
var pin = 15;

gpio.open(pin, "output", function(err) {		// Open pin 17 for output 
    gpio.write(pin, 1, function() {			// Set pin 17 high (1) 
        gpio.close(pin);						// Close pin 17 
    });
});