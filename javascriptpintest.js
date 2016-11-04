var gpio = require("pi-gpio");
var pin = 16;

gpio.open(pin, "output", function(err) {		// Open pin 16 for output 
    gpio.write(pin, 1, function() {			// Set pin 16 high (1) 
        gpio.close(pin);						// Close pin 16 
    });
});