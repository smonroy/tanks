module config {
    export enum ActionEnum {
        Forward,
        Backward,
        TurnRight,
        TurnLeft,
        Shoot1
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
            "KeyX"          // shoot 1
        ],
        [ // Player 2
            "ArrowUp",      // Forward
            "ArrowDown",    // Backward
            "ArrowRight",   // TurnRight
            "ArrowLeft",    // TurnLeft
            "KeyM"          // shoot 1
        ]
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