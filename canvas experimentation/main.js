// canvas setup

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); //or 3d if you want to do something in 3d

//console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = [];



// Create particles

class Particle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 10;
        this.weight = 2;
        this.directionX = 1;
    }
    
    update(){
        //when the particle falls down, it comes again
        if (this.y > canvas.height) this.y = 0 - this.size;


        this.weight += 0.01; //the longer they fall the heavier they get
        this.y += this.weight;
    }

    draw(){
        ctx.fillStyle = 'yellow';
        ctx.beginPath(); //to start drawing
        ctx.arc(
            this.x, this.y, this.size, //where we want to draw out shape
            0, //start in 0 degrees
            Math.PI *2) //ends in 360 degrees
            ctx.closePath();
            ctx.fill()
    }
}

const particle1 = new Particle(400, 10) //x and y coordinates

function animate(){
    //white color with very low opacity
    //sensation of dissapearing
    ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';

    //exact same size of the canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particle1.update();
    particle1.draw();
    requestAnimationFrame(animate);
}
animate();