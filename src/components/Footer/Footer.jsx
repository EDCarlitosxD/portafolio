import React from 'react'
import github from '../../assets/github.svg'
import '../../styles/Footer.scss'
function Footer() {
    return (
        <footer>
            <h3>Juan Carlos Uch Dzib: </h3>
            <a href='https://github.com/EDCarlitosxD'><img src={github} /></a>
        </footer>
    )
}

export { Footer }
