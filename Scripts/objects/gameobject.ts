module objects {
    export abstract class GameObject extends createjs.Bitmap {
        // private instance variables
        private _with: number;
        private _height: number;
        private _halfWidth: number;
        private _halfHeight: number;

        // public properties
        get Width(): number {
            return this._with;
        }

        set Width(newValue: number) {
            this._with = newValue;
            this.HalfWidth = this._with * .5;
        }

        get Height(): number {
            return this._height;
        }

        set Height(newValue: number) {
            this._height = newValue;
            this.HalfHeight = this._height * .5;
        }

        get HalfWidth(): number {
            return this._halfWidth;
        }

        set HalfWidth(newValue: number) {
            this._halfWidth = newValue;
        }

        get HalfHeight(): number {
            return this._halfHeight;
        }

        set HalfHeight(newValue: number) {
            this._halfHeight = newValue;
        }

        // constructors
        constructor(imageString: string) {
            super(managers.Game.assetMnager.getResult(imageString));
            this._initialize();
        }

        // private methods
        private _initialize(): void {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
        }

        public getCorners(): util.Vector2[] {
            let verts: util.Vector2[] = [
                new util.Vector2(-this.HalfWidth + this.x, -this.HalfHeight + this.y),
                new util.Vector2(this.HalfWidth + this.x, -this.HalfHeight + this.y),
                new util.Vector2(this.HalfWidth + this.x, this.HalfHeight + this.y),
                new util.Vector2(-this.HalfWidth + this.x, this.HalfHeight + this.y)
            ];

            for (let i: number = 0; i < verts.length; i++) {
                verts[i] = util.Vector2.Rotate(verts[i], this.rotation);
            }

            return verts;
        }

        // public methods
        public abstract Reset(): void;

        public abstract Start(): void;

        public abstract Update(): void;

        public abstract Destroy(): void;
    }
}