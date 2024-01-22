'use client'

import { Application, Container, Graphics } from "pixi.js";
import React, { RefObject } from "react";
import { ReactNode } from "react";
import { Input } from "./Input";
import { Keys } from "./Keys";
import { Grid } from "./Grid";
import { Vector } from "./Vector";
import { Havoc } from "@/game/objects/ships/Havoc";
import { Timer } from "./Timer";
import { Ship } from "@/game/objects/ships/Ship";
import { World } from "p2";

export class Game extends React.Component {

    private div: RefObject<HTMLDivElement>;
    private _application: Application;
    private _world: World;
    private _scale: number = 1;
    private _screenOffset: Vector;
    private _ships: Ship[] = [];

    constructor(props: any) {
        super(props);

        this.div = React.createRef();

        this.updateScale();
    }

    componentDidMount(): void {
        if (!this._application) {
            Timer.Init();

            this._screenOffset = new Vector((window.innerWidth / 2), (window.innerHeight / 2));

            this._application = new Application({ background: '#141414', resizeTo: window });
            this._world = new World({
                gravity: [0, 0]
            });

            this.div.current.appendChild(this._application.view as HTMLCanvasElement);
            const gridGraphics = new Graphics();

            this._ships.push(new Havoc(true, new Vector(-1000, 0)));
            this._ships.push(new Havoc(false));
            const grid = new Grid(gridGraphics);

            const bodies = this._ships.forEach(s => this._world.addBody(s.body));

            this._application.ticker.add(() => {
                Input.Update();
                Timer.TIMER().update();

                this._world.step(1 / 60);

                if (Input.IsKeyDown(Keys.NumpadPlus)) {
                    this.updateScale(-0.01);
                }

                if (Input.IsKeyDown(Keys.NumpadMinus)) {
                    this.updateScale(0.01);
                }

                grid.drawGrid(this._ships[0].position);

                this._ships.forEach(s => s.update());
                this._ships.forEach(s => s.draw());

                this._application.stage.pivot = new Vector(this._ships[0].position.x - this._screenOffset.x, this._ships[0].position.y - this._screenOffset.y);
            });


            const container = new Container();
            container.addChild(gridGraphics);
            container.addChild(...this._ships.map(s => s.container));

            //this._application.stage.addChild(gridGraphics);
            //this._application.stage.addChild(ship.container);
            this._application.stage.addChild(container);
        }
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
            <div ref={this.div}>
            </div>
        );
    }
}