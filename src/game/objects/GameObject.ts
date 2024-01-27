import Matter, { Bodies, Body, Vector } from "matter-js";
import { EGameObjectType } from "./GameObjectTypes";

export class GameObject {
    ///
    /// PRIVATE
    ///
    private _body: Matter.Body;
    private _type: EGameObjectType;

    constructor(position: Vector, type: EGameObjectType) {
        this._body = Body.create({
            position: position,
            frictionAir: 0
        });
    }

    ///
    /// PROTECTED
    ///

    protected addPart(body: Body): void {
        Body.setParts(this._body, [body]);
        //this._body.parts.push(body);
    }

    protected addGameObject(gameObject: GameObject): void {
        this._body.parts.push(gameObject.body);
    }

    ///
    /// PROPERTIES
    ///

    public get type(): EGameObjectType {
        return this._type;
    }

    public get position(): Vector {
        return this._body.position;
    }

    public get angle(): number {
        return this._body.angle;
    }

    public get body(): Matter.Body {
        return this._body;
    }
}