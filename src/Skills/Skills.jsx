import React from "react";
import "./Skills.css"

function Skills({jp}){
    return(
        <div className="Skills-section" id="skills">
         <h1 className="sections">{jp ? "スキル" :"Skills"}<div className="hrline"style={{display:"inline-block"}}></div></h1>
        <div className="Skills">
        <i class="fa-brands fa-html5 fa-8x" data-aos="flip-left" data-aos-duration="1200"></i>
        <i class="fa-brands fa-css3-alt fa-8x"data-aos="flip-left" data-aos-duration="1200"></i>
        <i class="fa-brands fa-square-js fa-8x" data-aos="flip-left" data-aos-duration="1200"></i>
        <i class="fa-brands fa-react fa-8x"data-aos="flip-left" data-aos-duration="1200"></i>
        <i class="fa-brands fa-python fa-8x"data-aos="flip-left" data-aos-duration="1200"></i>
        </div>
        </div>
    )
}
export default Skills