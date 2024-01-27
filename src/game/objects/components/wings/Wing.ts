import { Bodies, Vector } from "matter-js";
import { ShipComponent } from "../ShipComponent";

export class Wing extends ShipComponent {
    public createBody(): void {

        const verts: Vector[] = [];

        verts.push(Vector.create(-50, -320));
        verts.push(Vector.create(0, -300));
        verts.push(Vector.create(200, -150));
        verts.push(Vector.create(300, -50));
        verts.push(Vector.create(300, 0));
        verts.push(Vector.create(0, 0));

        this._body = Bodies.fromVertices(0, 0, [verts], {
        });
    }
}