module config {
    export enum ActionEnum {
        Forward,
        Backward,
        TurnRight,
        TurnLeft,
        Shoot1,
        TurretLeft,
        TurretRight,
        TurretShoot
    }

    export enum PlayerEnum {
        Player1,
        Player2
    }

    export const INPUT_KEY:string[][] = [
        [ // Player 1
            "KeyW",         // Forward
            "KeyS",         // Backward
            "KeyD",         // TurnRight
            "KeyA",         // TurnLeft
            "KeyE",         // Shoot 1
            "KeyZ",         // TurretLeft
            "KeyC",         // TurretRight
            "KeyX",         // TurretShoot
        ],
        // [ // Player 2
        //     "ArrowUp",      // Forward
        //     "ArrowDown",    // Backward
        //     "ArrowRight",   // TurnRight
        //     "ArrowLeft",    // TurnLeft
        //     "KeyM",         // Shoot 1
        //     "Comma",        // TurretLeft
        //     "Period",       // TurretRight
        //     "KeyN",         // TurretShoot

        // ],
        [ // Player 2
            "Numpad8",      // Forward
            "Numpad5",      // Backward
            "Numpad6",      // TurnRight
            "Numpad4",      // TurnLeft
            "Numpad9",      // Shoot 1
            "Numpad1",      // TurretLeft
            "Numpad3",      // TurretRight
            "Numpad2",      // TurretShoot

        ],
    ]

    export const BUMPERS:util.Vector2[][] = [
        [   // Forward
            new util.Vector2(-1,1),
            new util.Vector2(-0.5,1),
            new util.Vector2(0,1),
            new util.Vector2(0.5,1),
            new util.Vector2(1,1),
        ],
        [   // Backward
            new util.Vector2(-1,-1),
            new util.Vector2(-0.5,-1),
            new util.Vector2(0,-1),
            new util.Vector2(0.5,-1),
            new util.Vector2(1,-1),
        ],
        [   // Right
            new util.Vector2(1,1),
            new util.Vector2(1,0.5),
            new util.Vector2(-1,-1),
            new util.Vector2(-1,-0.5),
            new util.Vector2(-1,1),
            new util.Vector2(-1,0.5),
            new util.Vector2(1,-1),
            new util.Vector2(1,-0.5),
        ],
        [   // Left
            new util.Vector2(-1,1),
            new util.Vector2(-1,0.5),
            new util.Vector2(1,-1),
            new util.Vector2(1,-0.5),
            new util.Vector2(1,1),
            new util.Vector2(0.5,1),
            new util.Vector2(-1,-1),
            new util.Vector2(-0.5,-1),
        ],
    ]
}