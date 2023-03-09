
import React from "react";
import './Others.css'


function Others({jp}){
    return (
        <div className="Others" id="others">
        <h1 className="sections">{jp ? "他のもの":"Others"}<div className="hrline"style={{display:"inline-block"}}></div></h1>
        <div  className="others-summary" data-aos="fade-right" data-aos-duration="1500">
            <ul >
                <li> {jp?"仕事以外では、小説や漫画を読むのが大好きです":"Other than work, I really like to read fictions and manga"}</li>
                <li> {jp? "私は暇なときによくアニメを見ます":"I do watch anime a lot in my free time"} </li>
                <li>{jp?"タミル語または英語を学びたい場合は、私のソーシャルメディアで私に連絡してください。私が知っていることをいくつか共有できます.":"Ping me on any of my social media, if you want to learn Japanese, I can share some things I know."}</li>
            </ul>
        </div>
        </div>
    )
}

export default Others 