module objects {
    export class Map extends objects.GameObject {
        // private
        private _parent:createjs.Container;
        private _level:number;

        // public
        public blocks:objects.Block[];
        public blocksNum:number;

        // contructor

        constructor(level:number, parent:createjs.Container) {
//            super("background1");
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

        // public methods
        public Reset():void {
            this.blocksNum = 0;
            this.blocks = new Array<objects.Block>();

            let grid:config.BlockType[][] = this._PrepareGrid();

            const SCALE = Math.min(
                config.SCREEN_WITH / (grid[0].length) / config.BLOCK_SIZE, 
                config.SCREEN_HEIGHT / (grid.length) / config.BLOCK_SIZE
            )
            const SIZE = config.BLOCK_SIZE * SCALE;

            const H_OFFSET = ((config.SCREEN_WITH - (SIZE * grid[0].length)) / 2) + (SIZE / 2);
            const V_OFFSET = ((config.SCREEN_HEIGHT - (SIZE * grid.length)) / 2) + (SIZE / 2);
            
            for (let yi = 0; yi < grid.length; yi++) {
                const row = grid[yi];
                for (let xi = 0; xi < row.length; xi++) {
                    const gridElemnt = row[xi];
                    if(gridElemnt != config.BlockType.__) {
                        this.blocks[this.blocksNum] = new objects.Block(this._level, gridElemnt, H_OFFSET + (xi * SIZE), V_OFFSET + (yi * SIZE));
                        this.blocks[this.blocksNum].scaleX = SCALE;
                        this.blocks[this.blocksNum].scaleY = SCALE;
                        this._parent.addChild(this.blocks[this.blocksNum]);
                        this.blocksNum++;
                    }
                }
            }
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