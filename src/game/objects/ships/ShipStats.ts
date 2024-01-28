export class ShipStats {
    public collisionGroup: string;
    public accelleration: number;
    public torque: number;

    constructor() {
        this.collisionGroup = Math.random().toString();
    }
}