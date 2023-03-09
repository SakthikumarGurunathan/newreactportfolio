
import React from "react";
import "./Projects.css"
export default function Projects({jp}){
    return(
        <div className="Projects" id= "projects">
             <h1 className="sections">{jp ? "プロジェクト":"Projects"}<div className="hrline"style={{display:"inline-block"}}></div></h1>
            <div class="samples" data-aos="fade-up" data-aos-duration="2000">
        <div>
            <h1 className="project-title">{jp ? "テンジー":"Tenzies"}</h1>
            <h4>{jp? "サイコロゲームのようなシンプルなゲームです" :"This is a simple game like dice game"}</h4>
            <h4>{jp?"ユーザーは、好きな数字またはより高い数字を選択でき、ユーザーが同じ数字のサイコロをすべてクリックすると、ユーザーが勝ちます!":"The user can choose the number they like or the number which has higher count, when the user clicks all the dice with same number, the user wins! "}</h4>
        </div>
        <a href="https://tenziezz.netlify.app/" target={"_blank"}><img src="tenzies.png" alt="tnzies-img" /></a>
    </div>


        <div class="samples"  data-aos="fade-up" data-aos-duration="2000">
            <div class="samples" data-aos="fade-up" data-aos-duration="2000">
                 <a href="https://incomparable-centaur-f28a48.netlify.app" target={"_blank"}><img src="/cardwar.png" alt="card-war-project-img"/></a>
            <div>
            <h1 className="project-title"> {jp ? "戦争のカード":"Card of war"}</h1>
            <h4>{jp ? "パソコンと遊べる簡単なカードゲームで、最終的にポイントが高い人が勝者となります" : "This is a simple card game that you can play with computer, the winner of the game will be decided at the end whoever has the highest point"}</h4></div>
        </div>
        </div>

        <div class="samples" data-aos="fade-up" data-aos-duration="2000">
        <div>
            <h1 className="project-title">{jp ? "カラースキーム":"Color scheme"}</h1>
            <h4>{jp? "このプロジェクトは、プロジェクトで配色が必要なときにいつでも使用できます" :"This project can be used whenever color schemes are needed for our projects"}</h4>
            <h4>{jp?"ユーザーが必要な色とモーダルを選択すると、API からデータが取得されます":"It get the data from the api as user choose the color and the modal they needed"}</h4>
        </div>
        <a href="https://colorschememaker.netlify.app" target={"_blank"}><img src="color.png" alt="color-scheme-img" /></a>
    </div>


        </div>
    )
}