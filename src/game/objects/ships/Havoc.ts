
import { Vector } from "matter-js";
import { Block } from "../components/blocks/Block";
import { Ship } from "./Ship";
import { Cockpit } from "../components/cockpit/Cockpit";
import { Wing } from "../components/wings/Wing";
import { ShipStats } from "./ShipStats";

export class Havoc extends Ship {
    constructor(position: Vector) {
        super(position, Havoc.Stats());

        this.addGameObject(new Cockpit(Vector.create(0, 0)));
        this.addGameObject(new Wing(Vector.create(-100, -59)));
        this.addGameObject(new Wing(Vector.create(-100, 59), true));
    }

    public static Stats(): ShipStats {
        const stats = new ShipStats();

        stats.accelleration = 1;
        stats.torque = 0.001;

        return stats;
    }
}