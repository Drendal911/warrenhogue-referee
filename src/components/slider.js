import React from "react";
import {slider} from "../styles";
import {img_1, img_2, img_3, img_4, img_5} from "../images";


export default function Slider() {
    return (
        <div className={slider.contentSlider}>
            <div className="slider">
                <ul>
                    <li id="first" className="firstanimation">
                        <img src={img_1} alt="Girls Volleyball Preparation"/>
                    </li>

                    <li id="second" className="secondanimation">
                        <img src={img_2} alt="Girls Volleyball Celebration"/>
                    </li>

                    <li id="third" className="thirdanimation">
                        <img src={img_3} alt="Boys Basketball Shooting"/>
                    </li>

                    <li id="fourth" className="fourthanimation">
                        <img src={img_4} alt="Boys Basketball Free Throw"/>
                    </li>

                    <li id="fifth" className="fifthanimation">
                        <img src={img_5} alt="Basketball Referee"/>
                    </li>
                </ul>
                <div className="progress-bar"/>
            </div>
        </div>
    )
}