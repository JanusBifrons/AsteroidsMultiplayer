import { Vector } from "@/components/Vector";
import { ShipComponent } from "../ShipComponent";
import { Bodies } from "matter-js";

export class Block extends ShipComponent {
    constructor(public width: number, public height: number, offset: Vector) {
        super(offset);
    }

    public createBody(): void {
        this._body = Bodies.rectangle(0, 0, this.width, this.height);
    }
}