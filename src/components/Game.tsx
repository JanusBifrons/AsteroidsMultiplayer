'use client'

import React, { RefObject } from "react";
import { ReactNode } from "react";
import { Ship } from "@/game/objects/ships/Ship";
import Matter, { Body, Bounds, Events, Mouse, MouseConstraint, Vector } from 'matter-js';
import { Input } from "./Input";

export class Game extends React.Component {

    private div: RefObject<HTMLDivElement>;
    private _scale: number = 1;
    private _ships: Ship[] = [];

    constructor(props: any) {
        super(props);

        this.div = React.createRef();

        this.updateScale();
    }

    componentDidMount(): void {
        // module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite;

        // create an engine
        var engine = Engine.create();

        // create a renderer
        var render = Render.create({
            element: this.div.current,
            engine: engine,
            options: {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
        });

        // create two boxes and a ground
        //var boxA = Bodies.rectangle(0, 0, 80, 80);
        //var boxB = Bodies.rectangle(400, 50, 80, 80);
        //var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        // add all of the bodies to the world
        //Composite.add(engine.world);

        engine.gravity.y = 0;
        engine.gravity.x = 0;

        // run the renderer
        Render.run(render);

        // create runner
        var runner = Runner.create();


        // run the engine
        Runner.run(runner, engine);

        const objects: Body[] = [];

        for (let i = 0; i < 50; i++) {
            objects.push(Bodies.rectangle(Math.random() * 1000, Math.random() * 1000, 80, 80));
        }

        Composite.add(engine.world, objects);

        const ship = new Ship(true, Vector.create(0, 0));
        Composite.add(engine.world, [ship.body]);

        Events.on(runner, 'beforeUpdate', () => {
            Input.Update();

            ship.update();
        });

        // create limits for the viewport
        var extents = {
            min: { x: -300, y: -300 },
            max: { x: 1100, y: 900 }
        };

        // keep track of current bounds scale (view zoom)
        var boundsScaleTarget = 1,
            boundsScale = {
                x: 1,
                y: 1
            };

        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

        Composite.add(engine.world, mouseConstraint);

        Events.on(render, 'beforeRender', () => {
            Render.lookAt(render, ship.body, Vector.create(window.innerWidth, window.innerHeight));
        });


    }

    ///
    /// PRIVATE
    ///

    private updateScale(change: number = 0): void {
        this._scale += change;
    }

    ///
    /// PUBLIC
    ///

    public render(): ReactNode {
        return (
            <div ref={this.div} className="flex">
            </div>
        );
    }
}