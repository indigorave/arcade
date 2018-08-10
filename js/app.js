class Hero {
  constructor () {
    this.x = 300;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }


 handleInput(input) {
    switch(input) {
      case 'left':
      if (this.x > 0 ){
        this.x -=101;} else {
        window.alert("You'll fall off the edge of the earth!")
      //Add a sound bite
      }
      break;
      case 'right':
      if (this.x < 400){
        this.x += 101;} else {
          window.alert("You'll fall off the edge of the earth!")
        }
      break;
      case 'up':
      if (this.y > 0 ){
        this.y -=83;} else {
        window.alert("Turn around, it's too deep.")
      //Add a sound bite
      }
      break;
      case 'down':
      if (this.y < 400){
        this.y += 83;} else {
          window.alert("You'll fall off the edge of the earth!")
        }
      break;
    }
  }
}

let player = new Hero();

// Enemies our player must avoid
const Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Update Hero's x and y property according to handleInput
//

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
