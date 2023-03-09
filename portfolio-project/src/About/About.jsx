import React from "react";
import './About.css'

export default function About({jp}){
return(
    <>
    <div className="about" data-aos="fade-up" data-aos-duration="2000">
    <h1 className="sections">{jp ? "私に ついて":"About me"}<div className="hrline"style={{display:"inline-block"}}></div></h1>
    <div className="about-summary">
        <div>
            <p>{jp ? <p> 私はインドのタミルナドゥ出身の<span className="span-items"><strong> サクティクマール・グルナサン</strong></span> です</p> : <p> Hello, I am <span className="span-items"><strong> Sakthikumar Gurunathan</strong></span> based Tamilnadu,India.</p>}</p>
            <p>{jp?<p>Web アプリケーションのフロントエンドを開発して、<span className="span-items"><strong>日本語</strong></span>のバイリンガルもあります</p>: <p>I develop the frontend for web applications and  <span  className="span-items"><strong>Japanese</strong> </span> bilingual with good command over the language.</p>} </p>
            <p>{jp ? <p>子供の頃から、できるだけ多くのことを学びたいと思っていました。12 年生でプログラミング言語について知り、Python を学び始め、その後フロントエンド開発を始めました</p>: <p>From my childhood I always wanted to do learn as much as I can, I came to know about programming languages in my 12th grade and started learning Python and after that I've started frontend development.</p>}</p>
        </div>
        <img src="./sakthi-blazer-soft.jpeg" alt="sakthikumar-image" />
        </div>
        
    </div>
    </>
)
}