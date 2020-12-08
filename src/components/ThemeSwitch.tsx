import React from "react";
//@ts-ignore
import Toggle from "react-toggle";
import sun from '../assets/sun.png';
import moon from "../assets/moon.png"
import useDarkMode from "use-dark-mode";
import "../styles/toggle.css";

const ThemeSwitch: any = () => {

    const darkMode = useDarkMode();
    return (
        <div >
            
                <Toggle
                    icons={{
                        checked: (
                            <img
                                src={moon}
                                alt="moon"
                                width="16"
                                height="16"
                                style={{ pointerEvents: 'none' }}
                            />
                        ),
                        unchecked: (
                            <img
                                src={sun}
                                width="16"
                                height="16"
                                alt="sun"
                                style={{ pointerEvents: 'none' }}
                            />
                        ),
                    }}
                    checked={darkMode.value}
                    onChange={darkMode.toggle}
                />
           
        </div>
    )
}

export default ThemeSwitch;