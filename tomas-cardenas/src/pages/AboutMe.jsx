import "../style/AboutMe.css"
import BookMarker from "../components/BookMarker.jsx"
import {CiUser} from "react-icons/ci"

function AboutMe() {
    return(
        <main className="about-me__container">
            <section className="about-me" id="about-me-page">
                <BookMarker icon={<CiUser/>} title="About me" />
                <div className="about-me__content">
                    <h2>Every great design begin with an even <span>Better story</span></h2>
                    <p>Since beginning my journey as a freelance designer nearly 6 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I’m quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
                </div>
            </section>
        </main>
    )
}

export default AboutMe;