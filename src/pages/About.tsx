import React from "react"
import me from '../assets/my_picture.jpg';
//import slogan from "../assets/bat.png";
//import logo from "../assets/bat.svg";
import Layout from "../components/Layout";
import "../styles/about.css";
import useDarkMode from "use-dark-mode";
const About: React.FC = () => (
  <Layout>
    <h1 className="heading">About Me</h1>
    <div className="about-container">

        <figure>
          {
  
            //@ts-ignore
           <img className="mypicture" src={me} alt="Myself" />
          }
          <figcaption><button onClick={()=>window.location.href="https://drive.google.com/file/d/1H_w2EUV1stM5g8hOPdNbeRBeMApX7RzQ/view?usp=sharing"} type="button" style={{width:"40%",height:"44px",boxShadow:useDarkMode().value?"0 1px 4px rgba(255, 255, 255, .6)":"0 1px 4px rgba(0, 0, 0, .6)"}} className="mtrl-btn">    Resume   </button></figcaption>
        </figure> 
      <p>I am a Web Developer based from Ranchi, currently residing in Bangalore, pursuing BTech from  <strong>Bangalore Institute Of Technology</strong>.
       Talk to me about problem-solving,DS/Algo and Web Development.I code in Java& JavaScript.Currently My working stack is
         ReactJS, NodeJS, NOSQL DB. In my free time, I like to listen to punjabi & hindi songs and read tech related news.</p>
    </div>
    {/* <div className="support-container">

      <h2>Support Me</h2>
      <br />
      <p>Do you like my work and want to support me? Do so by donating BAT tokens or by downloading Brave Browser from <a href="https://brave.com/bit451">Here</a>.<br /> I support zero-ads Internet on all my work.</p>
      
        <a className="bat-container" href="https://brave.com/bit451">
        <img src={slogan} style={{transform:"scale(0.8)"}} width="70%"alt="Brave Slogan"/>
        <img src={logo} alt="BAT Token" />
        </a>
      
    </div> */}
  </Layout>
)

export default About
