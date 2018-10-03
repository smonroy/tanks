module objects {
    export class Button extends createjs.Bitmap {
        // private instance variables
        private _with:number;
        private _height:number;
        private _halfWidth:number;
        private _halfHeight:number;

        // public properties
        get Width():number {
            return this._with;
        }

        set Width(newValue:number) {
            this._with = newValue;
            this.HalfWidth = this._with *.5;
        }

        get Height():number {
            return this._height;
        }

        set Height(newValue:number) {
            this._height = newValue;
            this.HalfHeight = this._height *.5;
        }

        get HalfWidth():number {
            return this._halfWidth;
        }

        set HalfWidth(newValue:number) {
            this._halfWidth = newValue;
        }

        get HalfHeight():number {
            return this._halfHeight;
        }

        set HalfHeight(newValue:number) {
            this._halfHeight = newValue;
        }

        // constructor
        constructor(imageString:string, x:number = 0, y:number = 0, isCenter:boolean = false){
            super(managers.Game.assetMnager.getResult(imageString));

            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;

            if(isCenter) {
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }

            this.x = x;
            this.y = y;

            this.on("mouseover", this._over);
            this.on("mouseout", this._out);
        }

        // private methods
        private _over(event:createjs.MouseEvent):void {
            this.alpha = 0.7;
        }

        private _out(event:createjs.MouseEvent):void {
            this.alpha = 1.0;
        }

        // public methods
    }
}