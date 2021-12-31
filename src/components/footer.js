import "../styles/components/footer.scss"
import {fBIcon, instagramIcon, linkedInIcon} from "../images"

export default function MyFooter() {

    return (
        <div className="footer_position_container">
            <div className="footer_container">
                <div className="contact">
                    <h1 className="footer_header">Contact Me</h1>
                    <address><a href="mailto:kappanova7@gmail.com">kappanova7@gmail.com</a></address>
                </div>
                <div className="allIconsContainer">
                        <a href="https://www.linkedin.com/in/warren-hogue-a09299b2/" target="_blank" rel="noopener noreferrer" className="icon_container">
                            <img src={linkedInIcon} height="36px" alt={"LinkedIn Icon"}/>
                        </a>
                        <a href="https://www.instagram.com/warren_hogue/?hl=en" target="_blank" rel="noopener noreferrer" className="icon_container">
                            <img src={instagramIcon} height="40px" alt={"Instagram Icon"}/>
                        </a>
                    <a href="https://www.facebook.com/Warren.Hogue.IV" target="_blank" rel="noopener noreferrer" className="icon_container">
                        <img src={fBIcon} height="45px" alt="Facebook Icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

