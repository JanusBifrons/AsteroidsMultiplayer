import { Bodies, Body, Vector, Vertices } from "matter-js";
import { GameObject } from "../GameObject";
import { EGameObjectType } from "../GameObjectTypes";

export class Asteroid extends GameObject {

    constructor(position: Vector, radius: number = 100) {
        super(position, EGameObjectType.World);

        const points: number[] = [];
        const verts: Vector[] = [];

        const vertCount: number = (Math.random() * 6) + 10;

        for (let i = 0; i < vertCount; i++) {
            points.push(Math.random() * (Math.PI * 2));
        }

        // Sort from lowest to highest
        points.sort(function (a, b) { return b - a });

        for (let i = 0; i < points.length; i++) {
            var _x = radius * Math.cos(points[i]);
            var _y = radius * Math.sin(points[i]);

            verts.push(Vector.create(_x, _y));
        }

        //Vertices.clockwiseSort(verts);

        //console.log(Vertices.isConvex(Vertices.clockwiseSort(verts)));

        //Vertices.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50', this.body);

        //this.addPart(Bodies.polygon(position.x, position.y, Math.floor(Math.random() * 5), radius));

        this._body = Bodies.fromVertices(0, 0, [verts], {
        });

        Body.setDensity(this.body, 1);

        //this.body.isStatic = true;

    }
}