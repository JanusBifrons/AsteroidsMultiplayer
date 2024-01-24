import { Vector } from "@/components/Vector";
import { Body, Convex, Shape } from "p2";

export abstract class ShipComponent {

    ///
    /// PROTECTED
    ///
    protected _offset: Vector;
    protected _mass: number;
    protected _shape: Shape;

    ///
    /// PRIVATE
    ///

    constructor(offset: Vector = Vector.Zero, mass: number = 5) {
        this._offset = offset;
        this._mass = mass;
    }

    abstract createShape(): void;

    ///
    /// PROPERTIES
    ///

    public get offset(): Vector {
        return this._offset;
    }

    public get shape(): Shape {
        this.createShape();

        return this._shape;
    }
}