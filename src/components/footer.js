import "../styles/components/footer.scss"
import {fBIcon, gitHubIcon, linkedInIcon} from "../images"

export default function MyFooter() {

    return (
        <div className="position_container">
            <div className="footer_container">
                <div className="allIconsContainer">
                        <a href="https://www.linkedin.com/in/warren-hogue-a09299b2/" target="_blank" rel="noopener noreferrer" className="icon_container">
                            <img src={linkedInIcon} height="36px" alt={"LinkedIn Icon"}/>
                        </a>
                        <a href="https://github.com/Drendal911" target="_blank" rel="noopener noreferrer" className="icon_container">
                            <img src={gitHubIcon} height="40px" alt={"GitHub Icon"}/>
                        </a>
                    <a href="https://www.facebook.com/Warren.Hogue.IV" target="_blank" rel="noopener noreferrer" className="icon_container">
                        <img src={fBIcon} height="45px" alt="Facebook Icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

