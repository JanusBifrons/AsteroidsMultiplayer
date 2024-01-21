'use client'

import { Application, Circle, Graphics } from "pixi.js";
import React, { RefObject } from "react";
import { ReactNode } from "react";
import { Input } from "./Input";
import { Keys } from "./Keys";
import { Ship } from "../game/objects/ships/Ship";
import { Grid } from "./Grid";
import { Vector } from "./Vector";
import { Havoc } from "@/game/objects/ships/Havoc";
import { Timer } from "./Timer";

export class Game extends React.Component {

    private div: RefObject<HTMLDivElement>;
    private _application: Application;
    private _scale: number = 1;
    private _screenOffset: Vector;

    constructor(props: any) {
        super(props);

        this.div = React.createRef();

        this.updateScale();
    }

    componentDidMount(): void {
        if (!this._application) {
            Timer.Init();

            this._screenOffset = new Vector((window.innerWidth / 2), (window.innerHeight / 2));

            this._application = new Application({ height: window.innerHeight, width: window.innerWidth });

            this.div.current.appendChild(this._application.view as HTMLCanvasElement);

            this._application.stage.pivot.x
            const gridGraphics = new Graphics();

            const ship = new Havoc();
            const grid = new Grid(gridGraphics);

            this._application.ticker.add(() => {
                Input.Update();
                Timer.TIMER().update();

                if (Input.IsKeyDown(Keys.NumpadPlus)) {
                    this.updateScale(-0.01);
                }

                if (Input.IsKeyDown(Keys.NumpadMinus)) {
                    this.updateScale(0.01);
                }

                grid.drawGrid(ship.position);

                ship.update();
                ship.draw();

                this._application.stage.scale = { x: this._scale, y: this._scale };

                this._application.stage.pivot = new Vector(ship.position.x - this._screenOffset.x, ship.position.y - this._screenOffset.y);
            });

            this._application.stage.addChild(gridGraphics);
            this._application.stage.addChild(ship.container);
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