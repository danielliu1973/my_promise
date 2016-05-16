//http://www.html5rocks.com/en/tutorials/es6/promises/
//https://www.promisejs.org/implementing/

new Promise(function(resolve, reject){
	console.log('Promise');
	resolve();
	reject();
}).then(
	function(e){
		console.log('then resolve');
	},
	function(e){
		console.log('then reject');
	}
);
var PENDING = 0;
var RESOLVED = 1;
var REJECTED = 2;

function Promise(func) {
  var state = PENDING;
  var value = null;
  var handlers = [];
  var _resolve = {};
  var _reject = {}
  this.then = function(resolve, reject){
  	_resolve = resolve;
  	_reject = reject;
  };
  // func.call(this, _resolve, _reject);
  // _resolve();
}