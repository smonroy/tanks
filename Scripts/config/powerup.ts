module config {
    export enum PowerupType {
        SpeedUp,
        FireRateUp,
        PowerupNum, // number of different powerup types
        NoPowerup
    }

    export const POWERUP_IMAGES:string[] = [
        "speedUp",
        "fireRateUp",
    ];

}