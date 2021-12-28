import React from "react";
import './App.scss';
import Slider from "./components/slider";
import ContentCard from "./components/card";
import Footer from "./components/footer"
import Button from "./components/button";

function App() {
    return (
        <div className="App">
            <body>
            <div className="container">
                <Slider/>
                <ContentCard name={"Warren Hogue"}
                             title={"TSSAA Certified Referee"}/>
                <Button content={"More on TSSAA"}
                        link={"https://tssaa.org/"}/>
            </div>
            </body>
            <Footer/>
        </div>
    );
}

export default App;
