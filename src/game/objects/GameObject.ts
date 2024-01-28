import Matter, { Bodies, Body, Composite, Vector } from "matter-js";
import { EGameObjectType } from "./GameObjectTypes";

export class GameObject {
    ///
    /// PRIVATE
    ///
    private _body: Matter.Body;
    private _innerBodies: Matter.Body[] = [];
    private _type: EGameObjectType;
    private _position: Vector;

    constructor(position: Vector, type: EGameObjectType) {
        this._position = position;

        this._body = Body.create({
            position: position,
            frictionAir: 0,
        });
    }

    ///
    /// PROTECTED
    ///

    protected addPart(body: Body): void {
        this.addBody(body);
    }

    ///
    /// PRIVATE
    ///

    private addBody(body: Body): void {
        this._innerBodies.push(body);

        Body.setParts(this._body, this._innerBodies, true);
    }

    ///
    /// PROPERTIES
    ///

    public get type(): EGameObjectType {
        return this._type;
    }

    public get position(): Vector {
        return this._body?.position;
    }

    public get angle(): number {
        return this._body.angle;
    }

    public get body(): Matter.Body {
        return this._body;
    }
}