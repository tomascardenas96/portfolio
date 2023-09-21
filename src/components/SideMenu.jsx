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
                <li><CiHome/></li>
                <li><CiUser/></li>
                <li><CiGrid32/></li>
                <li><PiBriefcaseThin/></li>
                <li><PiEnvelopeSimpleThin/></li>
            </ul>
        </aside>
    )
}

export default SideMenu;