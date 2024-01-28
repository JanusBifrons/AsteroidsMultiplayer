import { Input } from "@/components/Input";
import { Ship } from "./objects/ships/Ship";
import { Keys } from "@/components/Keys";

export class Player {
    ///
    /// PRIVATE
    ///
    private _ship;

    constructor(ship: Ship) {
        this._ship = ship;
    }

    public update(): void {
        if (Input.IsKeyDown(Keys.A)) {
            this._ship.turnToPort();
        }

        if (Input.IsKeyDown(Keys.D)) {
            this._ship.turnToStarboard();
        }

        if (!Input.IsKeyDown(Keys.Shift)) {
            if (Input.IsKeyDown(Keys.W)) {
                this._ship.accellerate();
            }
        }
        else {
            this._ship.afterBurn();
        }

        if (Input.IsKeyDown(Keys.S)) {
            this._ship.decellerate();
        }

        if (Input.IsKeyDown(Keys.Q)) {

        }

        if (Input.IsKeyDown(Keys.E)) {

        }
    }

    ///
    /// PROPERTIES
    ///

    public get ship(): Ship {
        return this._ship;
    }
}