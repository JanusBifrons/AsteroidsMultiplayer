'use client'

import { Application, Circle, Graphics, IPointData } from "pixi.js";
import React, { RefObject } from "react";
import { ReactNode } from "react";
import { Input } from "./Input";
import { Keys } from "./Keys";
import { Cockpit } from "./Cockpit";
import { Ship } from "./Ship";

export class Game extends React.Component {

    private div: RefObject<HTMLDivElement>;
    private application: Application;

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
            const ship = new Ship(graphics);

            this.application.ticker.add(() => {
                Input.Update();
                ship.update();
                ship.draw(graphics);
            });

            this.application.stage.addChild(graphics);
        }
    }

    public render(): ReactNode {
        return (
            <div ref={this.div}>
            </div>
        );
    }
}