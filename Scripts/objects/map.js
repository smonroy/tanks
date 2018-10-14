var objects;
(function (objects) {
    class Map extends objects.GameObject {
        // contructor
        constructor(level, parent) {
            super(config.MAP_BACKGROUND[level - 1]);
            this._level = level - 1;
            this._parent = parent;
            this._parent.addChild(this);
            this.x = config.SCREEN_WITH / 2;
            this.y = config.SCREEN_HEIGHT / 2;
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Start();
        }
        // private methods
        _PrepareGrid() {
            let result = new Array();
            for (let indexY = 0; indexY <= config.GRID[this._level].length + 1; indexY++) {
                result[indexY] = new Array();
                if (indexY == 0 || indexY == config.GRID[this._level].length + 1) {
                    for (let indexX = 0; indexX < config.GRID[this._level][0].length + 2; indexX++) {
                        result[indexY][indexX] = config.BlockType.IN;
                    }
                }
                else {
                    for (let indexX = 0; indexX <= config.GRID[this._level][0].length + 1; indexX++) {
                        if (indexX == 0 || indexX == config.GRID[this._level][0].length + 1) {
                            result[indexY][indexX] = config.BlockType.IN;
                        }
                        else {
                            result[indexY][indexX] = config.GRID[this._level][indexY - 1][indexX - 1];
                        }
                    }
                }
            }
            return result;
        }
        _GetGridColumn(x) {
            return Math.floor((x - this._hOffset + (this._blockSize / 2)) / this._blockSize);
        }
        _GetGridRow(y) {
            return Math.floor((y - this._vOffset + (this._blockSize / 2)) / this._blockSize);
        }
        // public methods
        GetCellContent(x, y) {
            return this.grid[this._GetGridRow(y)][this._GetGridColumn(x)];
        }
        Reset() {
            this.blocksNum = 0;
            this.blocks = new Array();
            this.grid = this._PrepareGrid();
            const SCALE = Math.min(config.SCREEN_WITH / (this.grid[0].length) / config.BLOCK_SIZE, config.SCREEN_HEIGHT / (this.grid.length) / config.BLOCK_SIZE);
            this._blockSize = config.BLOCK_SIZE * SCALE;
            this._hOffset = ((config.SCREEN_WITH - (this._blockSize * this.grid[0].length)) / 2) + (this._blockSize / 2);
            this._vOffset = ((config.SCREEN_HEIGHT - (this._blockSize * this.grid.length)) / 2) + (this._blockSize / 2);
            for (let yi = 0; yi < this.grid.length; yi++) {
                const row = this.grid[yi];
                for (let xi = 0; xi < row.length; xi++) {
                    const gridElemnt = row[xi];
                    let x = this._hOffset + (xi * this._blockSize);
                    let y = this._vOffset + (yi * this._blockSize);
                    switch (gridElemnt) {
                        case config.BlockType.__: {
                            break;
                        }
                        case config.BlockType.T1: {
                            this.tank1 = new objects.Tank(1, x, y, SCALE);
                            this.grid[yi][xi] = config.BlockType.__;
                            break;
                        }
                        case config.BlockType.T2: {
                            this.tank2 = new objects.Tank(2, x, y, SCALE);
                            this.grid[yi][xi] = config.BlockType.__;
                            break;
                        }
                        default: {
                            this.blocks[this.blocksNum] = new objects.Block(this._level, gridElemnt, x, y);
                            this.blocks[this.blocksNum].scaleX = SCALE;
                            this.blocks[this.blocksNum].scaleY = SCALE;
                            this._parent.addChild(this.blocks[this.blocksNum]);
                            this.blocksNum++;
                            break;
                        }
                    }
                }
            }
            this._parent.addChild(this.tank1);
            this._parent.addChild(this.tank2);
        }
        Start() {
            this.Reset();
        }
        Update() {
        }
        Destroy() {
        }
    }
    objects.Map = Map;
})(objects || (objects = {}));
//# sourceMappingURL=map.js.map