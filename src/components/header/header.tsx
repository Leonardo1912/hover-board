import React, {useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";
import "./header.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
    const {box} = useTypedSelector(state => state.box)
    const [value, setValue] = useState({name: box[0]?.name})
    const [err, setErr] = useState(false)
    const [active, setActive] = useState(false)
    const {setCurrentValue, restartHovers} = useActions()
    const start = () => {
        if (!value) {
            setErr(true)
        } else {
            setCurrentValue(value)
            restartHovers()
            setErr(false)
        }

    }
    return (
        <div className="Header">
            <div className="content">
                <div className="menu">
                    <div className="currentValue"
                         onClick={() => setActive(!active)}>
                        <div>{!value.name ? "Choose an option" : value.name}</div>
                        <div><FontAwesomeIcon icon={faCaretDown}/></div>
                    </div>
                    <div className={active ? "dropDownActive" : "dropDown"}>
                        {box.map(item => <div className="item" key={item.field} onClick={() => {
                            setValue(item)
                            setActive(false)
                        }}>{item.name}</div>)}
                    </div>
                </div>
                <div style={err ? {display: 'block'} : {display: 'none'}}>Choose an option</div>
            </div>
            <div>
                <button onClick={start}>START</button>
            </div>
        </div>
    );
};

export default Header;