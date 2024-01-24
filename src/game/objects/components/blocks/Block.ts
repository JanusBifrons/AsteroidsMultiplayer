import { Vector } from "@/components/Vector";
import { ShipComponent } from "../ShipComponent";
import { Box, Convex } from "p2";

export class Block extends ShipComponent {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number, offset: Vector, mass: number = 5) {
        super(offset, mass);

        this._width = width;
        this._height = height;
    }

    public createShape(): void {
        this._shape = new Box({
            width: this._width,
            height: this._height,

        });
    }
}