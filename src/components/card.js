import React from "react";
import "../styles/components/card.scss";
import {tssaa} from "../images";

export default function ContentCard(props) {
    return (
        <>
            <div className="card-container">
                <div className="grid-container">
                    <img src={tssaa} alt="TSSAA Logo"/>
                    <div className="card-content">{props.name ? props.name : null}</div>
                    <div className="card-content">{props.title ? props.title : null}</div>
                </div>
            </div>
        </>

    )
}