import { Graphics } from "pixi.js";
import { Input } from "./Input";
import { Keys } from "./Keys";
import { Vector } from "./Vector";
import { Cockpit } from "./Cockpit";

export class Ship {

    ///
    /// PRIVATE
    ///
    private _position: Vector;
    private _rotation: number;
    private _cockpit: Cockpit;
    private _graphics: Graphics;

    constructor(graphics: Graphics) {
        this._position = new Vector(100, 100);
        this._rotation = 0;
        this._cockpit = new Cockpit();

        this._cockpit.draw(graphics);
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

    public draw(graphics: Graphics): void {
        //graphics.clear();
        graphics.position = this._position;
        graphics.rotation = this._rotation;

        //graphics.setTransform(this._position.x, this._position.y, 1, 1, this._rotation);

        //this._cockpit.draw(graphics);
    }
}