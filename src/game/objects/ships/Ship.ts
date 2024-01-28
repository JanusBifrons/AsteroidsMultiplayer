import { Body, Vector } from "matter-js";
import { GameObject } from "../GameObject";
import { EGameObjectType } from "../GameObjectTypes";
import { ShipStats } from "./ShipStats";
import { Event } from "@/components/Event";

export class Ship extends GameObject {
    ///
    /// STATS
    ///
    private _stats: ShipStats;

    ///
    /// EVENTS
    ///
    public fired: Event = new Event();

    constructor(position: Vector, stats: ShipStats) {
        super(position, EGameObjectType.Ship);

        this._stats = stats;
    }

    ///
    /// PUBLIC
    ///

    public fire(): void {
        this.fired.raise(this, {});
    }

    public turnToPort(): void {
        this.body.torque = -this._stats.torque;
    }

    public turnToStarboard(): void {
        this.body.torque = this._stats.torque;
    }

    public afterBurn(): void {
        let x: number = Math.cos(this.body.angle) * this._stats.accelleration * 5;
        let y: number = Math.sin(this.body.angle) * this._stats.accelleration * 5;

        Body.setVelocity(this.body, Vector.add(this.body.velocity, Vector.create(x, y)));
    }

    public accellerate() {
        let x: number = Math.cos(this.body.angle) * this._stats.accelleration;
        let y: number = Math.sin(this.body.angle) * this._stats.accelleration;

        Body.setVelocity(this.body, Vector.add(this.body.velocity, Vector.create(x, y)));
    }

    public decellerate() {
        let x: number = Math.cos(this.body.angle) * this._stats.accelleration;
        let y: number = Math.sin(this.body.angle) * this._stats.accelleration;

        Body.setVelocity(this.body, Vector.add(this.body.velocity, Vector.create(-x, -y)));
    }

    public applyForce(force: Vector): void {
        Body.applyForce(this.body, this.body.position, force);
    }
}