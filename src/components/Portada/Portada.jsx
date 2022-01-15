import React from 'react'
import '../../styles/Portada.scss'
import portada from '../../assets/portada.svg'
import TypewriterComponent from 'typewriter-effect'
function Portada() {

    return (
        <section id='inicio' className='portada'>

            <div className='text-color presentacion'>
                <h1 className='titulo'>Juan Carlos Uch Dzib</h1>
                <TypewriterComponent onInit={(type => {
                    type.typeString('Programador').pauseFor(2000).deleteAll().typeString('Front End Developer').pauseFor(1500).deleteAll().typeString('Humilde').start()
                })} />
            </div>


            <div className='portada-img'>
                <img src={portada} alt='Portada' />
            </div>

        </section>
    )
}

export { Portada }