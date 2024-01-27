
import { Vector } from "matter-js";
import { Block } from "../components/blocks/Block";
import { Ship } from "./Ship";
import { Cockpit } from "../components/cockpit/Cockpit";
import { Wing } from "../components/wings/Wing";

export class Havoc extends Ship {
    constructor(isPlayer: boolean, spawnPosition: Vector) {
        super(isPlayer, spawnPosition);

        //this.addComponent(new Cockpit());

        //this.addComponent(new Wing());

        //this.addComponent(new Block(1000, 100));
        //this.addComponent(new Block(100, 1000));
        this.addComponent(new Block(spawnPosition, 150, 100));
    }
}