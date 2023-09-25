import "../style/SideMenu.css"
import { CiHome } from "react-icons/ci"
import {CiUser} from "react-icons/ci"
import {CiGrid32} from "react-icons/ci"
import {PiBriefcaseThin} from "react-icons/pi"
import {PiEnvelopeSimpleThin} from "react-icons/pi"

function SideMenu() {
    return(
        <aside className="aside-menu">
            <ul>
                <li><a href="#home-page"><CiHome/></a></li>
                <li><a href="#about-me-page"><CiUser/></a></li>
                <li><a href="#skills-page"><CiGrid32/></a></li>
                <li><a><PiBriefcaseThin/></a></li>
                <li><a href="#contact-page"><PiEnvelopeSimpleThin/></a></li>
            </ul>
        </aside>
    )
}

export default SideMenu;