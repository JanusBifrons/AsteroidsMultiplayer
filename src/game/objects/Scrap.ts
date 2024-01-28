import { Body, Vector } from "matter-js";
import { GameObject } from "./GameObject";
import { EGameObjectType } from "./GameObjectTypes";

export class Scrap extends GameObject {
    constructor(body: Body) {
        super(body.position, EGameObjectType.Scrap);

        Body.setPosition(body, Vector.create(0, 0));

        this.setBody(body);
    }
}