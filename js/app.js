class Enemy {
  constructor(x,y){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = this.x += Math.floor(Math.random() * 500) + 100; 
  }
    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

class Hero {
  constructor () {
    this.x = 300;
    this.y = 400;
    this.sprite = 'images/char-cat-girl.png';
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
        window.alert("You win!!");
        //TODO: reset game
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
let roach1 = new Enemy(100,100);
let roach2 = new Enemy(200,200);
let roach3 = new Enemy(300,300);
let allEnemies = [];
allEnemies.push(roach1, roach2, roach3);


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
       if (this.x < 450) {
         this.speed * dt;
       } else {
         this.x = -100;
       }
    }

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// DONE-Now write your own player class
// DONE-This class requires an update(), render() and
// DONE-a handleInput() method.

//DONE-Update Hero's x and y property according to handleInput
//

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// DONE-Place the player object in a variable called player


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

//
// let roach1 = {radius: 20, x: 5, y: 5};
// let player = {radius: 12, x: 10, y: 5};
//
// let dx = roach1.x - player.x;
// let dy = roach1.y - player.y;
// let distance = Math.sqrt(dx * dx + dy * dy);
//
// if (distance < circle1.radius + circle2.radius) {
//     // collision detected!
// }
