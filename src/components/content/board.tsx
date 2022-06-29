import React from 'react';
import CellComponent from "./cell/cell";
import {Board} from "../../models/board";
import {useTypedSelector} from "../../hooks/useTypeSelector";

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void,
}

const BoardComponent: React.FC<BoardProps> = ({board, setBoard}) => {
    const {value} = useTypedSelector(state => state.box)
    return (
        <div className="Content"
             style={{
                 display: "flex",
                 flexWrap: "wrap",
                 width: `calc(42px*${value.field})`,
                 height: `calc(42px*${value.field})`
             }}>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell => <CellComponent cell={cell} key={cell.id}/>)}
                </React.Fragment>)}
        </div>
    );
};

export default BoardComponent;