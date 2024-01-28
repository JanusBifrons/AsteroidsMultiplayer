import { Component } from "../Component";
import { Bodies, Vector, Body } from "matter-js";

// export class Block extends Component {
//     constructor(position: Vector, public width: number, public height: number) {
//         super(position);

//         this.addPart(Bodies.rectangle(position.x, position.y, this.width, this.height));
//     }
// }

export class Block {
    public static getBody(position: Vector, width: number, height: number): Body {
        return Bodies.rectangle(position.x, position.y, width, height);
    }

}