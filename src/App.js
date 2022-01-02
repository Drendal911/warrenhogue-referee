import React from "react";
import './App.scss';
import Slider from "./components/slider";
import Card from "./components/card";
import Footer from "./components/footer"
import Button from "./components/button";
import {fBIcon, instagramIcon, linkedInIcon, tssaa} from "./images";

function App() {
    return (
        <div className="App">
            <div className="content_wrap">
                <Slider/>
                <Card name={"Warren Hogue"}
                      title={"TSSAA Certified Referee"}
                      image={<img src={tssaa} alt="TSSAA Logo"/>}/>
                <Card type={"min_content"} info={
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
                </Card>
                <Button name={"More on TSSAA"}
                        link={"https://tssaa.org/"}/>
                <Footer header={"Contact Me"}
                        email={"warren.hogue.iv@gmail.com"}
                        links={<>
                            <a href="https://www.linkedin.com/in/warren-hogue-a09299b2/" target="_blank"
                               rel="noopener noreferrer" className="icon_container">
                                <img src={linkedInIcon} height="35px" alt={"LinkedIn Icon"}/>
                            </a>
                            <a href="https://www.instagram.com/warren_hogue/?hl=en" target="_blank"
                               rel="noopener noreferrer"
                               className="icon_container">
                                <img src={instagramIcon} width="35px" alt={"Instagram Icon"}/>
                            </a>
                            <a href="https://www.facebook.com/Warren.Hogue.IV" target="_blank" rel="noopener noreferrer"
                               className="icon_container">
                                <img src={fBIcon} width="50px" alt="Facebook Icon"/>
                            </a>
                        </>}/>
            </div>
        </div>
    );
}

export default App;
