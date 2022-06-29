import {Board} from "./board";

export class Cell {
    readonly x: number
    readonly y: number
    readonly id: number
    constructor(board:Board, x:number, y:number) {
        this.x = x
        this.y = y
        this.id = Math.random()
    }
}