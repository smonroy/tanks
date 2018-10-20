module managers {
    export class Game {
        // Globals
        public static assetMnager:createjs.LoadQueue;
        public static stage:createjs.Stage;
        public static currentState:config.Scene;
        public static currentScene:objects.Scene;
        public static map:objects.Map;
        public static scoreBoard:managers.ScoreBoard;
    } 
}