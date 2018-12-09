module config {
    export enum ActionEnum {
        Forward,
        Backward,
        TurnRight,
        TurnLeft,
        ShootLeft,
        ShootRight,
        TurretLeft,
        TurretRight,
        TurretShoot
    }

    export enum PlayerEnum {
        Player1,
        Player2
    }

    export enum ShootType { left, right, turret };

    export const SHOOT_DELAY_TIME: number[] = [200, 200, 1000];

    export const INPUT_KEY: string[][][] = [
        [ // Player 1
            ["KeyW", "12B0"],       // Forward
            ["KeyS", "13B0"],       // Backward
            ["KeyD", "15B0"],       // TurnRight
            ["KeyA", "14B0"],       // TurnLeft
            ["KeyQ", "2B0"],       // ShootLeft
            ["KeyE", "1B0"],       // ShootRight
            ["KeyZ", "6B0"],       // TurretLeft
            ["KeyC", "7B0"],       // TurretRight
            ["KeyX", "0B0"],       // TurretShoot
        ],
        [ // Player 2
            ["Numpad8", "ArrowUp", "12B1"],                  // Forward
            ["Numpad5", "ArrowDown", "13B1"],                // Backward
            ["Numpad6", "ArrowRight", "15B1"],               // TurnRight
            ["Numpad4", "ArrowLeft", "14B1"],                // TurnLeft
            ["Numpad7", "Comma", "2B1"],                    // ShootLeft
            ["Numpad9", "Period", "1B1"],                   // ShootRight
            ["Numpad1", "KeyB", "6B1"],                     // TurretLeft
            ["Numpad3", "KeyM", "0B1"],                     // TurretRight
            ["Numpad2", "KeyN", "7B1"],                     // TurretShoot
        ],
    ];


    export const BUMPERS: util.Vector2[][] = [
        [   // Forward
            new util.Vector2(-1, 1),
            new util.Vector2(-0.5, 1),
            new util.Vector2(0, 1),
            new util.Vector2(0.5, 1),
            new util.Vector2(1, 1),
        ],
        [   // Backward
            new util.Vector2(-1, -1),
            new util.Vector2(-0.5, -1),
            new util.Vector2(0, -1),
            new util.Vector2(0.5, -1),
            new util.Vector2(1, -1),
        ],
        [   // Right
            new util.Vector2(1, 1),
            new util.Vector2(1, 0.5),
            new util.Vector2(-1, -1),
            new util.Vector2(-1, -0.5),
            new util.Vector2(-1, 1),
            new util.Vector2(-1, 0.5),
            new util.Vector2(1, -1),
            new util.Vector2(1, -0.5),
        ],
        [   // Left
            new util.Vector2(-1, 1),
            new util.Vector2(-1, 0.5),
            new util.Vector2(1, -1),
            new util.Vector2(1, -0.5),
            new util.Vector2(1, 1),
            new util.Vector2(0.5, 1),
            new util.Vector2(-1, -1),
            new util.Vector2(-0.5, -1),
        ],
    ];
}