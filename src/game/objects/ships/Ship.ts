import { Body, Sleeping, Vector } from "matter-js";
import { GameObject } from "../GameObject";
import { EGameObjectType } from "../GameObjectTypes";
import { ShipStats } from "./ShipStats";
import { Event } from "@/components/Event";
import { Laser } from "../projectile/Laser";

export class Ship extends GameObject {
    ///
    /// STATS
    ///
    private _stats: ShipStats;
    private _isAlive: boolean = true;

    ///
    /// EVENTS
    ///
    public fired: Event = new Event();
    public destroyed: Event = new Event();

    constructor(position: Vector, stats: ShipStats) {
        super(position, EGameObjectType.Ship);

        this._stats = stats;
    }

    ///
    /// PUBLIC
    ///

    public destroy(): void {
        if (this._isAlive) {
            this.destroyed.raise(this);

            this._isAlive = false;
        }

    }

    public fire(): void {
        let x: number = Math.cos(this.angle) * 300;
        let y: number = Math.sin(this.angle) * 300;

        const position = Vector.create(this.position.x + x, this.position.y + y);

        const laser = new Laser(position, this.angle, this.speed);

        this.fired.raise(this, {
            laser
        });
    }

    public turnToPort(): void {
        this.body.torque = -this._stats.torque;

        Sleeping.set(this.body, false);
    }

    public turnToStarboard(): void {
        this.body.torque = this._stats.torque;

        Sleeping.set(this.body, false);
    }

    public afterBurn(): void {
        let x: number = Math.cos(this.body.angle) * this._stats.accelleration * 5;
        let y: number = Math.sin(this.body.angle) * this._stats.accelleration * 5;

        Body.setVelocity(this.body, Vector.add(this.body.velocity, Vector.create(x, y)));

        Sleeping.set(this.body, false);
    }

    public accellerate() {
        let x: number = Math.cos(this.body.angle) * this._stats.accelleration;
        let y: number = Math.sin(this.body.angle) * this._stats.accelleration;

        Body.setVelocity(this.body, Vector.add(this.body.velocity, Vector.create(x, y)));

        Sleeping.set(this.body, false);
    }

    public decellerate() {
        let x: number = Math.cos(this.body.angle) * this._stats.accelleration;
        let y: number = Math.sin(this.body.angle) * this._stats.accelleration;

        Body.setVelocity(this.body, Vector.add(this.body.velocity, Vector.create(-x, -y)));

        Sleeping.set(this.body, false);
    }

    public applyForce(force: Vector): void {
        Body.applyForce(this.body, this.body.position, force);

        Sleeping.set(this.body, false);
    }
}