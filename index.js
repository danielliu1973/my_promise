//http://www.html5rocks.com/en/tutorials/es6/promises/
//https://www.promisejs.org/implementing/

var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

function Promise() {
  var state = PENDING;
  var value = null;
  var handlers = [];
}