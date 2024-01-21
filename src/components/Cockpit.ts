import { Color, Ellipse, Graphics, IPoint, IPointData, ObservablePoint, Polygon, Transform } from "pixi.js";

export class Cockpit {

    private createPoint(x: number, y: number): IPointData {
        return {
            x,
            y
        } as IPointData
    }

    public draw(graphics: Graphics): void {
        graphics.lineStyle(10, '#FFFFFF');
        graphics.beginFill('#FFFFFF');
        graphics.lineTo(-1, -1);
        graphics.lineTo(-3, -2);
        graphics.lineTo(-5, -3);
        graphics.lineTo(-7, -4);
        graphics.lineTo(-9, -4);
        graphics.lineTo(-9, 4);
        graphics.lineTo(-7, 4);
        graphics.lineTo(-5, 3);
        graphics.lineTo(-3, 2);
        graphics.lineTo(-1, 1);
        graphics.closePath();


        // graphics.drawPolygon(new Polygon([
        //     this.createPoint(-10, 10),
        //     this.createPoint(-30, 20),
        //     this.createPoint(-50, 30),
        //     this.createPoint(-70, 40),
        //     this.createPoint(-150, 40),
        //     this.createPoint(-180, 60),
        //     this.createPoint(-250, 80),
        //     this.createPoint(-250, -80),
        //     this.createPoint(-180, -60),
        //     this.createPoint(-150, -40),
        //     this.createPoint(-70, -40),
        //     this.createPoint(-50, -30),
        //     this.createPoint(-30, -20),
        //     this.createPoint(-10, -10),
        //     this.createPoint(0, 0),
        // ]));
        // graphics.endFill();

        // graphics.beginFill('#FF00FF');
        // graphics.drawPolygon(new Polygon([
        //     this.createPoint(-10, -10),
        //     this.createPoint(-30, -20),
        //     this.createPoint(-50, -30),
        //     this.createPoint(-70, -40),
        //     this.createPoint(-90, -40),
        //     this.createPoint(-90, 40),
        //     this.createPoint(-70, 40),
        //     this.createPoint(-50, 30),
        //     this.createPoint(-30, 20),
        //     this.createPoint(-10, 10),
        // ]));
        // graphics.endFill();

        // graphics.beginFill('#FF00FF');
        // graphics.drawPolygon(new Polygon([
        //     this.createPoint(-110, -40),
        //     this.createPoint(-110, 40),
        //     this.createPoint(-120, 40),
        //     this.createPoint(-120, -40),
        // ]));
        // graphics.endFill();

        // graphics.beginFill('#FF00FF');
        // graphics.drawPolygon(new Polygon([
        //     this.createPoint(-250, -50),
        //     this.createPoint(-300, 0),
        //     this.createPoint(-250, 50),
        //     this.createPoint(-270, 50),
        //     this.createPoint(-350, 0),
        //     this.createPoint(-270, -50),
        // ]));
        // graphics.endFill();

        // // Actual Cockpit
        // graphics.beginFill('#FF00FF');
        // graphics.drawCircle(-140, 0, 50);
        // graphics.endFill();

        // graphics.beginFill('#FF00FF');
        // graphics.drawPolygon(new Polygon([
        //     this.createPoint(-250, -50),
        //     this.createPoint(-300, 0),
        //     this.createPoint(-250, 50),
        //     this.createPoint(-270, 50),
        //     this.createPoint(-350, 0),
        //     this.createPoint(-270, -50),
        // ]));
        // graphics.endFill();
    }
}