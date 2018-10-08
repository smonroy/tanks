module scenes {
    export class Play extends objects.Scene{

        private _map:objects.Map;
        private _level:number;
        private _tank:objects.Rectangle;

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
            this.Reset();
            this.Main();
        };

        public Update():void {
            this._tank.Update();
        };

        public Destroy():void {
            this.removeAllChildren();
        };

        public Reset():void {
            this.removeAllChildren();
            this._map = new objects.Map(this._level, this);
            this._tank = new objects.Rectangle();
            this.addChild(this._tank);
        };

        public Main():void {
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