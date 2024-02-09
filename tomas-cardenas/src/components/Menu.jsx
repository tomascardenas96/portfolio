import '../style/Menu.css';

function Menu() {
    return (
        <menu className='main-menu__container'>
            <ul className='main-menu'>
                <li><a href="#home-page">HOME</a></li>
                <li><a href="#about-me-page">ABOUT</a></li>
                <li><a href="#skills-page">SKILLS</a></li>
                <li><a href="">PORTFOLIO</a></li>
                <li><a href="#contact-page">CONTACT</a></li>
            </ul>
        </menu>
    )
}

export default Menu;