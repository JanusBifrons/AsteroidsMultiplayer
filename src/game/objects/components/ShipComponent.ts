import { Vector } from "@/components/Vector";
import { Offside } from "next/font/google";
import { Convex } from "p2";
import { Graphics } from "pixi.js";

export abstract class ShipComponent {

    ///
    /// PROTECTED
    ///
    protected _offset: Vector;
    protected _mirrored: boolean;
    protected _scale: number;
    protected _graphics: Graphics;
    protected _points: Vector[] = [];
    protected _centerOfMass: Vector;
    protected _mass: number;

    ///
    /// PRIVATE
    ///

    constructor(offset: Vector = Vector.Zero, mirror: boolean = false, scale: number = 1) {
        this._graphics = new Graphics();

        this._centerOfMass = Vector.Zero;
        this._offset = offset;
        this._mirrored = mirror;
        this._scale = scale;
        this._mass = 5;

        this.createOutline();
    }

    public updateCenterOfMass(): void {
        let x: number = 0;
        let y: number = 0;

        for (let point of this._points) {
            x += point.x;
            y += point.y;
        }

        x = x / this._points.length;
        y = y / this._points.length;

        this._centerOfMass = new Vector(x, y);
    }

    public draw(): void {
        this._graphics.position = this._offset;
        this._graphics.scale = { x: this._scale, y: this._mirrored ? this._scale * -1 : this._scale };
    }

    public createOutline(): void { }

    ///
    /// PROPERTIES
    ///

    public get graphics(): Graphics {
        return this._graphics;
    }

    public get points(): [number, number][] {
        return this._points.map(p => p.toArray());
    }

    public get center(): Vector {
        return this._centerOfMass;
    }
}