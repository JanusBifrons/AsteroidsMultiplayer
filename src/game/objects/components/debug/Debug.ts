import { Graphics } from "pixi.js";
import { ShipComponent } from "../ShipComponent";
import { Vector } from "@/components/Vector";

export class Debug extends ShipComponent {
    public createOutline(): void {
        // this._points.push(new Vector(-500, 500));
        // this._points.push(new Vector(-500, -500));
        // this._points.push(new Vector(500, -500));

        // this._points.push(new Vector(-333.3333282470703, 666.6666717529297));
        // this._points.push(new Vector(-333.3333282470703, -333.3333282470703));
        // this._points.push(new Vector(666.6666717529297, -333.3333282470703));

        // this._points.push(new Vector(-50, -50));
        // this._points.push(new Vector(50, -50));
        // this._points.push(new Vector(50, 50));
        // this._points.push(new Vector(-50, 50));

        // Wing
        // this._points.push(new Vector(-50, -320));
        // this._points.push(new Vector(0, -300));
        // this._points.push(new Vector(200, -150));
        // this._points.push(new Vector(300, -50));
        // this._points.push(new Vector(300, 0));
        // this._points.push(new Vector(0, 0));

        // Cockpit
        this._points.push(new Vector(-10, 10));
        this._points.push(new Vector(-30, 20));
        this._points.push(new Vector(-50, 30));
        this._points.push(new Vector(-70, 40));
        this._points.push(new Vector(-150, 40));
        this._points.push(new Vector(-180, 60));
        this._points.push(new Vector(-250, 80));
        this._points.push(new Vector(-250, -80));
        this._points.push(new Vector(-180, -60));
        this._points.push(new Vector(-150, -40));
        this._points.push(new Vector(-70, -40));
        this._points.push(new Vector(-50, -30));
        this._points.push(new Vector(-30, -20));
        this._points.push(new Vector(-10, -10));
        this._points.push(new Vector(0, 0));

        // Rectangle
        // this._points.push(new Vector(0, 0));
        // this._points.push(new Vector(1000, 0));
        // this._points.push(new Vector(1000, 100));
        // this._points.push(new Vector(0, 100));
    }

    public draw(): void {
        super.draw();

        this._graphics.lineStyle(1, '#00FF00');
        this._graphics.beginFill('#00FF00');

        for (let i = 0; i < this._points.length; i++) {
            if (i == 0) {
                this._graphics.moveTo(this._points[i].x, this._points[i].y);
            }
            else {
                this._graphics.lineTo(this._points[i].x, this._points[i].y);
            }
        }

        this._graphics.closePath();

        // this._points.push(new Vector(0, 0));
        // this._points.push(new Vector(100, 0));
        // this._points.push(new Vector(100, 100));
        // this._points.push(new Vector(0, 100));

        // this._graphics.lineStyle(1, '#00FF00');
        // this._graphics.beginFill('#00FF00');
        // this._graphics.moveTo(0, 0);
        // this._graphics.lineTo(100, 0);
        // this._graphics.lineTo(100, 100);
        // this._graphics.lineTo(0, 100);
        // this._graphics.closePath();

        // this._points.push(new Vector(-10, 10));
        // this._points.push(new Vector(-30, 20));
        // this._points.push(new Vector(-50, 30));
        // this._points.push(new Vector(-70, 40));
        // this._points.push(new Vector(-150, 40));
        // this._points.push(new Vector(-180, 60));
        // this._points.push(new Vector(-250, 80));
        // this._points.push(new Vector(-250, -80));
        // this._points.push(new Vector(-180, -60));
        // this._points.push(new Vector(-150, -40));
        // this._points.push(new Vector(-70, -40));
        // this._points.push(new Vector(-50, -30));
        // this._points.push(new Vector(-30, -20));
        // this._points.push(new Vector(-10, -10));
        // this._points.push(new Vector(0, 0));

        // this._graphics.lineStyle(1, '#FFFFFF');
        // this._graphics.beginFill('#FFFFFF');
        // this._graphics.moveTo(-10, 10);
        // this._graphics.lineTo(-30, 20);
        // this._graphics.lineTo(-50, 30);
        // this._graphics.lineTo(-70, 40);
        // this._graphics.lineTo(-150, 40);
        // this._graphics.lineTo(-180, 60);
        // this._graphics.lineTo(-250, 80);
        // this._graphics.lineTo(-250, -80);
        // this._graphics.lineTo(-180, -60);
        // this._graphics.lineTo(-150, -40);
        // this._graphics.lineTo(-70, -40);
        // this._graphics.lineTo(-50, -30);
        // this._graphics.lineTo(-30, -20);
        // this._graphics.lineTo(-10, -10);
        // this._graphics.lineTo(0, 0);
    }
}