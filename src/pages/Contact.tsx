import React from "react"
import "../styles/contact.css";
import Layout from "../components/Layout";
import useDarkMode from "use-dark-mode";
const Contact: React.FC = () => {
  const darkMode = useDarkMode();
  const linkStyle = { color: darkMode.value ? "#9a97f3" : "#302ae6" };
  return (<Layout>
    <h1 className="heading">Contact Me</h1>


    <div className="contact-container">
      <h3><span role='img' aria-label="email">📧</span>Email Me</h3>
      <p>For work related, email me at : <a style={linkStyle} href=" mailto:shrotsatya6@gmail.com">shrotsatya6@gmail.com</a></p>
    </div>
    <div className="contact-container">
      <h3><span role='img' aria-label="follow">🏃‍</span>Follow Me</h3>
      <p>Find me on twitter
      <a  rel="noopener noreferrer" target="_blank" style={linkStyle} href="https://twitter.com/shrotsatya6"> @shrotsatya6</a> </p>
      </div>
      <div className={["contact-container","somewhere-container"].join(" ")}>
        <h3>Find me Somewhere else</h3>
        <div className="somewhere-links">
          <p><a rel="noopener noreferrer" target="_blank" style={linkStyle} href="https://github.com/shrotsatya">Github</a></p>
          <p><a rel="noopener noreferrer" target="_blank" style={linkStyle} href="https://www.linkedin.com/in/satyam-shrotriya-33a526191/">LinkedIn</a></p>
        </div>
          
      </div>
    
    
  </Layout>)
    }
    
export default Contact