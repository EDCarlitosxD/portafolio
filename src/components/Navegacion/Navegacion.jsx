import React from 'react'
import '../../styles/Navegacion.scss'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.svg'

function Navegacion() {

    const [openMenu, setOpenMenu] = React.useState(false);


    const menuToggle = () => {
        setOpenMenu(toggle => !toggle);
    }


    return (
        <nav className='nav-container' >

            <div className='logo'>
                <a href='#'><img src={logo} alt='Logo'></img></a>
            </div>

            <div onClick={menuToggle} className={`nav-menu ${openMenu && 'menu-open'}`}>
                <img src={menu} alt='menu' />
            </div>



            <ul className={`nav-container-ul ${openMenu && 'nav-visivility'}`}>
                <li><a onClick={menuToggle} href='#inicio'>Inicio</a></li>
                <li><a onClick={menuToggle} href='#sobremi'>Sobre Mi</a></li>
                <li><a onClick={menuToggle} href='#portafolio'>Portafolio</a></li>
            </ul>

        </nav>
    )
}

export { Navegacion };