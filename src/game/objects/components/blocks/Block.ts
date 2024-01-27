import { ShipComponent } from "../ShipComponent";
import { Bodies, Vector } from "matter-js";

export class Block extends ShipComponent {
    constructor(public position: Vector, public width: number, public height: number) {
        super();
    }

    public createBody(): void {
        this._body = Bodies.rectangle(this.position.x, this.position.y, this.width, this.height);
    }
}