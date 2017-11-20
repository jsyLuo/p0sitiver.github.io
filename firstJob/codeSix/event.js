var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()
life.setMaxListeners(11);
//addEventListener

function mySinging(who) {
	// body...
    console.log('execute ' + who + ' singing');

}

life.on('myEvent',mySinging)

life.on('myEvent',function(who){
	console.log('execute ' + who + ' swimming');
})
life.on('myEvent',function(who){
	console.log('execute ' + who + ' dancing');
})
life.on('myEvent',function(who){
	console.log('execute ' + who + ' drawwing');
})
life.on('myEvent',function(who){
	console.log('execute ' + who + ' gaming');
})

life.on('herEvent',function(who){
	console.log('execute ' + who + ' otherThingOne');
})

life.on('herEvent',function(who){
	console.log('execute ' + who + ' otherThingTwo');
})


life.removeListener('myEvent', mySinging)
life.removeAllListeners('myEvent')
life.removeAllListeners()

var hasMyselfListener = life.emit('myEvent','mySelf')
var hasHerListener = life.emit('herEvent','herSelf')
var hasOtherListener = life.emit('otherEvent','mySelf')

console.log(hasMyselfListener);
console.log(hasHerListener);
console.log(hasOtherListener);
console.log(life.listeners('myEvent'));
console.log(life.listeners('myEvent').length);
console.log(EventEmitter.listenerCount(life,'myEvent'))

