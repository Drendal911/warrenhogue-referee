import "../styles/components/footer.scss"

export default function MyFooter(props) {
    return (
        <div className="footer_position_container">
            <div className="footer_container">
                <div className="contact">
                    {props.header ? <h1 className="footer_header">{props.header}</h1> : null}
                    {props.email ? <address><a href={`mailto:${props.email}`}>{props.email}</a></address> : null}
                </div>
                <div className="allIconsContainer">{props.links}</div>
            </div>
        </div>
    )
}

