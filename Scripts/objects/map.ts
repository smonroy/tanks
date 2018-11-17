module objects {
    export class Map extends objects.GameObject {
        // private
        private _scene:createjs.Container;
        private _level:number;
        private _blockSize:number;  // bock size with scale
        private _vOffset:number;    // vertical offset of the map
        private _hOffset:number;    // horizontal offset of the map
        private _tankScale:number;

        // public
        public grid: config.BlockType[][];
        public blocks: objects.Block[][];
        public powerups: objects.Powerup[];
        public tank1: objects.Tank;
        public tank2: objects.Tank;
        public turret1: objects.Turret;
        public turret2: objects.Turret;

        // contructor
        constructor(level: number, scene: createjs.Container) {
            super(config.MAP_BACKGROUND[level - 1]);

            this._level = level - 1;
            this._scene = scene;
            this._scene.addChild(this);
            this.x = config.SCREEN_WITH / 2;
            this.y = config.SCREEN_HEIGHT / 2;
            this._tankScale = 0.45;

            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.Start();
        }

        // private methods
        private _AddBlock(block: objects.Block, scale: number, yi: number, xi: number): void {
            block.scaleX = scale;
            block.scaleY = scale;
            this.blocks[yi][xi] = block;
            this._scene.addChild(block);
        }
        private _PrepareGrid(): config.BlockType[][] {
            let result: config.BlockType[][] = new Array<config.BlockType[]>();
            for (let indexY = 0; indexY <= config.GRID[this._level].length + 1; indexY++) {
                result[indexY] = new Array<config.BlockType>();
                if (indexY == 0 || indexY == config.GRID[this._level].length + 1) {
                    for (let indexX = 0; indexX < config.GRID[this._level][0].length + 2; indexX++) {
                        result[indexY][indexX] = config.BlockType.IN;
                    }
                } else {
                    for (let indexX = 0; indexX <= config.GRID[this._level][0].length + 1; indexX++) {
                        if (indexX == 0 || indexX == config.GRID[this._level][0].length + 1) {
                            result[indexY][indexX] = config.BlockType.IN;
                        } else {
                            result[indexY][indexX] = config.GRID[this._level][indexY - 1][indexX - 1];
                        }
                    }
                }
            }
            return result;
        }

        private _AddRamdomBlocks(quantity:number, margin:number = 5) {
            let columnFrom:number = margin;
            let columnTo:number = this.grid[0].length - margin;
            let blockCount:number = 0;
            while (blockCount < quantity) {
                let col = Math.floor((Math.random() * (columnTo - columnFrom)) + columnFrom);
                let row = Math.floor(Math.random() * this.grid.length);
                if(this.grid[row][col] == config.BlockType.__) {
                    this.grid[row][col] = config.BlockType.D1;
                    blockCount++;
                }
            }
        }

        private _GetGridColumn(x: number): number {
            return Math.floor((x - this._hOffset + (this._blockSize / 2)) / this._blockSize);
        }

        private _GetGridRow(y: number): number {
            return Math.floor((y - this._vOffset + (this._blockSize / 2)) / this._blockSize);
        }

        // public methods
        public GetCellContent(x: number, y: number): config.BlockType {
            let row = this._GetGridRow(y);
            if (row < 0 || row >= this.blocks.length) {
                return null;
            }
            let column = this._GetGridColumn(x);
            if (column < 0 || column >= this.blocks[row].length) {
                return null;
            }
            return this.grid[row][column];
        }

        public GetBlock(x: number, y: number): objects.Block {
            return this.blocks[this._GetGridRow(y)][this._GetGridColumn(x)];
        }

        public DestroyBlock(x: number, y: number): void {
            let row = this._GetGridRow(y);
            let column = this._GetGridColumn(x);
            this.grid[row][column] = config.BlockType.__;
            managers.Game.currentScene.removeChild(this.blocks[row][column]);
        }

        public Reset(): void {
            this.grid = this._PrepareGrid();
            this._AddRamdomBlocks(50 * (this._level + 1));

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
                        case config.BlockType.__:
                            break;
                        case config.BlockType.T1:
                            this.turret1 = new objects.Turret(1, x, y, SCALE * this._tankScale);
                            this.tank1 = new objects.Tank(1, x, y, SCALE * this._tankScale, this.turret1);
                            this.grid[yi][xi] = config.BlockType.__;
                            break;
                        case config.BlockType.T2:
                            this.turret2 = new objects.Turret(2, x, y, SCALE * this._tankScale);
                            this.tank2 = new objects.Tank(2, x, y, SCALE * this._tankScale, this.turret2);
                            this.grid[yi][xi] = config.BlockType.__;
                            break;
                        case config.BlockType.B1:
                            managers.Game.scoreBoard.AddBase1();
                            let block: objects.Block = new objects.Block(this._level, gridElemnt, x, y, 3);
                            this._AddBlock(block, SCALE, yi, xi);
                            break;
                        case config.BlockType.B2:
                            managers.Game.scoreBoard.AddBase2();
                            let block1: objects.Block = new objects.Block(this._level, gridElemnt, x, y, 3);
                            this._AddBlock(block1, SCALE, yi, xi);
                            break;
                        default:
                            let block2: objects.Block = new objects.Block(this._level, gridElemnt, x, y);
                            this._AddBlock(block2, SCALE, yi, xi);
                            break;
                    }
                }
            }

            this.powerups = new Array<objects.Powerup>();

            this.tank1.SetEnemy(this.tank2);
            this.tank2.SetEnemy(this.tank1);

            this._scene.addChild(this.tank1);
            this._scene.addChild(this.turret1);

            this._scene.addChild(this.tank2);
            this._scene.addChild(this.turret2);
        }

        public Start(): void {
            this.Reset();
        }

        public Update(): void {
            this.tank1.Update();
            this.tank2.Update();
            this.powerups.forEach(powerup => {
                if (util.Vector2.ManhatDistance(powerup.Position, this.tank1.Position) < (this.tank1.Height * 5)) {
                    if (managers.Collision.isCollidingWithCircle(this.tank1, powerup)) {
                        powerup.applyPowerup(this.tank1);
                    }
                }
                if (util.Vector2.ManhatDistance(powerup.Position, this.tank2.Position) < (this.tank2.Height * 5)) {
                    if (managers.Collision.isCollidingWithCircle(this.tank2, powerup)) {
                        powerup.applyPowerup(this.tank2);
                    }
                }
            });
        }

        public Destroy(): void {

        }
    }
}