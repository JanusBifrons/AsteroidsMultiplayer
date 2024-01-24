import { Container, Graphics, Point, SHAPES } from "pixi.js";
import { Input } from "../../../components/Input";
import { Keys } from "../../../components/Keys";
import { Vector } from "../../../components/Vector";
import { ShipComponent } from "../components/ShipComponent";
import { Timer } from "@/components/Timer";
import { Body, Box, Convex, Shape } from "p2";
import { Component } from "react";
import { Colour } from "@/components/Colour";

export class Ship {

    ///
    /// PRIVATE
    ///
    private _position: Vector;
    private _rotation: number;
    private _container: Container;
    private _body: Body;
    private _components: ShipComponent[];
    private _velocity: Vector = Vector.Zero;
    private _graphics: Graphics;

    ///
    /// DEBUG
    ///
    private _isPlayer: boolean = false;

    ///
    /// STATS
    ///
    private _accelleration: number = 0.5;

    ///
    /// PROTECTED
    ///
    protected _scale: number;

    constructor(isPlayer: boolean, position: Vector = Vector.Zero) {
        this._isPlayer = isPlayer;

        this._position = position;
        //this._rotation = 0;
        this._rotation = 0;
        this._scale = 1;

        this._components = [];
        this._container = new Container();
        this._body = new Body({
            mass: 5,
            position: this._position.toArray()
        });

        this._graphics = new Graphics();
    }

    ///
    /// PROTECTED
    ///

    protected addComponent(component: ShipComponent): void {
        this._components.push(component);

        //console.log(component.);

        //this._body.fromPolygon(component.verts);


        console.log(this._body.shapes);

        this._body.addShape(component.shape, component.offset.toArray());
        //this._body.mass = this._body.mass + component.mass;

        //console.log(this._body['concavePath']);

        for (const shape of this._body.shapes) {
            if (shape instanceof Box) {
                this._graphics.beginFill(Colour.Random);
                this._graphics.lineStyle(5, Colour.Random);

                for (let i = 0; i < shape.vertices.length; i++) {
                    const vert = shape.vertices[i];

                    if (i == 0) {
                        this._graphics.moveTo(vert[0] + shape.position[0], vert[1] + shape.position[1]);
                    }
                    else {
                        this._graphics.lineTo(vert[0] + shape.position[0], vert[1] + shape.position[1]);
                    }
                }

                this._graphics.closePath();
            }
        }

        // const verts = this._body['concavePath'] as [number, number][];



        // const verts = this._body['concavePath'] as [number, number][];

        // this._graphics.beginFill(Colour.Random);
        // this._graphics.lineStyle(5, Colour.Random);

        // for (let i = 0; i < verts.length; i++) {
        //     const vert = verts[i];

        //     if (i == 0) {
        //         this._graphics.moveTo(vert[0], vert[1]);
        //     }
        //     else {
        //         this._graphics.lineTo(vert[0], vert[1]);
        //     }
        // }

        // this._graphics.closePath();

        this._container.addChild(this._graphics);
    }

    ///
    /// PUBLIC
    ///

    public applyForce(force: Vector): void {
        this._velocity = this._velocity.add(force);
    }

    public accellerate() {

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
                this._body.angularVelocity -= 0.01;
            }

            if (Input.IsKeyDown(Keys.D)) {
                this._body.angularVelocity += 0.01;
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

        this._body.applyForce(this._velocity.toArray());
        this._position = new Vector(this._body.position[0], this._body.position[1]);
        this._rotation = this._body.angle;

        this._container.position = this._position;
        this._container.rotation = this._rotation;
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