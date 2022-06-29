import {Cell} from "./cell";

export class Board {
    cells: Cell[][] = []
    public initCells(value: number) {
        for (let i = 1; i <= value; i++) {
            const row:Cell[] = []
            for (let j = 1; j <= value; j++){
                row.push(new Cell(this, i, j))
            }
            this.cells.push(row)
        }
    }
}

