import Matter, { Bodies, Body, Composite, Vector } from "matter-js";
import { EGameObjectType } from "./GameObjectTypes";

export class GameObject {
    ///
    /// PRIVATE
    ///
    protected _body: Matter.Body;
    private _innerBodies: Matter.Body[] = [];
    private _type: EGameObjectType;
    private _position: Vector;

    constructor(position: Vector, type: EGameObjectType) {
        this._position = position;

        this._body = Body.create({
            render: {
                lineWidth: 10
            }
        });
    }

    ///
    /// PUBLIC
    ///

    public setParts(parts: Body[]): void {
        Body.setParts(this._body, parts);

        Body.setPosition(this.body, this._position);
    }

    public setBody(body: Body): void {
        Body.setParts(this._body, [
            body
        ]);

        Body.setPosition(this.body, this._position);
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