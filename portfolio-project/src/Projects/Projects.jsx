
import React from "react";
import "./Projects.css"
export default function Projects({jp}){
    return(
        <div className="Projects" id= "projects">
            <h1 className="sections">{jp ? "プロジェクト":"Projects"}<div className="hrline"style={{display:"inline-block"}}></div></h1>
            <div class="samples" data-aos="fade-up" data-aos-duration="2000">
            <div>
            <h1 className="project-title"> {jp ? "戦争のカード":"Card of war"}</h1>
            <h4>{jp ? "パソコンと遊べる簡単なカードゲームで、最終的にポイントが高い人が勝者となります" : "This is a simple card game that you can play with computer, the winner of the game will be decided at the end whoever has the highest point<"}</h4></div>
            <a href="https://incomparable-centaur-f28a48.netlify.app" target={"_blank"}><img src="/cardwar.png" alt="card-war-project-img"/></a>
        </div>
        <div class="samples"  data-aos="fade-up" data-aos-duration="2000">
            <a href="https://colorschememaker.netlify.app" target={"_blank"}><img src="color.png" alt="color-scheme-img" /></a>
            <div>
            <h1 className="project-title">{jp ? "カラースキーム":"Color scheme"}</h1>
            <h4>{jp? "このプロジェクトは、プロジェクトで配色が必要なときにいつでも使用できます" :"This project can be used whenever color schemes are needed for our projects"}</h4>
            <h4>{jp?"ユーザーが必要な色とモーダルを選択すると、API からデータが取得されます":"It get the data from the api as user choose the color and the modal they needed"}</h4>
        </div>
        </div>

        <div class="samples" data-aos="fade-up" data-aos-duration="2000">

            <div>
                <h1 className="project-title">{jp ? "ワイフクロームエクステンション": "Waifu chrome extension"}</h1>
                <h4>
                    {jp ? "このプロジェクトは、複数の API からデータを取得し、それらを利用します":"This project gets data from multiple apis and make use of them"}</h4>
                <h4> {jp ? "この Web アプリは、あなたの場所に応じて、ランダムなアニメ waifu 画像、アニメの引用、天気を読み込みます" : "This web app loads random anime waifu image,anime quote and weather according to your location"} </h4>
            </div>
            <a href="https://waifuchromeextension.netlify.app" target={"_blank"}><img src="waifu.png" alt="waifu-img"/></a>
    </div>


        </div>
    )
}