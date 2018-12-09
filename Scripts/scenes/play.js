var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        constructor() {
            super();
            managers.Game.currentScene = this;
            this._level = 1;
            this.Start();
        }
        _levelup() {
            this._level++;
            this.Reset();
        }
        Start() {
            this.Reset();
            this.Main();
        }
        Update() {
            this._map.Update();
            if (managers.Game.scoreBoard.isBattleOver()) {
                if (managers.Game.scoreBoard.isMatchOver()) {
                    managers.Game.currentState = config.Scene.OVER;
                }
                else {
                    this._levelup();
                }
            }
        }
        ;
        Destroy() {
            this.removeAllChildren();
            this._backgroundMusic.stop();
        }
        ;
        Reset() {
            this.removeAllChildren();
            managers.Game.scoreBoard.Reset();
            this._map = new objects.Map(this._level, this);
            managers.Game.map = this._map;
            managers.Game.scoreBoard.AddPlayUI(this);
        }
        ;
        Main() {
            this._backgroundMusic = createjs.Sound.play("backgroundMusic");
            this._backgroundMusic.volume = 0.1;
            this._backgroundMusic.loop = 1;
            managers.Game.scoreBoard.AddPlayUI(this);
        }
        ;
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map