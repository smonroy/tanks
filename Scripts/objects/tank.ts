module objects {
    export class Tank extends GameObject {

        speed: number = 4;
        rotationSpeed: number  = 2;
        playerIndex: number;


        constructor(playerNumner:number, x:number, y:number, scale:number) {
            super("tank");
            this.x = x;
            this.y = y;
            this.scaleX = scale;
            this.scaleY = scale;
            this.playerIndex = playerNumner - 1;
            this.Start();
        }
        public Reset(): void {
            throw new Error("Method not implemented.");
        }
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        }
        public Update(): void {
            
            if (managers.Input.isKeydown(config.INPUT_KEY[this.playerIndex][config.ActionEnum.Forward])) {
                this.x += this.speed * Math.sin(this.rotation * Math.PI / 180);
                this.y -= this.speed * Math.cos(this.rotation * Math.PI / 180);
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this.playerIndex][config.ActionEnum.Backward])) {
                this.x -= this.speed * Math.sin(this.rotation * Math.PI / 180);
                this.y += this.speed * Math.cos(this.rotation * Math.PI / 180);
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this.playerIndex][config.ActionEnum.TurnRight])) {
                this.rotation += this.rotationSpeed;
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this.playerIndex][config.ActionEnum.TurnLeft])) {
                this.rotation -= this.rotationSpeed;
            }

        }
        public Destroy(): void {
            throw new Error("Method not implemented.");
        }

        public Move(): void {
        }

    }
}