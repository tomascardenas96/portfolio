import "../style/AboutMe.css"
import BookMarker from "../components/BookMarker.jsx"
import {CiUser} from "react-icons/ci"

function AboutMe() {
    return(
        <section className="about-me__container">
            <div className="about-me">
                <BookMarker icon={<CiUser/>} title="About me"/>
                <div>
                    <h2>Every great design begin with an even Better story</h2>
                    <p>Since beginning my journey as a freelance designer nearly 6 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I’m quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;