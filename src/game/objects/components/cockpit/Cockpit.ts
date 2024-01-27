import { ShipComponent } from "../ShipComponent";
import { Bodies, Composite, Composites, Vector, Vertices } from "matter-js";

export class Cockpit extends ShipComponent {
    constructor() {
        super();
    }

    public createBody(): void {
        const verts: Vector[] = [];
        verts.push(Vector.create(-10, 10));
        verts.push(Vector.create(-30, 20));
        verts.push(Vector.create(-50, 30));
        verts.push(Vector.create(-70, 40));
        verts.push(Vector.create(-150, 40));
        verts.push(Vector.create(-180, 60));
        verts.push(Vector.create(-250, 80));
        verts.push(Vector.create(-250, -80));
        verts.push(Vector.create(-180, -60));
        verts.push(Vector.create(-150, -40));
        verts.push(Vector.create(-70, -40));
        verts.push(Vector.create(-50, -30));
        verts.push(Vector.create(-30, -20));
        verts.push(Vector.create(-10, -10));
        verts.push(Vector.create(0, 0));

        this._body = Bodies.fromVertices(0, 0, [verts], {

        });
    }
}