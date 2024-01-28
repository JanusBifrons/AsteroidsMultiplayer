
import { Body, Vector } from "matter-js";
import { Block } from "../components/blocks/Block";
import { Ship } from "./Ship";
import { Cockpit } from "../components/cockpit/Cockpit";
import { Wing } from "../components/wings/Wing";
import { ShipStats } from "./ShipStats";

export class Havoc extends Ship {
    constructor(position: Vector) {
        super(position, Havoc.Stats());

        //this.addGameObject(new Block(Vector.create(100, 0), 50, 50));
        //this.addGameObject(new Block(Vector.create(-100, 0), 75, 75));

        this.addPart(new Cockpit(Vector.create(0, 0)).body);

        //this.addPart(Block.getBody(Vector.create(0, 0), 100, 100));
        //this.addPart(Block.getBody(Vector.create(100, 0), 100, 100));

        //this.addGameObject(new Block(Vector.create(0, 0), 100, 100));
        //this.addGameObject(new Block(Vector.create(0, 100), 150, 150));

        //this.addGameObject(new Cockpit(Vector.create(0, 0)));
        this.addPart(new Wing(Vector.create(-100, -59)).body);
        this.addPart(new Wing(Vector.create(-100, 59), true).body);

        Body.setPosition(this.body, position);

        //this.addGameObject(new Wing(Vector.create(-100, -59)));
    }

    public static Stats(): ShipStats {
        const stats = new ShipStats();

        stats.accelleration = 0.25;
        stats.torque = 7.5;

        return stats;
    }
}