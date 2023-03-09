import React from "react";


function Intro({jp}){
    return (
        <div className="intro-font" data-aos="fade-right" data-aos-duration="2000">
         <h2 className="intro">{ jp ? "こんにちは, 私 は" : "Hello, I am a"} </h2>
        <h3 className="frontend"> { jp ? "フロントエンド デベロッパー" : "Frontend Dev"} </h3>
        </div>
    )
}
export default Intro