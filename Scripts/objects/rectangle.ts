module objects {
    export class Rectangle extends GameObject {

        speed: number = 4;
        rotationSpeed: number  = 2;


        constructor() {
            super("tank");
            this.Start();
        }
        public Reset(): void {
            throw new Error("Method not implemented.");
        }
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = 150;
            this.y = 150;
            this.scaleX = 3;
            this.scaleY = 3;
        }
        public Update(): void {
            
            if (managers.Input.isKeydown("ArrowUp")) {
                this.x += this.speed * Math.sin(this.rotation * Math.PI / 180);
                this.y -= this.speed * Math.cos(this.rotation * Math.PI / 180);
            }
            if (managers.Input.isKeydown("ArrowDown")) {
                this.x -= this.speed * Math.sin(this.rotation * Math.PI / 180);
                this.y += this.speed * Math.cos(this.rotation * Math.PI / 180);
            }
            if (managers.Input.isKeydown("ArrowRight")) {
                this.rotation += this.rotationSpeed;
            }
            if (managers.Input.isKeydown("ArrowLeft")) {
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