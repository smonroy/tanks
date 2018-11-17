module managers {
    export class Input {

        public static keys: { [key: string]: boolean } = {}
        public static isKeydown(keys:string[]): boolean {
            for (let index = 0; index < keys.length; index++) {
                if(Input.keys[keys[index]]) {
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
    }
}