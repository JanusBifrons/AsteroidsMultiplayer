
import { Body, Vector } from "matter-js";
import { Block } from "../components/blocks/Block";
import { Ship } from "./Ship";
import { Cockpit } from "../components/cockpit/Cockpit";
import { Wing } from "../components/wings/Wing";
import { ShipStats } from "./ShipStats";

export class Havoc extends Ship {

    protected _fillStyle: string = 'rgba(0, 100, 0, 0.25)';

    constructor(position: Vector) {
        super(position, Havoc.Stats());

        this.setParts([
            new Cockpit(Vector.create(100, 0)).body,
            new Wing(Vector.create(-100, 118), true).body,
            new Wing(Vector.create(-100, -118)).body
        ]);
    }

    public static Stats(): ShipStats {
        const stats = new ShipStats();

        stats.accelleration = 0.35;
        stats.torque = 40;
        //stats.torque = 1;

        return stats;
    }
}