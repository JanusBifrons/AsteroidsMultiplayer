import { Input } from "../../../components/Input";
import { Keys } from "../../../components/Keys";
import { ShipComponent } from "../components/ShipComponent";
import Matter, { Body, Vector } from "matter-js";
import { hasValue } from "@/app/util";

export class Ship {

    ///
    /// PRIVATE
    ///
    private _body: Body;
    private _components: ShipComponent[] = [];

    ///
    /// DEBUG
    ///
    private _isPlayer: boolean = false;

    ///
    /// STATS
    ///
    private _speed: number = 1;

    ///
    /// PROTECTED
    ///
    protected _scale: number;

    constructor(isPlayer: boolean, position: Vector) {
        this._isPlayer = isPlayer;
        this._scale = 1;
    }

    ///
    /// PROTECTED
    ///

    protected addComponent(component: ShipComponent): void {
        this._components.push(component);
    }

    ///
    /// PUBLIC
    ///

    public accellerate() {
        let x: number = Math.cos(this._body.angle) * this._speed;
        let y: number = Math.sin(this._body.angle) * this._speed;

        Body.setVelocity(this._body, Vector.create(x, y));
    }

    public applyForce(force: Vector): void {
        Matter.Body.applyForce(this._body, this._body.position, force);
    }

    public update(): void {
        if (this._isPlayer) {
            if (Input.IsKeyDown(Keys.A)) {

                Body.setAngularVelocity(this._body, -0.01);
            }

            if (Input.IsKeyDown(Keys.D)) {

                Body.setAngularVelocity(this._body, 0.01);
            }

            if (Input.IsKeyDown(Keys.W)) {
                console.log("test");

                this.accellerate();
            }

            if (Input.IsKeyDown(Keys.S)) {
                //Body.setSpeed(this._body, -this._speed);
            }

            if (Input.IsKeyDown(Keys.Q)) {

            }

            if (Input.IsKeyDown(Keys.E)) {

            }
        }
    }

    ///
    /// PROPERTIES
    ///

    public get body(): Matter.Body {
        if (!hasValue(this._body)) {
            this._body = Matter.Body.create({
                parts: this._components.map((c) => {
                    return c.body;
                })
            });
        }

        return this._body;
    }
}