import React, {useState} from 'react';
import "./cell.scss"
import {Cell} from "../../../models/cell";
import {useActions} from "../../../hooks/useActions";

interface CellProps {
    cell: Cell
}

const CellComponent: React.FC<CellProps> = ({cell}) => {
    const [isHover, setIsHover] = useState(false)
    const {setHover} = useActions()
    const hover = () => {
        setIsHover(!isHover)
        setHover(cell)
    }
    return (
        <div className="Cell" onMouseEnter={hover}
             style={isHover ? {background: "#03a8f4"} : {background: "white"}}>

        </div>
    );
};

export default CellComponent;