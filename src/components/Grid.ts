import { Graphics, IPointData } from "pixi.js";

export class Grid {
    ///
    /// PRIVATE
    ///
    private _graphics: Graphics;

    constructor(graphics: Graphics) {
        this._graphics = graphics;
    }

    public drawGrid(offset: IPointData) {

        this._graphics.clear();

        let nSize: number = 5000;
        let nGridSize: number = 10;
        let nSmallGridSize: number = 10;
        let nThick: number = 2;
        let nThin: number = 1;

        let nX: number = (Math.round(offset.x / nSize) * nSize) - (nSize * (nGridSize / 2));
        let nY: number = (Math.round(offset.y / nSize) * nSize) - (nSize * (nGridSize / 2));
        let nSmallX: number = 0;
        let nSmallY: number = 0;

        // Draw first two lines
        this._graphics.beginFill('#FFFFFF', 1);
        this._graphics.lineStyle(nThick, '#FFFFFF', 1);
        this._graphics.moveTo(nX, nY);
        this._graphics.lineTo(nX + (nSize * nGridSize), nY);
        this._graphics.moveTo(nX, nY);
        this._graphics.lineTo(nX, nY + (nSize * nGridSize));
        this._graphics.closePath();

        for (var i = 0; i < nGridSize; i++) {
            nSmallX = nX;
            nSmallY = nY;

            for (var j = 0; j < nSmallGridSize; j++) {
                this._graphics.beginFill('#FFFFFF');
                this._graphics.lineStyle(nThin, '#FFFFFF', 1);
                this._graphics.moveTo(nSmallX, nSmallY);
                this._graphics.lineTo(nSmallX + (nSize * nGridSize), nSmallY);
                this._graphics.closePath();

                nSmallY += (nSize / nSmallGridSize);
            }

            nY += nSize;

            this._graphics.beginFill('#FFFFFF');
            this._graphics.lineStyle(nThick, '#FFFFFF', 1);
            this._graphics.moveTo(nX, nY);
            this._graphics.lineTo(nX + (nSize * nGridSize), nY);
            this._graphics.closePath();
        }

        nX = (Math.round(offset.x / nSize) * nSize) - (nSize * (nGridSize / 2));
        nY = (Math.round(offset.y / nSize) * nSize) - (nSize * (nGridSize / 2));

        for (var i = 0; i < nGridSize; i++) {
            nSmallX = nX;
            nSmallY = nY;

            for (var j = 0; j < nSmallGridSize; j++) {
                this._graphics.beginFill('#FFFFFF');
                this._graphics.lineStyle(nThin, '#FFFFFF', 1);
                this._graphics.moveTo(nSmallX, nSmallY);
                this._graphics.lineTo(nSmallX, nSmallY + (nSize * nGridSize));
                this._graphics.closePath();

                nSmallX += (nSize / nSmallGridSize);
            }

            nX += nSize;

            this._graphics.beginFill('#FFFFFF');
            this._graphics.lineStyle(nThick, '#FFFFFF', 1);
            this._graphics.moveTo(nX, nY);
            this._graphics.lineTo(nX, nY + (nSize * nGridSize));
            this._graphics.closePath();
        }
    }
}