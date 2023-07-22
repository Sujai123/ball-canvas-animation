const canvas = document.querySelector("#animation-canvas");
const ctx = canvas.getContext("2d");
// const colors = ["Pink", "black", "red", "green", "yellow", "orangered"];
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const noOfBalls = 2;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class Ball {
  constructor(context) {
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
    this.context = context;
    this.color = getRandomColor();

    this.velocity = Math.floor(Math.random() * 10) + 5;
    this.xIncremeter = this.velocity;
    this.yIncremeter = this.velocity;length

  }

  create() {
    this.draw()
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
  }

  update() {
    if(this.x > canvas.width - 10) {
      this.xIncremeter = -this.velocity;
    } else if(this.x < 10) {
      this.xIncremeter = this.velocity;
    }

    if(this.y > canvas.height - 10) {
      this.yIncremeter = -this.velocity;
    } else if(this.y < 10) {
      this.yIncremeter = this.velocity;
    }
    this.x = this.x + this.xIncremeter;
    this.y = this.y + this.yIncremeter;
    this.draw();
  }
}

let balls = [];

console.log(noOfBalls)
for(let i=0; i < noOfBalls; i++) {
  balls[i] = new Ball(ctx);
  balls[i].create();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);;
  balls.forEach(function(ball) {
    ball.update();
  })
  
  
  requestAnimationFrame(animate)
}

animate();