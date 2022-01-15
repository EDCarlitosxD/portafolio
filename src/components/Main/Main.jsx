import React from 'react'
import { Portafolio } from '../Portafolio/Portafolio'
import { Skill } from '../Skill/Skill'
import { SobreMi } from '../SobreMi/SobreMi'
import '../../styles/Main.scss'
function Main() {
    return (
        <main>
            <section className='sobre-skill'>
                <SobreMi />
                <Skill />
            </section>

            <Portafolio />
        </main>
    )
}

export { Main }
