import { Container, Graphics, Point } from "pixi.js";
import { Input } from "../../../components/Input";
import { Keys } from "../../../components/Keys";
import { Vector } from "../../../components/Vector";
import { ShipComponent } from "../components/ShipComponent";
import { Timer } from "@/components/Timer";
import { Body } from "p2";

export class Ship {

    ///
    /// PRIVATE
    ///
    private _position: Vector;
    private _rotation: number;
    private _container: Container;
    private _body: Body;
    private _isAccellerating: boolean;
    private _accellerationTimer: number;
    private _velocity: Vector = Vector.Zero;

    ///
    /// DEBUG
    ///
    private _isPlayer: boolean = false;

    ///
    /// STATS
    ///
    private _accelleration: number = 100;

    ///
    /// PROTECTED
    ///
    protected _scale: number;

    constructor(isPlayer: boolean, position: Vector = Vector.Zero) {
        this._isPlayer = isPlayer;

        this._position = position;
        this._rotation = 0;
        this._scale = 1;

        this._container = new Container();
        this._body = new Body({
            mass: 5,
            position: this._position.toArray()
        });
    }

    ///
    /// PROTECTED
    ///

    protected addComponent(component: ShipComponent): void {
        component.draw();

        this._body.fromPolygon(component.points);
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
        if (this._isPlayer) {
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
        }

        this._body.applyForce(this._velocity.toArray());

        this._position = new Vector(this._body.position[0], this._body.position[1]);

        //this._position = this._position.add(this._velocity);
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

    public get body(): Body {
        return this._body;
    }

    public get position(): Vector {
        return this._position;
    }
}