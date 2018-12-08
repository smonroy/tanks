var managers;
(function (managers) {
    class Input {
        static isKeydown(keys) {
            for (let index = 0; index < keys.length; index++) {
                if (Input.keys[keys[index]]) {
                    return true;
                }
            }
            return false;
        }
        static ShowInput(e, not) {
            if (not) {
                console.log(e.key + " Not");
            }
            else {
                console.log(e.key);
            }
        }
        static HandleInput(e) {
            Input.keys[e.code] = true;
        }
        static HandleUpInput(e) {
            Input.keys[e.code] = false;
        }
        static HandleButton(pad) {
            for (let bin = 0; bin < pad.buttons.length; bin++) {
                const btn = pad.buttons[bin];
                Input.keys[bin + "B" + pad.index] = btn.pressed;
            }
        }
        static HandleAxes(pad) {
            const index = pad.index;
            //we only care about the axes on the right stick
            Input.axes["RX" + index] = Math.abs(pad.axes[2]) > 0.2 ? pad.axes[2] : 0;
            Input.axes["RY" + index] = Math.abs(pad.axes[3]) > 0.2 ? pad.axes[3] : 0;
        }
        static ControllerInput() {
            var gamepads = navigator.getGamepads();
            //seems to filter out Chrome's "ghost" gamepads
            for (let index = 0; index < gamepads.length; index++) {
                const pad = gamepads[index];
                if (!pad) {
                    continue;
                }
                this.HandleButton(pad);
                this.HandleAxes(pad);
            }
        }
    }
    Input.keys = {};
    Input.buttons = {};
    Input.axes = {};
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map