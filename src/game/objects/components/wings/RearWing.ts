import { Bodies, Vector } from "matter-js";
import { ShipComponent } from "../ShipComponent";

export class RearWing extends ShipComponent {
    public createBody(): void {
        const verts: Vector[] = [];
        verts.push(Vector.create(-120, 0));
        verts.push(Vector.create(-190, -260));
        verts.push(Vector.create(-180, -330));
        verts.push(Vector.create(0, -100));

        this._body = Bodies.fromVertices(0, 0, [verts], {

        });
    }
}