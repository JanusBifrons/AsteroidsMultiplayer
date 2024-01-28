import { Vector } from "matter-js";
import { Ship } from "./Ship";
import { ShipStats } from "./ShipStats";
import { Block } from "../components/blocks/Block";

export class Debug extends Ship {
    constructor(position: Vector) {
        super(position, Debug.Stats());

        this.setParts([
            new Block(Vector.create(100, 0), 1000, 1000).body,
        ]);
    }

    public static Stats(): ShipStats {
        const stats = new ShipStats();

        stats.accelleration = 0.35;
        stats.torque = 100;

        return stats;
    }
}