module objects {
    export class Map extends objects.GameObject {
        // private
        private _parent:createjs.Container;
        private _level:number;
        private _blockSize:number;  // bock size with scale
        private _vOffset:number;    // vertical offset of the map
        private _hOffset:number;    // horizontal offset of the map

        // public
        public grid:config.BlockType[][];
        public blocks:objects.Block[][];
        public tank1:objects.Tank;
        public tank2:objects.Tank;

        // contructor
        constructor(level:number, parent:createjs.Container) {
            super(config.MAP_BACKGROUND[level-1]);

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
        private _PrepareGrid():config.BlockType[][] {
            let result:config.BlockType[][] = new Array<config.BlockType[]>();
            for (let indexY = 0; indexY <= config.GRID[this._level].length + 1; indexY++) {
                result[indexY] = new Array<config.BlockType>();
                if(indexY == 0 || indexY == config.GRID[this._level].length + 1) {
                    for (let indexX = 0; indexX < config.GRID[this._level][0].length +2; indexX++) {
                        result[indexY][indexX] = config.BlockType.IN;
                    }        
                } else {
                    for (let indexX = 0; indexX <= config.GRID[this._level][0].length + 1; indexX++) {
                        if(indexX == 0 || indexX == config.GRID[this._level][0].length + 1) {
                            result[indexY][indexX] = config.BlockType.IN;
                        } else {
                            result[indexY][indexX] = config.GRID[this._level][indexY-1][indexX-1];
                        }
                    }                
                }
            }
            return result;
        }

        private _GetGridColumn(x:number):number {
            return Math.floor((x - this._hOffset + (this._blockSize / 2)) / this._blockSize);
        }

        private _GetGridRow(y:number):number {
            return Math.floor((y - this._vOffset + (this._blockSize / 2)) / this._blockSize);
        }

        // public methods
        public GetCellContent(x:number, y:number):config.BlockType {
            let row = this._GetGridRow(y);
            if(row < 0 || row >= this.blocks.length) {
                return null;
            }
            let column = this._GetGridColumn(x);
            if(column < 0 || column >= this.blocks[row].length) {
                return null;
            }
            return this.grid[row][column];
        }

        public GetBlock(x:number, y:number):objects.Block {
            return this.blocks[this._GetGridRow(y)][this._GetGridColumn(x)];
        }

        public DestroyBlock(x:number, y:number):void {
            let row = this._GetGridRow(y);
            let column = this._GetGridColumn(x);
            this.grid[row][column] = config.BlockType.__;
            managers.Game.currentScene.removeChild(this.blocks[row][column]);
        }

        public Reset():void {
            this.grid = this._PrepareGrid();
            for(let i:number = 0; i< this.grid.length; i++) {
                this.blocks
            }

            const SCALE = Math.min(
                config.SCREEN_WITH / (this.grid[0].length) / config.BLOCK_SIZE, 
                config.SCREEN_HEIGHT / (this.grid.length) / config.BLOCK_SIZE
            )
            this._blockSize = config.BLOCK_SIZE * SCALE;

            this._hOffset = ((config.SCREEN_WITH - (this._blockSize * this.grid[0].length)) / 2) + (this._blockSize / 2);
            this._vOffset = ((config.SCREEN_HEIGHT - (this._blockSize * this.grid.length)) / 2) + (this._blockSize / 2);
            
            this.blocks = new Array<objects.Block[]>();
            for (let yi = 0; yi < this.grid.length; yi++) {
                this.blocks[yi] = new Array<objects.Block>();
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
                            let block:objects.Block = new objects.Block(this._level, gridElemnt, x, y);
                            block.scaleX = SCALE;
                            block.scaleY = SCALE;
                            this.blocks[yi][xi] = block;
                            this._parent.addChild(block);
                            break;
                        }
                    }
                }
            }
            this._parent.addChild(this.tank1);
            this._parent.addChild(this.tank2);
        }

        public Start():void {
            this.Reset();
        }

        public Update():void {

        }

        public Destroy():void {
            
        }
    }
}