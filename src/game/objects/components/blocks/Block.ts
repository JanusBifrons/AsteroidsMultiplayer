import { Component } from "../Component";
import { Bodies, Vector } from "matter-js";

export class Block extends Component {
    constructor(position: Vector, public width: number, public height: number) {
        super(position);

        this.addPart(Bodies.rectangle(this.position.x, this.position.y, this.width, this.height));
    }
}