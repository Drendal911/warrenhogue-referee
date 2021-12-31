import React from "react";
import './App.scss';
import Slider from "./components/slider";
import ContentCard from "./components/card";
import Footer from "./components/footer"
import Button from "./components/button";
import {tssaa} from "./images";

function App() {
    return (
        <div className="App">
            <div className="thumbnail">
                <img src="./images/1280x640_basketball_thumbnail.jpg" alt="Basketball Referee Image"/>
            </div>
            <div className="content_wrap">
                <Slider/>
                <ContentCard name={"Warren Hogue"}
                             title={"TSSAA Certified Referee"}
                             image={<img src={tssaa} alt="TSSAA Logo"/>}/>
                <ContentCard type={"min-content"} info={
                    <div className={"associations"}>
                        <h1 className={"associations_header"}>Associations</h1>
                        <div className={"associations__basketball"}>
                            <h2 className={"associations_list_header"}>Basketball</h2>
                            <ul>
                                <li>Memphis MOA</li>
                                <li>MetroOA</li>
                                <li>INOA</li>
                                <li>ESCAR</li>
                            </ul>
                        </div>
                        <div className={'associations__volleyball'}>
                            <h2 className={"associations_list_header"}>Volleyball</h2>
                            <ul>
                                <li>901 Memphis</li>
                            </ul>
                        </div>
                    </div>
                }>
                </ContentCard>
                <Button name={"More on TSSAA"}
                        link={"https://tssaa.org/"}/>
                <Footer/>

            </div>
        </div>
    );
}

export default App;
