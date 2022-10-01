const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

class Paddle {
    constructor({ position }) {
        this.position = position;
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 10;
        this.height = 100;
    }
    draw() {
        c.fillStyle = "white";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update() {
        this.draw();
        if (this.position.y + this.velocity.y > 0 && this.position.y + this.height + this.velocity.y < canvas.height)
            this.position.y += this.velocity.y;
    }
}

class Ball {
    constructor({ position }) {
        this.position = position;
        this.velocity = {
            x: 1,
            y: 1,
        }
    }
    draw() {
        c.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
}

const Paddle1 = new Paddle({
    position: {
        x: 10,
        y: 100,
    },
})

const Paddle2 = new Paddle({
    position: {
        x: canvas.width - 10 * 2,
        y: 100,
    },
})


function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    Paddle1.update();
    Paddle2.update();
}
animate();

addEventListener('keydown', (event) => {
    const speed = 3;
    switch (event.key) {
        // Player One key configurations
        case "w":
            // go up
            Paddle1.velocity.y = -speed;
            break;
        case "s":
            // go down
            Paddle1.velocity.y = speed;
            break;
        case "a":
            // go left
            break;
        case "d":
            // go right
            break;
        // Player two key configurations
        case "ArrowUp":
            // go up
            Paddle2.velocity.y = -speed;
            break;
        case "ArrowDown":
            // go down
            Paddle2.velocity.y = speed;
            break;
        case "ArrowLeft":
            // go left
            break;
        case "ArrowRight":
            // go right
            break;
    }
})

c.fillStyle = 'red';
c.fillRect(0, 0, 100, 100);