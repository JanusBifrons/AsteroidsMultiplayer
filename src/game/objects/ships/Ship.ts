import { Graphics } from "pixi.js";
import { Input } from "../../../components/Input";
import { Keys } from "../../../components/Keys";
import { Vector } from "../../../components/Vector";
import { Cockpit } from "../components/cockpit/Cockpit";
import { ShipComponent } from "../components/ShipComponent";

export class Ship {

    ///
    /// PRIVATE
    ///
    private _position: Vector;
    private _rotation: number;
    private _components: ShipComponent[] = [];

    constructor() {

        this._position = new Vector(100, 100);
        this._rotation = 0;
    }

    ///
    /// PROTECTED
    ///

    protected addComponent(component: ShipComponent): void {
        component.draw();

        this._components.push(component);
    }

    ///
    /// PUBLIC
    ///

    public update(): void {
        if (Input.IsKeyDown(Keys.A)) {
            this._position.x += 10;
        }

        if (Input.IsKeyDown(Keys.D)) {
            this._position.x -= 10;
        }

        if (Input.IsKeyDown(Keys.S)) {
            this._position.y -= 10;
        }

        if (Input.IsKeyDown(Keys.W)) {
            this._position.y += 10;
        }

        if (Input.IsKeyDown(Keys.Q)) {
            this._rotation -= 0.1;
        }

        if (Input.IsKeyDown(Keys.E)) {
            this._rotation += 0.1;
        }
    }

    public draw(): void {
        this._components.forEach(c => c.update(this._position, this._rotation));
    }

    ///
    /// PROPERTIES
    ///

    public get graphics(): Graphics[] {
        return this._components.map(c => c.graphics);
    }

    public get position(): Vector {
        return this._position;
    }
}