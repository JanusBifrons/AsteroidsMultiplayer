import { Container, Graphics } from "pixi.js";
import { Input } from "../../../components/Input";
import { Keys } from "../../../components/Keys";
import { Vector } from "../../../components/Vector";
import { ShipComponent } from "../components/ShipComponent";
import { Timer } from "@/components/Timer";

export class Ship {

    ///
    /// PRIVATE
    ///
    private _position: Vector;
    private _rotation: number;
    private _container: Container;
    private _isAccellerating: boolean;
    private _accellerationTimer: number;
    private _velocity: Vector = Vector.Zero;

    ///
    /// STATS
    ///
    private _accelleration: number = 0.1;

    ///
    /// PROTECTED
    ///
    protected _scale: number;

    constructor() {
        this._container = new Container();

        this._position = new Vector(0, 0);
        this._rotation = 0;
        this._scale = 1;
    }

    ///
    /// PROTECTED
    ///

    protected addComponent(component: ShipComponent): void {
        component.draw();

        this._container.addChild(component.graphics);
    }

    ///
    /// PUBLIC
    ///

    public applyForce(force: Vector): void {
        this._velocity = this._velocity.add(force);
    }

    public accellerate() {
        this._isAccellerating = true;
        this._accellerationTimer = 0;

        let nX: number = Math.cos(this._rotation) * (this._accelleration * (Timer.ElapsedTime));
        let nY: number = Math.sin(this._rotation) * (this._accelleration * (Timer.ElapsedTime));

        this.applyForce(new Vector(nX, nY));
    }

    public decellerate() {
        let nX: number = Math.cos(this._rotation) * (this._accelleration * (Timer.ElapsedTime));
        let nY: number = Math.sin(this._rotation) * (this._accelleration * (Timer.ElapsedTime));

        this.applyForce(new Vector(-nX, -nY));
    }

    public update(): void {
        if (Input.IsKeyDown(Keys.A)) {
            this._rotation -= 0.1;
        }

        if (Input.IsKeyDown(Keys.D)) {
            this._rotation += 0.1;
        }

        if (Input.IsKeyDown(Keys.W)) {
            this.accellerate();
        }

        if (Input.IsKeyDown(Keys.S)) {
            this.decellerate();
        }

        if (Input.IsKeyDown(Keys.Q)) {
            this._rotation -= 0.1;
        }

        if (Input.IsKeyDown(Keys.E)) {
            this._rotation += 0.1;
        }

        this._position = this._position.add(this._velocity);
    }

    public draw(): void {
        this._container.pivot = new Vector(200, 0);
        this._container.position = this._position;
        this._container.rotation = this._rotation;
        this._container.scale = { x: this._scale, y: this._scale };
    }

    ///
    /// PROPERTIES
    ///

    public get container(): Container {
        return this._container;
    }

    public get position(): Vector {
        return this._position;
    }
}