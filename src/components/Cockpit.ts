import { Color, Graphics, IPoint, IPointData, ObservablePoint, Polygon, Transform } from "pixi.js";

export class Cockpit {

    private createPoint(x: number, y: number): IPointData {
        return {
            x,
            y
        } as IPointData
    }

    public draw(graphics: Graphics): void {
        //graphics.drawCircle(100, 100, 10);
        //graphics.endFill();


        // graphics.lineStyle({
        //     color: '#000000'
        // });

        // graphics.beginFill('#FFFFFF');
        // graphics.drawPolygon(new Polygon([
        //     0, 0, -10, -10, -30, -20, -50, -30, -70, -40
        // ]));
        // graphics.endFill();



        // Tip Highlight
        // graphics.beginFill('#FFFFFF');
        // this.createPoint(0, 0);

        graphics.beginFill('#FFFFFF');
        graphics.drawPolygon(new Polygon([
            this.createPoint(-10, -10),
            this.createPoint(-30, -20),
            this.createPoint(-50, -30),
            this.createPoint(-70, -40),
            this.createPoint(-90, -40),
            this.createPoint(-90, 40),
            this.createPoint(-70, 40),
            this.createPoint(-50, 30),
            this.createPoint(-30, 20),
            this.createPoint(-10, 10),
        ]));
        graphics.endFill();

        graphics.beginFill('#FFFFFF');
        graphics.drawPolygon(new Polygon([
            this.createPoint(-110, -40),
            this.createPoint(-110, 40),
            this.createPoint(-120, 40),
            this.createPoint(-120, -40),
        ]));
        graphics.endFill();

        graphics.beginFill('#FF00FF');
        graphics.drawPolygon(new Polygon([
            this.createPoint(-250, -50),
            this.createPoint(-300, 0),
            this.createPoint(-250, 50),
            this.createPoint(-270, 50),
            this.createPoint(-350, 0),
            this.createPoint(-270, -50),
        ]));
        graphics.endFill();

        // graphics.closePath();
        // graphics.endFill();
        //graphics.stroke();
        //graphics.fill();

        // .setStrokeColour(Colour.Black);

        // Tip Highlight Strip
        // graphics.beginPath();
        // this.createPoint(-11, -4);
        // this.createPoint(-11, 4);
        // this.createPoint(-12, 4);
        // this.createPoint(-12, -4);
        // graphicsclosePath();
        // graphics.stroke();
        // graphics.fill();

        //  .setStrokeColour(Colour.Black);
        //  .setFillColour(Colour.Green);

        // // Actual Cockpit
        // graphics.save();
        // graphics.scale(1.75, 1);
        // graphics.beginPath();
        // graphics.arc(-14, 0, 5, 0, Math.PI * 2);
        // graphics.stroke();
        // graphics.fill();
        // graphicsclosePath();
        // graphics.restore();

        //  .setStrokeColour(Colour.Black);
        //  .setStrokeColour(this._cSecondaryColour);

        // // Actual Cockpit Tail Strips
        // graphics.beginPath();
        // this.createPoint(-25, -5);
        // this.createPoint(-30, 0);
        // this.createPoint(-25, 5);
        // this.createPoint(-27, 5);
        // this.createPoint(-35, 0);
        // this.createPoint(-27, -5);
        // graphicsclosePath();
        // graphics.stroke();
        // graphics.fill();
    }
}