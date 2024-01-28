'use client'

import React, { RefObject } from "react";
import { ReactNode } from "react";
import { Bodies, Collision, Composite, Engine, Events, IEvent, Mouse, MouseConstraint, Render, Runner, Vector, World } from 'matter-js';
import { Input } from "./Input";
import { GameObject } from "@/game/objects/GameObject";
import { Havoc } from "@/game/objects/ships/Havoc";
import { Player } from "@/game/Player";
import { Asteroid } from "@/game/objects/world/Asteroid";
import { Ship } from "@/game/objects/ships/Ship";
import { Laser } from "@/game/objects/projectile/Laser";
import { Debug } from "@/game/objects/ships/Debug";

export class Game extends React.Component {

    ///
    /// PRIVATE
    ///
    private _div: RefObject<HTMLDivElement>;
    private _player: Player;

    ///
    /// MATTER 
    ///
    private _engine: Engine;
    private _world: World;
    private _runner: Runner;
    private _render: Render;
    private _mouse: Mouse;

    constructor(props: any) {
        super(props);

        this._div = React.createRef();
    }

    public componentDidMount(): void {
        this.createWorld();
        this.attachMouse();
        this.createPlayer();

        const testShip = new Havoc(Vector.create(-250, 0));
        testShip.body.label = "Other ship";

        this.addShip(testShip);

        for (let i = 0; i < 1; i++) {
            //this.addShip(new Havoc(Vector.create(Math.random() * 5000, Math.random() * 5000)));
        }

        for (let i = 0; i < 1; i++) {
            //this.addGameObject(new Asteroid(Vector.create(0, 0), 1000));
        }
    }

    public addShip(ship: Ship): void {
        this.addGameObject(ship);

        ship.fired.addHandler(() => {

            let x: number = Math.cos(ship.angle) * 500;
            let y: number = Math.sin(ship.angle) * 500;

            const position = Vector.create(ship.position.x + x, ship.position.y + y);

            const laser = new Laser(position, ship.angle, ship.speed);

            this.addGameObject(laser);

            Events.on(this._engine, 'collisionStart', function (event: any) {
                console.log(event.pairs[0]);
            });
        });
    }

    public addGameObject(gameObject: GameObject): void {
        Composite.add(this._engine.world, [gameObject.body]);
    }

    private createPlayer(): void {
        this._player = new Player(new Havoc(Vector.create(150, 0)));
        //this._player = new Player(new Debug(Vector.create(150, 0)));

        this.addShip(this._player.ship);
    }

    private attachMouse(): void {
        this._mouse = Mouse.create(this._render.canvas);

        const mouseConstraint = MouseConstraint.create(this._engine, {
            mouse: this._mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        Composite.add(this._world, mouseConstraint);

        this._render.mouse = this._mouse;
    }

    private createWorld(): void {
        // create an engine
        this._engine = Engine.create({
            enableSleeping: false
        });

        // create a renderer
        this._render = Render.create({
            element: this._div.current,
            engine: this._engine,
            options: {
                width: document.body.clientWidth,
                height: document.body.clientHeight,
                showSleeping: true,
                //showAxes: true,
                //showBounds: true,
                showCollisions: true,
                showVelocity: true,
                showDebug: true,
                showInternalEdges: true,
                showConvexHulls: true,
                //showMousePosition: true,
                //showPositions: true,
                wireframes: false,
                //wireframeBackground: 'black'
            },
        });

        // Keep direct ref to world
        this._world = this._engine.world;

        // Disable gravity
        this._engine.gravity.x = 0;
        this._engine.gravity.y = 0;

        // Begin the renderer
        Render.run(this._render);

        // Create the game runner
        this._runner = Runner.create();

        // Start the engine
        Runner.run(this._runner, this._engine);

        // Attach event handlers
        Events.on(this._runner, 'beforeUpdate', this.onBeforeUpdate.bind(this));
        Events.on(this._render, 'beforeRender', this.onBeforeRender.bind(this));
    }

    ///
    /// EVENT HANDLERS
    ///

    public onBeforeRender(): void {
        if (this._world?.bodies?.length > 0) {
            Mouse.setOffset(this._mouse, this._player.ship.position);

            //Render.lookAt(this._render, this._player.ship, Vector.create(500, 500), true);
            Render.lookAt(this._render, this._player.ship, Vector.create(3500, 3500), true);
        }
    }

    public onBeforeUpdate(): void {
        Input.Update();

        this._player.update();
    }

    ///
    /// PUBLIC
    ///

    public render(): ReactNode {
        return (
            <div ref={this._div} className="flex">
            </div>
        );
    }
}