import React from "react"
import Layout from "../components/Layout"
import "../styles/home.css";
import useDarkMode from 'use-dark-mode';
const IndexPage:React.FC = () => {
  const darkMode = useDarkMode();
  return (
  <Layout>
   
    <div className="greeting-container">
     <h1 className="hi">Hi, <span className="nameholder">I'm <span className={darkMode.value?"nameDark":"nameLight"}>Satyam Shrotriya</span></span></h1>
    <p>I make things on the Internet.</p>
    </div>
    
  </Layout>
)}

export default IndexPage
