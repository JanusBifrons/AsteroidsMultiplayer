import { Body, Vector } from "matter-js";
import { GameObject } from "../GameObject";
import { EGameObjectType } from "../GameObjectTypes";
import { ShipStats } from "./ShipStats";

export class Ship extends GameObject {
    ///
    /// STATS
    ///
    private _stats: ShipStats;

    constructor(position: Vector, stats: ShipStats) {
        super(position, EGameObjectType.Ship);

        this._stats = stats;
    }

    ///
    /// PUBLIC
    ///

    public turnToPort(): void {
        this.body.torque = -this._stats.torque;
    }

    public turnToStarboard(): void {
        this.body.torque = this._stats.torque;
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