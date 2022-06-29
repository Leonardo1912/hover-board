import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "./components/header/header";
import {useActions} from "./hooks/useActions";
import {Board} from "./models/board";
import BoardComponent from "./components/content/board";
import {useTypedSelector} from "./hooks/useTypeSelector";
import HoverComponent from "./components/hover/hoverComponent";

const App: React.FC = () => {
    const {fetchBox} = useActions()
    const [board, setBoard] = useState(new Board())
    const {value} = useTypedSelector(state => state.box)
    useEffect(() => {
        fetchBox()
        restart()
    }, [value])

    function restart() {
        const newBoard = new Board()
        newBoard.initCells(value.field as number)
        setBoard(newBoard)
    }

    return (
        <div className="App">
            <div className="content">
                <Header/>
                <BoardComponent board={board} setBoard={setBoard}/>
            </div>
            <div className="hover">
                <HoverComponent/>
            </div>
        </div>
    );
}

export default App;
