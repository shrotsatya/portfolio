import { Link } from "react-router-dom";
import React, { useContext } from "react";
import useMedia from "use-media";
import { Logo } from "./Logo";
import "../styles/header.css";
import ThemeSwitch from "./ThemeSwitch";
import {ThemeContext} from "../App";
import useDarkMode from "use-dark-mode";

const Header = () => {
  const isWide = useMedia({ minWidth: 700 });
  const darkMode = useDarkMode();
  const theme:string=useContext(ThemeContext);
  
  return (<header
    className={["header-container", darkMode.value ? "light-border" : "dark-border"].join(" ")}
  >
    <div className={"logo"}>
      <Link
        to="/"

      >
        <Logo />


      </Link>
    </div>

    <nav >
      {isWide && <ul>
        <li className="a-decoration"><Link to="/"><h2  className={theme}>Home</h2></Link></li>
        <li className="a-decoration"><Link to="/about" ><h2 className={theme}>About</h2></Link></li>
        <li className="a-decoration"><Link to="/portfolio"><h2 className={theme}>Portfolio</h2></Link></li>
        <li className="a-decoration"><Link to="/contact"><h2 className={theme}>Contact</h2></Link></li>
      </ul>}
      <ThemeSwitch />

    </nav>



  </header>)
}


export default Header;
