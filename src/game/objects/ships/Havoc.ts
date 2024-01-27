
import { Block } from "../components/blocks/Block";
import { Ship } from "./Ship";
import { Vector } from "@/components/Vector";

export class Havoc extends Ship {
    constructor(isPlayer: boolean, position: Vector = Vector.Zero) {
        super(isPlayer, position);

        this.addComponent(new Block(100, 100, Vector.Zero));
        this.addComponent(new Block(100, 100, new Vector(100, 0)));
    }
}