module objects {
    export abstract class Scene extends createjs.Container {
        // private 

        // public

        // contructor
        constructor() {
            super();
        }

        // private methods

        // public methods

        public abstract Start():void;

        public abstract Update():void;

        public abstract Destroy():void;

        public abstract Reset():void;

        public abstract Main():void;
    }
}