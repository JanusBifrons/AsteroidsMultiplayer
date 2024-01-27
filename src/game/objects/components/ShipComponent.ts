import { Vector } from "@/components/Vector";
import Matter from "matter-js";

export abstract class ShipComponent {

    ///
    /// PROTECTED
    ///
    protected _offset: Vector;
    protected _body: Matter.Body;

    ///
    /// PRIVATE
    ///

    constructor(offset: Vector = Vector.Zero) {
        this._offset = offset;

        this.createBody();
    }

    abstract createBody(): void;

    ///
    /// PROPERTIES
    ///

    public get offset(): Vector {
        return this._offset;
    }

    public get body(): Matter.Body {
        return this._body;
    }
}