module scenes {
    export class Play extends objects.Scene{

        private _map:objects.Map;
        private _level:number;

        constructor() {
            super();
            this._level = 1;
            this.Start();
        }

        private _levelup():void {
            this._level++;
            this.Reset()
        }

        public Start():void {
            this.Main();
        };

        public Update():void {

        };

        public Destroy():void {
            this.removeAllChildren();
        };

        public Reset():void {
            this.removeAllChildren();
            this._map = new objects.Map(this._level, this);
        };

        public Main():void {
            this._map = new objects.Map(this._level, this);

            this.on("click", ()=>{
                if(this._level == 3) {
                    managers.Game.currentState = config.Scene.START;
                } else {
                    this._levelup();
                }
            });
        };
    }
}