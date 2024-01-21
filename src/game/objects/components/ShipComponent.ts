import { Vector } from "@/components/Vector";
import { Offside } from "next/font/google";
import { Graphics } from "pixi.js";

export abstract class ShipComponent {

    ///
    /// PROTECTED
    ///
    protected _offset: Vector;
    protected _mirrored: boolean;
    protected _scale: number;
    protected _graphics: Graphics;

    ///
    /// PRIVATE
    ///

    constructor(offset: Vector = Vector.Zero, mirror: boolean = false, scale: number = 1) {
        this._graphics = new Graphics();

        this._offset = offset;
        this._mirrored = mirror;
        this._scale = scale;
    }

    public update(position: Vector, rotation: number): void {
        this._graphics.position = position.add(this._offset);
        this._graphics.rotation = rotation;
    }

    public draw(): void {
        this._graphics.position = this._offset;
        this._graphics.scale = { x: this._scale, y: this._mirrored ? this._scale * -1 : this._scale };
    }

    ///
    /// PROPERTIES
    ///

    public get graphics(): Graphics {
        return this._graphics;
    }
}