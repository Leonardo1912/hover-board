import React from 'react';
import "./hover.scss"
import {useTypedSelector} from "../../hooks/useTypeSelector";

const HoverComponent = () => {
    const {hovers} = useTypedSelector(state => state.box)
    const newHover = hovers.slice(0, 4)
    return (
        <div className="HoverComponent">
            <div className="header">Hover squares</div>
            <div className="hoverBlock">
                {newHover.map((hover) => <div className={"hover"} key={Math.random()}>row {hover.x} col {hover.y}</div>)}
            </div>
        </div>
    );
};

export default HoverComponent;