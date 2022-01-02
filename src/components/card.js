import "../styles/components/card.scss";

export default function Card(props) {
    return (
        <>
            {props.type === "min_content" ? <div className="min_content_container">
                    <div className="grid_container">
                        {props.image ? props.image : null}
                        {props.name ? <div className="card_content">{props.name}</div> : null}
                        {props.title ? <div className="card_content">{props.title}</div> : null}
                        {props.info ? props.info : null}
                    </div>
                </div>
                :
                <div className="card_container">
                    <div className="grid_container">
                        {props.image ? props.image : null}
                        {props.name ? <div className="card_content">{props.name}</div> : null}
                        {props.title ? <div className="card_content">{props.title}</div> : null}
                        {props.info ? props.info : null}
                    </div>
                </div>
            }
        </>

    )
}