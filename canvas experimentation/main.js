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

        //peso/velocidad de las partículas
        this.weight = 2;

        //dirección de caida
        this.directionX = -2;
    }
    
    update(){
        //when the particle falls down, it comes again
        if (this.y > canvas.height) {
            this.y = 0 - this.size;

            //reset la velocidad original cuando va too fast
            this.weight = 2;
            
            // para que las partículas caigan randomly all over the canvas
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }


        //para controlar la velocidad de la caida
        this.weight += 0.15; 
        this.y += this.weight;

        //la dirección de caida
        this.x += this.directionX;
    }

    draw(){
        ctx.fillStyle = '#ffcc00';
        ctx.beginPath(); //to start drawing
        ctx.arc(
            this.x, this.y, this.size, //where we want to draw out shape
            0, //start in 0 degrees
            Math.PI *2) //ends in 360 degrees
            ctx.closePath();
            ctx.fill()
    }
}

//partícula 1, amarilla
const particle1 = new Particle(400, 10) //x and y coordinates

//partícula 2, azul
const particle2 = new Particle(300, 40)


function animate(){
    //white color with very low opacity
    //sensation of dissapearing
    ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';

    //exact same size of the canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particle1.update();
    particle1.draw();
    particle2.update();
    particle2.draw();
    requestAnimationFrame(animate);
}
animate();