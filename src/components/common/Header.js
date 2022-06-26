import { Link } from 'react-router-dom'
import { BsCodeSlash } from 'react-icons/bs'
export default function Header() {

    const btnMenu = () => {
        const bar = document.querySelector('.menu');
        const menu1 = document.querySelector('.btnMobile1');
        const menu2 = document.querySelector('.btnMobile2');
        const menu3 = document.querySelector('.btnMobile3');
        bar.classList.toggle('active')
        menu1.classList.toggle('active')
        menu2.classList.toggle('active')
        menu3.classList.toggle('active')
    }

    return (
        <div id="Header">
            <div className="logo">
                <BsCodeSlash className="iconLogo" />
                <h1>Fausto Garcia Jacinto Silva</h1>
            </div>
                <div className="menu">
                    <Link to='/'>Sobre</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/contact'>Contato</Link>
                </div>
        <div className="controls">
                <div className="btnMobile"  onClick={() => btnMenu()} >
                    <div className="btnMobile1"></div>
                    <div className="btnMobile2"></div>
                    <div className="btnMobile3"></div>
                </div>
            </div>
        </div>
    )
}