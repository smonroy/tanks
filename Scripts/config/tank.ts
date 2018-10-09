module config {
    export enum ActionEnum {
        Forward,
        Backward,
        TurnRight,
        TurnLeft
    }

    export enum PlayerEnum {
        Player1,
        Player2
    }

    export const INPUT_KEY:string[][] = [
        [ // Player 1
            "KeyW", // Forward
            "KeyS", // Backward
            "KeyD", // TurnRight
            "KeyA"  // TurnLeft
        ],
        [ // Player 2
            "ArrowUp", // Forward
            "ArrowDown", // Backward
            "ArrowRight", // TurnRight
            "ArrowLeft"  // TurnLeft
        ]
    ]
}