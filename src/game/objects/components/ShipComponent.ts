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

    constructor() {
    }

    abstract createBody(): void;

    ///
    /// PROPERTIES
    ///

    public get offset(): Vector {
        return this._offset;
    }

    public get body(): Matter.Body {
        this.createBody();

        return this._body;
    }
}