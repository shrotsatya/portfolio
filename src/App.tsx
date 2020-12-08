import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "./styles/App.css";
import useDarkMode from 'use-dark-mode';


export const  ThemeContext = React.createContext("dark-mode");

const App: React.FC = () => {
  
  const darkMode = useDarkMode();
  return (
    <Router>
      <ThemeContext.Provider value={darkMode.value?"dark-mode":"light-mode"}>
        <div className="App">
          <Routes />
        </div>
        </ThemeContext.Provider>
    </Router>

  );
}

export default App;
