module managers {
    export class Input {

        public static keys: { [key: string]: boolean } = {}
        public static buttons: { [key: string]: boolean } = {}
        public static axes: { [key: string]: number } = {}
        
        public static isKeydown(keys: string[]): boolean {
            for (let index = 0; index < keys.length; index++) {
                if (Input.keys[keys[index]]) {
                    return true;
                }
            }
            return false;
        }

        static ShowInput(e: KeyboardEvent, not?: boolean) {
            if (not) {
                console.log(e.key + " Not");
            } else {
                console.log(e.key);
            }
        }
        static HandleInput(e: KeyboardEvent) {
            Input.keys[e.code] = true;

        }
        static HandleUpInput(e) {
            Input.keys[e.code] = false;
        }

        static HandleButton(pad: Gamepad) {
            for (let bin = 0; bin < pad.buttons.length; bin++) {
                const btn = pad.buttons[bin];
                Input.keys[bin + "B" + pad.index] = btn.pressed;
            }
        }

        static HandleAxes(pad: Gamepad) {
            const index = pad.index;
            //we only care about the axes on the right stick
            Input.axes["RX" + index] = Math.abs(pad.axes[2]) > 0.2 ? pad.axes[2] : 0;
            Input.axes["RY" + index] = Math.abs(pad.axes[3]) > 0.2 ? pad.axes[3] : 0;
        }
        public static ControllerInput() {
            var gamepads = navigator.getGamepads();
            //seems to filter out Chrome's "ghost" gamepads
            for (let index = 0; index < gamepads.length; index++) {
                
                const pad = gamepads[index];
                if(!pad){
                    continue;
                }
                this.HandleButton(pad)
                this.HandleAxes(pad);

            }

        }
    }
}