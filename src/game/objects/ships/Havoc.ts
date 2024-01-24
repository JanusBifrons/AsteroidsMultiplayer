
import { Block } from "../components/blocks/Block";
import { Ship } from "./Ship";
import { Vector } from "@/components/Vector";

export class Havoc extends Ship {
    constructor(isPlayer: boolean, position: Vector = Vector.Zero) {
        super(isPlayer, position);

        this.addComponent(new Block(100, 100, Vector.Zero));
        this.addComponent(new Block(100, 100, new Vector(100, 0)));
        this.addComponent(new Block(100, 100, new Vector(100, 100)));
        this.addComponent(new Block(100, 100, new Vector(200, 100)));
        this.addComponent(new Block(100, 100, new Vector(200, 200)));
        this.addComponent(new Block(100, 100, new Vector(300, 300)));
        this.addComponent(new Block(100, 100, new Vector(400, 400)));

        // this.addComponent(new RearWing(new Vector(0, 75)));
        // this.addComponent(new RearWing(new Vector(0, -75), true));

        // this.addComponent(new Wing(new Vector(-100, -20)));
        // this.addComponent(new Wing(new Vector(-100, 20), true));

        // // Pads
        // this.addComponent(new Pad(new Vector(0, 0), false));
        // this.addComponent(new Pad(new Vector(0, 0), true));

        // // // Cockpit
        // this.addComponent(new Cockpit(new Vector(450, 0)));
    }
}