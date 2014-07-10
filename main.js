


// this invokes the function
var MoonGame = (function(){


// thes are vars that can be changed easily
var NUM_BIRDS = 20;
var MAX_TOP = 90;
var MAX_LEFT = 95;


// this creates the BIRD constructor
var Bird = function(){

}

// this creates the prototype
Bird.prototype.create = function(){

	// this says which icon to use

	this.el = $('<i class="icon-twitter-1 bird">');

	// this creates the positioning when the bird shows up

	this.el.css({
		top: Math.random() * MAX_TOP +'%',
		left: Math.random() * MAX_LEFT + '%'
	})

	// this enables the storage of the var and the ability
	 // to append the var init function which creates the birds
	return this.el;
}



var Penguin = function(){

}

Penguin.prototype.create = function(){
	this.el = $('<i class="penguin icon-plancast">');

	return this.el
}


// flock constructor which says i am going to put a penguin in the flock
var Flock = function(penguin){
	this.penguin = penguin;
	this.birds = [];
}

// create the flock and use this icon and put a penguin in the flock
Flock.prototype.create = function(){

	var newEl = $('<div class="flock">');
	newEl.append(this.penguin.create());
	newEl.css('bottom', this.birds.length * 13)

	for(var i=0; i<this.birds.length; i++){
		newEl.append(this.birds[i].el)
	}

	if(this.el){
		this.el.replaceWith(newEl);

}
	this.el = newEl;

	return this.el;

}

Flock.prototype.addBirdClickHandler = function(bird){
	var self = this;
	bird.el.on('click', function(){
		self.birds.push(bird)
		self.create()
	})
	
};

	var birds = [];

	var flock = null;

		var penguin = new Penguin();
		flock = new Flock(penguin);
		$('.sky').append(flock.create());
	// this creates the instance to display the birds it needs the "return this.el;" to work

	var init = function(){
		for(var i=0; i<NUM_BIRDS; i++){
			var bird = new Bird();
			var birdEl = bird.create();
			$('.sky').append(birdEl);
			birds.push(bird);
			flock.addBirdClickHandler(bird);
		}

		// creates the instance of a new penguin and puts it into the flock

	}

// this is what we wish to reveal, all else remains private
	return {
		init: init


	};

})();







$(document).on('ready', function() {
  MoonGame.init();
});
