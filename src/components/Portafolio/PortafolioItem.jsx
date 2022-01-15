import React from 'react'
import Noviembre from '../../assets/25denoviembre.png'
import github from '../../assets/github.svg'
import visitar from '../../assets/globe-outline.svg'
import '../../styles/PortafolioItem.scss'
import { ItemSkill } from '../Skill/ItemSkill'

function PortafolioItem(props) {

    const [mostrarRepo, setMostrarRepo] = React.useState(false)


    return (
        <div className='portafolio-item-container'>
            <div onMouseLeave={() => setMostrarRepo(false)} onMouseEnter={() => setMostrarRepo(true)} className='portafolio-item-img'>
                <img src={props.src} />

                {mostrarRepo && <div className='portafolio-github'>
                    <div>
                        <a target='_blank' href={props.github}><img src={github} /></a>
                        <p className='text-center text-color'>Repositorio</p>

                        <a target='_blank' href={props.link}><img src={visitar} /></a>
                        <p className='text-center text-color'>Visitar</p>

                        <div className='tecnologias'>
                            {props.tecnologias.map(tec => (
                                <div>
                                    <ItemSkill src={tec} />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>}
            </div>
        </div>
    )
}

export { PortafolioItem }
