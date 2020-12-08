import React, { useContext } from "react";
import { Link } from "react-router-dom";
import  "../styles/navigationRef.css";
import {CSSTransition} from 'react-transition-group' 
import { ThemeContext } from "../App";




const NavigationRef = (props : {navigation:boolean}) => {
    const theme = useContext(ThemeContext);
    return (
        <CSSTransition
        in={props.navigation}
        
        classNames="fadeInUp"
        timeout={{appear:100,enter:400,exit:300}}
        unmountOnExit
        mountOnEnter
        >
        <div className={["root",theme,"remove-scrollbar"].join(" ")} >
            <div className={"linksContainer"} >
                <Link  className={"links"} to="/"><h2 className={["h2",theme].join(" ")}>HOME</h2></Link>
            </div>
            <div className={"linksContainer"} >
                <Link  className={"links"} to="/about"><h2  className={["h2",theme].join(" ")}>ABOUT</h2></Link>
            </div>
            <div className={"linksContainer"} >
                <Link className={"links"} to="/portfolio"><h2  className={["h2",theme].join(" ")}>PORTFOLIO</h2></Link>
            </div>
            <div className={"linksContainer"} >
                <Link className={"links"} to="/contact"><h2  className={["h2",theme].join(" ")}>CONTACT</h2></Link>
            </div>

        </div>
        </CSSTransition>
    );
}
export default NavigationRef