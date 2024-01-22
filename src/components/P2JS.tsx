'use client'

import { Application, Circle, Container, Graphics } from "pixi.js";
import React, { RefObject } from "react";
import { ReactNode } from "react";
import { Input } from "./Input";
import { Timer } from "./Timer";
import { Body, Circle as P2Circle, World, WorldOptions } from "p2";

export class P2JS extends React.Component {

    private div: RefObject<HTMLDivElement>;
    private _application: Application;
    private _scale: number = 1;
    private _world: World;

    constructor(props: any) {
        super(props);

        this.div = React.createRef();

        this.updateScale();
    }

    private createCircle(x: number, y: number, radius): Body {
        let circleBody = new Body({
            mass: 5,
            position: [x, y]
        })
        circleBody.addShape(new P2Circle({
            radius: 1
        }));

        return circleBody;
    }

    private createCircle2(x, y, radius): Graphics {
        const graphics = new Graphics();
        graphics.beginFill('#00FF00');
        graphics.drawCircle(x, y, 10);

        return graphics;
    }

    componentDidMount(): void {
        if (!this._application) {
            Timer.Init();

            this._application = new Application({ background: '#141414', resizeTo: window });
            this._world = new World({
                gravity: [0, 0]
            } as WorldOptions);

            const x: number = 100;
            const y: number = 100;



            const p2circle1 = this.createCircle(100, 100, 10);
            const p2circle2 = this.createCircle(99, 100, 10);

            this._world.addBody(p2circle1);
            this._world.addBody(p2circle2);

            const circle1 = this.createCircle2(100, 100, 10);
            const circle2 = this.createCircle2(109, 100, 10);

            this.div.current.appendChild(this._application.view as HTMLCanvasElement);

            this._application.stage.addChild(circle1);
            this._application.stage.addChild(circle2);


            this._application.ticker.add(() => {
                Input.Update();
                Timer.TIMER().update();

                console.log(Timer.ElapsedTime);

                this._world.step(1 / 60, Timer.ElapsedTime);

                circle1.position = {
                    x: p2circle1.position[0],
                    y: p2circle1.position[1]
                };

                circle2.position = {
                    x: p2circle2.position[0],
                    y: p2circle2.position[1]
                };
            });
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