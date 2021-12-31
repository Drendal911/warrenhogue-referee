import React from "react";
import "../styles/components/card.scss";

export default function ContentCard(props) {
    return (
        <>
            {props.type === "min-content" ? <div className="min-content-container">
                    <div className="grid-container">
                        {props.image ? props.image : null}
                        {props.name ? <div className="card-content">{props.name}</div> : null}
                        {props.title ? <div className="card-content">{props.title}</div> : null}
                        {props.info ? props.info : null}
                    </div>
                </div>
                :
                <div className="card-container">
                    <div className="grid-container">
                        {props.image ? props.image : null}
                        {props.name ? <div className="card-content">{props.name}</div> : null}
                        {props.title ? <div className="card-content">{props.title}</div> : null}
                        {props.info ? props.info : null}
                    </div>
                </div>
            }
        </>

    )
}