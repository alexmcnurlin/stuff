//Pseudorandom number generator
//takes 2 arguments: the lowest possible number, and the highest possible number
//if only 1 argument is present, 1 will be the lowest possible number and the given number is the highest

var abs = function(x) {			//defines an absolute value function
	if (x >= 0) {
		return x;}
	else {
		return -x;}}
var then = new Date()
rndm = function(rangeLow, rangeHigh) {
	if (rangeHigh == undefined) {	//if only 1 argument is present
		return((now = new Date()) - then) % rangeLow + 1 ;}
	else {				//if 2 arguments are present
		return((now = new Date()) - then) % (abs(rangeHigh - rangeLow)) + 1 + rangeLow;}}
