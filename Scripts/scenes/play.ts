module scenes {
    export class Play extends objects.Scene {

        private _map: objects.Map;
        private _level: number;
        private _backgroundMusic:createjs.AbstractSoundInstance;

        constructor() {
            super();
            managers.Game.currentScene = this;
            this._level = 1;
            this.Start();
        }

        private _levelup(): void {
            this._level++;
            this.Reset()
        }

        public Start(): void {
            this.Reset();
            this.Main();
        }

        public Update(): void {
            this._map.Update();
            if (managers.Game.scoreBoard.isBattleOver()) {
                if (managers.Game.scoreBoard.isMatchOver()) {
                    managers.Game.currentState = config.Scene.OVER;
                } else {
                    this._levelup();
                }
            }
        };

        public Destroy(): void {
            this.removeAllChildren();
            this._backgroundMusic.stop();
        };

        public Reset(): void {
            this.removeAllChildren();
            managers.Game.scoreBoard.Reset();
            this._map = new objects.Map(this._level, this);
            managers.Game.map = this._map;
            managers.Game.scoreBoard.AddPlayUI(this);
        };

        public Main(): void {
            this._backgroundMusic = createjs.Sound.play("backgroundMusic");
            this._backgroundMusic.volume = 0.1;
            this._backgroundMusic.loop = 1;

            managers.Game.scoreBoard.AddPlayUI(this);
        };

    }
}