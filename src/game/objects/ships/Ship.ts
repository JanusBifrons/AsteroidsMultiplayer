import { Input } from "../../../components/Input";
import { Keys } from "../../../components/Keys";
import { ShipComponent } from "../components/ShipComponent";
import Matter, { Bodies, Body, Vector } from "matter-js";
import { hasValue } from "@/app/util";

export class Ship {

    ///
    /// PRIVATE
    ///
    private _body: Body;
    private _components: ShipComponent[] = [];
    private _spawnPosition: Vector;

    ///
    /// DEBUG
    ///
    private _isPlayer: boolean = false;

    ///
    /// STATS
    ///
    private _accelleration: number = 0.1;
    private _torque: number = 1;

    ///
    /// PROTECTED
    ///
    protected _scale: number;

    constructor(isPlayer: boolean, spawnPosition: Vector) {
        this._isPlayer = isPlayer;
        this._scale = 1;
        this._spawnPosition = spawnPosition;
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
        let x: number = Math.cos(this._body.angle) * this._accelleration;
        let y: number = Math.sin(this._body.angle) * this._accelleration;

        Body.setVelocity(this._body, Vector.add(this._body.velocity, Vector.create(x, y)));
    }

    public decellerate() {
        let x: number = Math.cos(this._body.angle) * this._accelleration;
        let y: number = Math.sin(this._body.angle) * this._accelleration;

        Body.setVelocity(this._body, Vector.add(this._body.velocity, Vector.create(-x, -y)));
    }

    public applyForce(force: Vector): void {
        Matter.Body.applyForce(this._body, this._body.position, force);
    }

    public update(): void {
        if (this._isPlayer) {
            if (Input.IsKeyDown(Keys.A)) {
                this._body.torque = -this._torque;
            }

            if (Input.IsKeyDown(Keys.D)) {
                this._body.torque = this._torque;
            }

            if (Input.IsKeyDown(Keys.W)) {
                this.accellerate();
            }

            if (Input.IsKeyDown(Keys.S)) {
                this.decellerate();
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
                }),
                inertia: 0,
                friction: 0,
                frictionAir: 0,
            });
        }

        return this._body;
    }
}