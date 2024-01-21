import { Graphics } from "pixi.js";
import { ShipComponent } from "../ShipComponent";

export class Pad extends ShipComponent {
    public draw(): void {
        super.draw();

        // Body
        this._graphics.lineStyle(1, '#FFFFFF');
        this._graphics.beginFill('#FFFFFF');
        this._graphics.moveTo(20, -50);
        this._graphics.lineTo(100, -70);
        this._graphics.lineTo(200, -120);
        this._graphics.lineTo(250, -100);
        this._graphics.lineTo(270, -50);
        this._graphics.lineTo(200, 0);
        this._graphics.lineTo(0, 0);
        this._graphics.closePath();

        // Highlight
        this._graphics.lineStyle(1, '#00FF00');
        this._graphics.beginFill('#00FF00');
        this._graphics.moveTo(100, 0);
        this._graphics.lineTo(230, -110);
        this._graphics.lineTo(200, -120);
        this._graphics.lineTo(100, -70);
        this._graphics.lineTo(20, -50);
        this._graphics.lineTo(0, 0);
        this._graphics.closePath();
    }
}