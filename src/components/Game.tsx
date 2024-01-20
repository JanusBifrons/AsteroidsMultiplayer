'use client'

import { Application, Circle, Graphics, IPointData } from "pixi.js";
import React, { RefObject } from "react";
import { ReactNode } from "react";
import { Input } from "./Input";
import { Keys } from "./Keys";
import { Cockpit } from "./Cockpit";

export class Game extends React.Component {

    private div: RefObject<HTMLDivElement>;
    private mountCount: number = 0;
    private application: Application;
    private _circleX: number = 10;
    private _circleY: number = 10;
    private _screenScaleX: number = 1;
    private _screenScaleY: number = 1;

    constructor(props: any) {
        super(props);

        this.div = React.createRef();
    }

    componentDidMount(): void {
        if (!this.application) {
            this.application = new Application({ height: window.innerHeight, width: window.innerWidth });

            this.div.current.appendChild(this.application.view as HTMLCanvasElement);

            this.application.stage.pivot.x
            const graphics = new Graphics();

            this.application.ticker.add(() => {
                Input.Update();

                if (Input.IsKeyDown(Keys.A)) {
                    this.application.stage.x += 1;
                }

                if (Input.IsKeyDown(Keys.D)) {
                    this.application.stage.x -= 1;
                }

                if (Input.IsKeyDown(Keys.S)) {
                    this.application.stage.y -= 1;
                }

                if (Input.IsKeyDown(Keys.W)) {
                    this.application.stage.y += 1;
                }


                if (Input.IsKeyDown(Keys.Q)) {
                    this._screenScaleX += 0.01;
                    this._screenScaleY += 0.01;

                    this.application.stage.scale = {
                        x: this._screenScaleX,
                        y: this._screenScaleY
                    } as IPointData;
                }

                if (Input.IsKeyDown(Keys.E)) {
                    this._screenScaleX -= 0.01;
                    this._screenScaleY -= 0.01;

                    this.application.stage.scale = {
                        x: this._screenScaleX,
                        y: this._screenScaleY
                    } as IPointData;
                }

                //graphics.beginFill('#FFFFFF');
                //graphics.drawPolygon(10, 10, 120, 100, 120, 200, 70, 200);
                //graphics.endFill();

                new Cockpit().draw(graphics);


                // graphics.clear();
                // graphics.beginFill('#FFFFFF');
                // graphics.drawCircle(this._circleX, this._circleY, 10);
                // graphics.endFill();

                //new Cockpit().draw(graphics);

                //new Cockpit().draw(graphics);


                this.application.stage.addChild(graphics);
            });
        }

        this.mountCount += 1;

        console.log(this.mountCount);
    }

    public render(): ReactNode {
        return (
            <div ref={this.div}>
            </div>
        );
    }
}