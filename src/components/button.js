import "../styles/components/button.scss"

export default function Button(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="button_container">
                {props.name}
            </button>
        </a>
    )
}