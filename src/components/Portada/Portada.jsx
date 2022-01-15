import React from 'react'
import '../../styles/Portada.scss'
import portada from '../../assets/portada.svg'
function Portada() {
    return (
        <section className='portada'>

            <div className='presentacion'>
                <h1 className='titulo'>Juan Carlos Uch Dzib</h1>
                <p className='txt'>Colocar efecto typed</p>
            </div>


            <div className='portada-img'>
                <img src={portada} />
            </div>

        </section>
    )
}

export { Portada }