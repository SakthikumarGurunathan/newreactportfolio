import React from "react";
import './Navbar.css'

function Navbar(props){
  return(
    <>
    <header  className="nav-bar" data-aos="fade-down" data-aos-duration="1000" >
    <div className="title">
      <h3> {props.jp ? "サクティクマール" : "Sakthikumar" } </h3>
      </div>
      <nav>
      <ul>
        <li><a href="#skills" className="list-link">{props.jp ? "スキル": "Skills"}</a></li>
        <li><a href="#projects" className="list-link">{props.jp ? "プロジェクト" : "Projects" }</a></li>
        <li><a href="#others" className="list-link">{props.jp ? "他のもの" : "Others"}</a></li>
        <li><a href="./Sakthikumar-Gurunathan-Updated-Resume.pdf" download={"Sakthikumar-Gurunathan-Updated-Resume.pdf"} className="list-link">{props.jp ? "履歴書" : "Resume"}</a></li>
        <li><button onClick ={props.changeToJp} className="toggleLanguage">{props.jp ? "English": "日本語"}</button></li>
      </ul>
    </nav>
    
    </header>
   </>
  )
}
export default Navbar