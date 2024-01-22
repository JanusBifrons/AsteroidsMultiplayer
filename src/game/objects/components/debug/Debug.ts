import { Graphics } from "pixi.js";
import { ShipComponent } from "../ShipComponent";
import { Vector } from "@/components/Vector";

export class Debug extends ShipComponent {
    public draw(): void {
        super.draw();

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

        // Main body
        this._graphics.lineStyle(1, '#FFFFFF');
        this._graphics.beginFill('#FFFFFF');
        this._graphics.moveTo(-10, 10);
        this._graphics.lineTo(-30, 20);
        this._graphics.lineTo(-50, 30);
        this._graphics.lineTo(-70, 40);
        this._graphics.lineTo(-150, 40);
        this._graphics.lineTo(-180, 60);
        this._graphics.lineTo(-250, 80);
        this._graphics.lineTo(-250, -80);
        this._graphics.lineTo(-180, -60);
        this._graphics.lineTo(-150, -40);
        this._graphics.lineTo(-70, -40);
        this._graphics.lineTo(-50, -30);
        this._graphics.lineTo(-30, -20);
        this._graphics.lineTo(-10, -10);
        this._graphics.lineTo(0, 0);

        // // Tip Highlight
        // this._graphics.lineStyle(1, '#00FF00');
        // this._graphics.beginFill('#00FF00');
        // this._graphics.lineTo(-10, -10);
        // this._graphics.lineTo(-30, -20);
        // this._graphics.lineTo(-50, -30);
        // this._graphics.lineTo(-70, -40);
        // this._graphics.lineTo(-90, -40);
        // this._graphics.lineTo(-90, 40);
        // this._graphics.lineTo(-70, 40);
        // this._graphics.lineTo(-50, 30);
        // this._graphics.lineTo(-30, 20);
        // this._graphics.lineTo(-10, 10);
        // this._graphics.closePath();

        // // Tip Highlight Strip
        // this._graphics.lineStyle(1, '#00FF00');
        // this._graphics.beginFill('#00FF00');
        // this._graphics.moveTo(-110, -40);
        // this._graphics.lineTo(-110, 40);
        // this._graphics.lineTo(-120, 40);
        // this._graphics.lineTo(-120, -40);
        // this._graphics.closePath();

        // // Actual Cockpit
        // this._graphics.lineStyle(1, '#000000')
        // this._graphics.beginFill('#000000');
        // this._graphics.drawEllipse(-170, 0, 50, 30);
        // this._graphics.closePath();

        // // Actual Cockpit Tail Strips
        // this._graphics.lineStyle(1, '#00FF00');
        // this._graphics.beginFill('#00FF00');
        // this._graphics.moveTo(-250, -50);
        // this._graphics.lineTo(-300, 0);
        // this._graphics.lineTo(-250, 50);
        // this._graphics.lineTo(-270, 50);
        // this._graphics.lineTo(-350, 0);
        // this._graphics.lineTo(-270, -50);
        // this._graphics.closePath();
    }
}