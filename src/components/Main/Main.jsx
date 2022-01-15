import React from 'react'
import { Portafolio } from '../Portafolio/Portafolio'
import { Skill } from '../Skill/Skill'
import { SobreMi } from '../SobreMi/SobreMi'

function Main() {
    return (
        <main>
            <SobreMi />
            <Skill />
            <Portafolio />
        </main>
    )
}

export { Main }
