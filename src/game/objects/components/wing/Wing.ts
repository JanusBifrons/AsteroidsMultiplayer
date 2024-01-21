import { ShipComponent } from "../ShipComponent";

export class Wing extends ShipComponent {
    public draw(): void {
        super.draw();

        // Main body
        this._graphics.lineStyle(1, '#FFFFFF');
        this._graphics.beginFill('#FFFFFF');
        this._graphics.moveTo(-50, -320);
        this._graphics.lineTo(0, -300);
        this._graphics.lineTo(200, -150);
        this._graphics.lineTo(300, -50);
        this._graphics.lineTo(300, 0);
        this._graphics.lineTo(0, 0);
        this._graphics.closePath();

        // Highlight Line
        this._graphics.lineStyle(1, '#00FF00');
        this._graphics.beginFill('#00FF00');
        this._graphics.moveTo(300, -30);
        this._graphics.lineTo(200, -130);
        this._graphics.lineTo(0, -280);
        this._graphics.lineTo(-50, -300);
        this._graphics.lineTo(-50, -320);
        this._graphics.lineTo(0, -300);
        this._graphics.lineTo(200, -150);
        this._graphics.lineTo(300, -50);
        this._graphics.closePath();

        // Small Circle
        this._graphics.beginFill('#00FF00');
        this._graphics.drawCircle(50, -60, 50);
        this._graphics.beginFill('#FFFFFF');
        this._graphics.drawCircle(50, -60, 40);
        this._graphics.beginFill('#00FF00');
        this._graphics.drawCircle(50, -60, 20);

    }
}