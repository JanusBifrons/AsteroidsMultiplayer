'use client'

import React, { RefObject } from "react";
import { ReactNode } from "react";
import { Composite, Engine, Events, Render, Runner, Vector, World } from 'matter-js';
import { Input } from "./Input";
import { GameObject } from "@/game/objects/GameObject";
import { Havoc } from "@/game/objects/ships/Havoc";
import { Player } from "@/game/Player";
import { Asteroid } from "@/game/objects/world/Asteroid";

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

    constructor(props: any) {
        super(props);

        this._div = React.createRef();
    }

    public componentDidMount(): void {
        this.createWorld();
        this.createPlayer();

        for (let i = 0; i < 100; i++) {
            this.addGameObject(new Havoc(Vector.create(Math.random() * 5000, Math.random() * 5000)));
        }

        for (let i = 0; i < 1; i++) {
            this.addGameObject(new Asteroid(Vector.create(0, 0), 10000));
        }
    }

    public addGameObject(gameObject: GameObject): void {
        Composite.add(this._engine.world, [gameObject.body]);
    }

    private createPlayer(): void {
        this._player = new Player(new Havoc(Vector.create(150, 0)));

        this.addGameObject(this._player.ship);
    }

    private createWorld(): void {
        // create an engine
        this._engine = Engine.create();

        // create a renderer
        this._render = Render.create({
            element: this._div.current,
            engine: this._engine,
            options: {
                width: document.body.clientWidth,
                height: document.body.clientHeight,
                //showAxes: true,
                //showBounds: true,
                showCollisions: true,
                showVelocity: true,
                showDebug: true,
                showInternalEdges: true,
                showConvexHulls: true,
                //showPositions: true,
                //wireframes: false,
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