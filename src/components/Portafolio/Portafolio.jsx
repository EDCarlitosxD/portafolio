import React from 'react'
import '../../styles/Portafolio.scss';
import { PortafolioItem } from './PortafolioItem';

// Tecnologias
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javascript from '../../assets/javascript-js.svg';
import reactIcon from '../../assets/react.svg'
import sass from '../../assets/sass.svg';
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'


// Portafolio
import Noviembre from '../../assets/25denoviembre.png'
//Estudios
import appTareas from '../../assets/apptareas.png';
import descuento from '../../assets/descuento.png';
import figuras from '../../assets/figuras.png'





const portafolioArray = [
    { nombre: '25 de noviembre', imagen: Noviembre, tecnologias: [git, github, sass, html, css, javascript], link: 'https://25denoviembre.netlify.app/', github: 'https://github.com/EDCarlitosxD/25denoviembre' },
    { nombre: 'Figuras geometricas', imagen: figuras, tecnologias: [git, github, html, css, javascript], link: 'https://figurasjavascript.netlify.app/', github: 'https://github.com/EDCarlitosxD/JavaScript-Practica' },
    { nombre: 'descuentos', imagen: descuento, tecnologias: [git, github, html, css, javascript], link: 'https://javascriptdescuento.netlify.app/', github: 'https://github.com/EDCarlitosxD/JavaScript-Practica' },
    { nombre: 'App de Tareas', imagen: appTareas, tecnologias: [git, github, reactIcon, css, html, javascript], link: 'https://edcarlitosxd.github.io/tareas/', github: 'https://github.com/EDCarlitosxD/tareas' }
]




function Portafolio() {

    return (
        <section id='portafolio' className='portafolio'>

            <h2 className='text-center titulo margin'>Portafolio</h2>



            {portafolioArray.map(port => (
                <PortafolioItem key={port.nombre} link={port.link} github={port.github} tecnologias={port.tecnologias} src={port.imagen} />
            ))}

        </section>
    )
}

export { Portafolio }
