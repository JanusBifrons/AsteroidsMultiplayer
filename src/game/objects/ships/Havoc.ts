import { Graphics } from "pixi.js";
import { Ship } from "./Ship";
import { Cockpit } from "../components/cockpit/Cockpit";
import { Pad } from "../components/body/Pad";
import { Vector } from "@/components/Vector";

export class Havoc extends Ship {
    constructor() {
        super();

        // Pads
        this.addComponent(new Pad(new Vector(0, 0), false));
        this.addComponent(new Pad(new Vector(0, 0), true));

        // Cockpit
        this.addComponent(new Cockpit(new Vector(450, 0)));
    }
}