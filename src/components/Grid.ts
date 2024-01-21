import { Graphics, IPointData } from "pixi.js";

export class Grid {
    static drawGrid(graphics: Graphics, offset: IPointData) {
        let nSize: number = 5000;
        let nGridSize: number = 10;
        let nSmallGridSize: number = 10;
        let nThick: number = 2;
        let nThin: number = 1;

        let nX: number = (Math.round(offset.x / nSize) * nSize) - (nSize * (nGridSize / 2));
        let nY: number = (Math.round(offset.y / nSize) * nSize) - (nSize * (nGridSize / 2));
        let nSmallX: number = 0;
        let nSmallY: number = 0;

        //m_kContext.strokeStyle = 'darkgray';

        // // Draw first two lines
        // //graphics.moveToWorldSpace();
        // m_kContext.beginPath();
        // m_kContext.lineWidth = nThick;
        // m_kContext.moveTo(nX, nY);
        // m_kContext.lineTo(nX + (nSize * nGridSize), nY);
        // m_kContext.moveTo(nX, nY);
        // m_kContext.lineTo(nX, nY + (nSize * nGridSize));
        // m_kContext.stroke();
        // //graphics.moveToScreenSpace();

        // for (var i = 0; i < nGridSize; i++) {
        //     nSmallX = nX;
        //     nSmallY = nY;

        //     graphics.moveToWorldSpace();

        //     for (var j = 0; j < nSmallGridSize; j++) {
        //         m_kContext.beginPath();
        //         m_kContext.lineWidth = nThin;
        //         m_kContext.moveTo(nSmallX, nSmallY);
        //         m_kContext.lineTo(nSmallX + (nSize * nGridSize), nSmallY);
        //         m_kContext.stroke();

        //         nSmallY += (nSize / nSmallGridSize);
        //     }

        //     nY += nSize;

        //     m_kContext.beginPath();
        //     m_kContext.lineWidth = nThick;
        //     m_kContext.moveTo(nX, nY);
        //     m_kContext.lineTo(nX + (nSize * nGridSize), nY);
        //     m_kContext.stroke();

        //     graphics.moveToScreenSpace();
        // }

        // nX = (Math.round(offset.X / nSize) * nSize) - (nSize * (nGridSize / 2));
        // nY = (Math.round(offset.Y / nSize) * nSize) - (nSize * (nGridSize / 2));

        // for (var i = 0; i < nGridSize; i++) {
        //     nSmallX = nX;
        //     nSmallY = nY;

        //     graphics.moveToWorldSpace();

        //     for (var j = 0; j < nSmallGridSize; j++) {
        //         m_kContext.beginPath();
        //         m_kContext.lineWidth = nThin;
        //         m_kContext.moveTo(nSmallX, nSmallY);
        //         m_kContext.lineTo(nSmallX, nSmallY + (nSize * nGridSize));
        //         m_kContext.stroke();

        //         nSmallX += (nSize / nSmallGridSize);
        //     }

        //     nX += nSize;

        //     m_kContext.beginPath();
        //     m_kContext.lineWidth = nThick;
        //     m_kContext.moveTo(nX, nY);
        //     m_kContext.lineTo(nX, nY + (nSize * nGridSize));
        //     m_kContext.stroke();

        //     graphics.moveToScreenSpace();
        // }
    }
}