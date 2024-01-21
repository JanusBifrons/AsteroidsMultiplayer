import { ShipComponent } from "../ShipComponent";

export class RearWing extends ShipComponent {
    public draw(): void {
        super.draw();

        // Main body
        this._graphics.lineStyle(1, '#FFFFFF');
        this._graphics.beginFill('#FFFFFF');
        this._graphics.moveTo(-120, 0);
        this._graphics.lineTo(-190, -260);
        this._graphics.lineTo(-180, -330);
        this._graphics.lineTo(0, -100);
        this._graphics.closePath();

        this._graphics.lineStyle(1, '#00FF00');
        this._graphics.beginFill('#00FF00');
        this._graphics.moveTo(-80, -30);
        this._graphics.lineTo(-160, -260);
        this._graphics.lineTo(-150, -290);
        this._graphics.lineTo(-180, -330);
        this._graphics.lineTo(-190, -260);
        this._graphics.lineTo(-120, 0);
        this._graphics.closePath();

        // Smaller Highlight Line
        this._graphics.lineStyle(1, '#FFFFFF');
        this._graphics.beginFill('#FFFFFF');
        this._graphics.moveTo(-10, -90);
        this._graphics.lineTo(-70, -160);
        this._graphics.lineTo(-60, -180);
        this._graphics.lineTo(0, -100);
        this._graphics.closePath();
    }
}