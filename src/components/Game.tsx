'use client'

import { Application, Circle, Graphics } from "pixi.js";
import React, { RefObject } from "react";
import { ReactNode } from "react";
import { Input } from "./Input";
import { Keys } from "./Keys";

export class Game extends React.Component {

    private div: RefObject<HTMLDivElement>;
    private mountCount: number = 0;
    private application: Application;
    private _circleX: number = 10;
    private _circleY: number = 10;

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
                console.log(Input.Update());

                if (Input.IsKeyDown(Keys.A)) {
                    this._circleX -= 1;
                }

                if (Input.IsKeyDown(Keys.D)) {
                    this._circleX += 1;
                }


                graphics.clear();
                graphics.beginFill('#FFFFFF');
                graphics.drawCircle(this._circleX, this._circleY, 10);
                graphics.endFill();



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