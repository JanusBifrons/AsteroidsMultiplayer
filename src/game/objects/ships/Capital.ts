import { Vector } from "matter-js";
import { Ship } from "./Ship";
import { Block } from "../components/blocks/Block";

export class Captial extends Ship {
    constructor(isPlayer: boolean, spawnPosition: Vector) {
        super(isPlayer, spawnPosition);

        this.addComponent(new Block(spawnPosition, 10000, 10000));
    }
}