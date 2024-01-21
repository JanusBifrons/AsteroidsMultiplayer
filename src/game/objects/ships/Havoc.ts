import { Graphics } from "pixi.js";
import { Ship } from "./Ship";
import { Cockpit } from "../components/cockpit/Cockpit";
import { Pad } from "../components/body/Pad";
import { Vector } from "@/components/Vector";
import { RearWing } from "../components/wing/rearWing";
import { Wing } from "../components/wing/wing";

export class Havoc extends Ship {
    constructor() {
        super();

        this._scale = 0.1;

        this.addComponent(new RearWing(new Vector(0, 75)));
        this.addComponent(new RearWing(new Vector(0, -75), true));

        this.addComponent(new Wing(new Vector(-100, -20)));
        this.addComponent(new Wing(new Vector(-100, 20), true));

        // Pads
        this.addComponent(new Pad(new Vector(0, 0), false));
        this.addComponent(new Pad(new Vector(0, 0), true));

        // // Cockpit
        this.addComponent(new Cockpit(new Vector(450, 0)));
    }
}