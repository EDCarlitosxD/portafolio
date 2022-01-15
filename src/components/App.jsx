import React from 'react'
import '../styles/global.scss'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Portada } from './Portada/Portada'
import { Footer } from './Footer/Footer'

const App = () => {
    return (
        <>
            <Header />
            <Portada />
            <Main />
            <Footer />
        </>

    )
}

export { App }