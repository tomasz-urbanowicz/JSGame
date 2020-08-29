document.addEventListener('DOMContentLoaded', function (event) {

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 600;

    context.fillStyle = "#f1f2f1";
    context.fillRect(0, 0, canvas.width, canvas.height);


    // var width = canvas.width / wall.width;
    // var height = canvas.height / wall.height;
    //
    // var walls = [
    //     {id: 'background', color: '#f1f2f1', solid: 0},
    //     {id: 'wall', color: '#111111'},
    //     {id: 'win', color: '#00bb00'},
    //     {id: 'lose', color: '#dd0000'}
    // ];

    var map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 3, 3, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 3, 3, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 2, 1],
        [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    level = new Level(25, 25, canvas.width, canvas.height, map);
    level.drawMap(context);

    if (!level.checkMap(map)) {
        alert("Verifying the correctness of the map: " + level.checkMap(map));
    }

    level.checkWallsSize();
});


class Level {

    #wall;
    #width;
    #height;
    #walls;
    #map;

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

    set width(width) {
        this.#width = width;
    }

    set height(height) {
        this.#height = height;
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

        //condition to verifying the correctness of the type of walls
        for (var i = 0; i < map.length; i++) {
            var item = map[i];
            for (var j = 0; j < item.length; j++) {
                if ((map[i][j] < 0) && (map[i][j] > 4)) {
                    return false;
                }
            }
        }
        if (minWidth == this.#width && minHeight == this.#height) {
            return true
        } else {
            return false;
        }


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
