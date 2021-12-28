import "../styles/components/button.scss"

export default function Button(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className="button_container">
                {props.content}
            </div>
        </a>
    )
}