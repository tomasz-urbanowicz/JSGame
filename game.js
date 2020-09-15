document.addEventListener('DOMContentLoaded', function (event) {

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 600;

    context.fillStyle = "#f1f2f1";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 3, 3, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 1, 2, 2, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    level = new Level(25, 25, canvas.width, canvas.height, map);
    level.checkWallsSize();
    level.drawMap(context);

    if (!level.checkMap(map)) {
        alert("Verifying the correctness of the map: " + level.checkMap(map));
    }

    level.checkWallsSize();

    player = new Player('#edff00', level);
    player.draw(context);

    document.addEventListener('keydown', function (event) {
        player.startMoving(event.keyCode, context);
    });

    document.addEventListener('keyup', function (event) {
        player.stopMoving(event.keyCode, context);
    })

    function drawGame() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        level.drawMap(context);
        player.move(context);
    }

    setInterval(drawGame, 1000 / 25);
});


class Player {

    #color;
    #level;
    #r;
    #position;

    constructor(color, level) {
        this.#color = color;
        this.#level = level;

        this.#position = {
            x: level.wall.width * (1 + 0.5),
            y: level.wall.height * (22 + 0.5)
        }

        this.#r = (level.wall.height / 2) - 1;

        this.velocity = {
            x: 0,
            y: 0
        };

        this.speed = {
            x: level.wall.width / 6,
            y: level.wall.height / 4
        }

        this.moving = {
            left: false,
            right: false,
            up: false
        }

        this.gravity = level.gravity;
        this.fallingCounter = 1;
    }

    get color() {
        return this.#color;
    }

    set color(value) {
        this.#color = value;
    }

    get level() {
        return this.#level;
    }

    get r() {
        return this.#r;
    }


//creating a player
    draw(context) {
        context.beginPath();
        context.arc(this.#position.x, this.#position.y, this.r, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
    }

    move(context) {
        const oldPosition = this.#position;

        this.#position = {
            x: this.#position.x + this.velocity.x,
            y: this.#position.y + this.velocity.y + this.gravity * this.fallingCounter
        };
        this.draw(context);
        this.fallingCounter += 0.10;

        const location = {
            centerX: Math.floor(this.#position.x / this.level.wall.width),
            centerY: Math.floor(this.#position.y / this.level.wall.height),
            left: Math.floor((this.#position.x - this.r - 0.01) / this.level.wall.width),
            right: Math.floor((this.#position.x + this.r - 0.01) / this.level.wall.width),
            top: Math.floor((this.#position.y - this.r - 0.01) / this.level.wall.height),
            bottom: Math.floor((this.#position.y + this.r - 0.01) / this.level.wall.height),
        };

        const walls = {
            center: this.level.walls[this.level.map[location.centerY][location.centerX]],
            left: this.level.walls[this.level.map[location.centerY][location.left]],
            right: this.level.walls[this.level.map[location.centerY][location.right]],
            top: this.level.walls[this.level.map[location.top][location.centerX]],
            bottom: this.level.walls[this.level.map[location.bottom][location.centerX]],
            topLeft: this.level.walls[this.level.map[location.top][location.left]],
            topRight: this.level.walls[this.level.map[location.top][location.right]],
            bottomLeft: this.level.walls[this.level.map[location.bottom][location.left]],
            bottomRight: this.level.walls[this.level.map[location.bottom][location.right]]
        };

        this.checkSolidWalls(walls, location, oldPosition);
        this.checkWinWalls(walls);
        this.checkLoseWalls(walls);
    }

    checkSolidWalls(walls, location, oldPosition) {
        if (walls.left.solid === 1) {
            if (this.#position.x < oldPosition.x) {
                this.#position.x = (location.left + 1) * this.level.wall.width + this.r;
            }
        }
        if (walls.right.solid === 1) {
            if (this.#position.x > oldPosition.x) {
                this.#position.x = (location.right - 1) * this.level.wall.width + this.r;
            }
        }
        if (walls.top.solid === 1) {
            if (this.#position.y < oldPosition.y) {
                this.#position.y = (location.top + 1) * this.level.wall.height + this.r;
            }
        }
        if (walls.bottom.solid === 1) {
            if (this.#position.y > oldPosition.y) {
                this.#position.y = (location.bottom - 1) * this.level.wall.height + this.r;
                this.fallingCounter = 1;
            }
        }
        //check diagonals walls
        if (walls.topLeft.solid === 1 && walls.left.solid !== 1) {
            if (this.#position.y < oldPosition.y) {
                this.#position.y = (location.top + 1) * this.level.wall.height + this.r;
            }
        }
        if (walls.topRight.solid === 1 && walls.right.solid === 0) {
            if (this.#position.y < oldPosition.y) {
                this.#position.y = (location.top + 1) * this.level.wall.height + this.r;
            }
        }
        if (walls.bottomLeft.solid === 1 && walls.left.solid !== 1) {
            if (this.#position.y > oldPosition.y) {
                this.#position.y = (location.bottom - 1) * this.level.wall.height + this.r;
            }
            this.fallingCounter = 1;
        }
        if (walls.bottomRight.solid === 1 && walls.right.solid !== 1) {
            if (this.#position.y > oldPosition.y) {
                this.#position.y = (location.bottom - 1) * this.level.wall.height + this.r;
            }
            this.fallingCounter = 1;
        }
        if (walls.bottom.solid === 0) {
            console.count("Ox");
        }
        if (walls.bottom.solid === 1) {
            console.count("1x");
        }

    }

    checkWinWalls(walls) {
        if (walls.top.id === 'win' || walls.bottom.id === 'win' ||
            walls.left.id === 'win' || walls.right.id === 'win') {

            alert('CONGRATULATIONS!!! LEVEL COMPLETED!')

            this.fallingCounter = 1;

            this.#position = {
                x: this.level.wall.width * (1 + 0.5),
                y: this.level.wall.height * (22 + 0.5)
            }
        }
    }

    checkLoseWalls(walls) {
        if (walls.top.id === 'lose' || walls.bottom.id === 'lose' ||
            walls.left.id === 'lose' || walls.right.id === 'lose') {

            alert('YOU LOSE! TRY AGAIN')

            this.fallingCounter = 1;

            this.#position = {
                x: this.level.wall.width * (1 + 0.5),
                y: this.level.wall.height * (22 + 0.5)
            }
        }
    }


    startMoving(key) {
        switch (key) {
            // left
            case 37: {
                this.moving.left = true;
                break;
            }
            //up
            case 38: {
                if (!this.moving.up) this.fallingCounter = 1;
                this.moving.up = true;
                break;
            }
            //right
            case 39: {
                this.moving.right = true;
                break;
            }
        }

        this.setMoving();

    }

    stopMoving(key) {
        switch (key) {
            case 37: {
                this.moving.left = false;
                break;
            }
            case 38: {
                this.moving.up = false;
                this.fallingCounter = 1;
                break;
            }
            case 39:
                this.moving.right = false
                break;
        }
        if (!this.moving.up) this.fallingCounter = 1;
        this.setMoving();
    }

    setMoving() {
        this.velocity = {
            x: 0,
            y: 0
        };

        if (this.moving.left) {
            this.velocity.x = this.velocity.x - this.speed.x;
        }
        if (this.moving.up) {
            this.velocity.y = this.velocity.y - this.speed.y;
        }
        if (this.moving.right) {
            this.velocity.x = this.velocity.x + this.speed.x;
        }
        if (this.moving.left && this.moving.right) {
            this.velocity.x = 0;
        }
    }

}

class Level {

    #wall;
    #width;
    #height;
    #walls;
    #map;
    #gravity;

    constructor(wallWidth, wallHeight, canvasWidth, canvasHeight, map) {
        this.#wall = {
            width: wallWidth,
            height: wallHeight
        };

        this.#width = canvasWidth / wallWidth;
        this.#height = canvasHeight / wallHeight;

        this.#walls = [
            {id: 'background', color: '#f1f2f1', solid: 0},
            {id: 'wall', color: '#111111', solid: 1},
            {id: 'win', color: '#00bb00', solid: 0},
            {id: 'lose', color: '#dd0000', solid: 0}
        ];
        this.#map = map;
    };

    set wall(size) {
        let canvasWidth = this.#wall.width * this.#width;
        let canvasHeight = this.#wall.height * this.#height;

        this.#wall = {
            width: size.width,
            height: size.height
        };

        this.#width = canvasWidth / size.width;
        this.#height = canvasHeight / size.height;
    }

    get wall() {
        return this.#wall;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    get gravity() {
        return level.wall.height / 25;
    }

    get walls() {
        return this.#walls;
    }

    get map() {
        return this.#map;
    }

    set width(width) {
        this.#width = width;
    }

    set height(height) {
        this.#height = height;
    }

    set gravity(gravity) {
        this.#gravity = gravity;
    }


    drawMap(context) {
        for (let x = 0; x < level.#width; x++) {
            for (let y = 0; y < level.#height; y++) {
                this.drawWall(
                    x * this.#wall.width,
                    y * this.#wall.height,
                    (x + 1) * this.#wall.height,
                    (y + 1) * this.#wall.width,
                    this.#walls[this.#map[y][x]].color,
                    context
                );
            }
        }
    };

    drawWall(x1, y1, x2, y2, color, context) {
        context.fillStyle = color;
        context.fillRect(x1, y1, x2, y2);
    }

    checkMap(map) {
        let minWidth = map[0].length;
        let minHeight = map.length;
        for (let y = 1; y < this.#height; y++) {
            if (map[y].length < minWidth) {
                minWidth = map[y].length;
            }
        }

        /**
         *condition to verifying the correctness of the type of walls
         */
        for (let i = 0; i < map.length; i++) {
            const item = map[i];
            for (let j = 0; j < item.length; j++) {
                if ((map[i][j] < 0) && (map[i][j] > 4)) {
                    return false;
                }
            }
        }
        return minWidth === this.#width && minHeight === this.#height;
    }

    /**
     * verifying if the height and width is not to high
     */
    checkWallsSize() {
        let wallWidth = this.#wall.width * this.#width;
        let wallHeight = this.#wall.height * this.#height;
        if (wallHeight > canvas.height && wallWidth > canvas.width) {
            alert("Wall's to big")
        }
    }
}
