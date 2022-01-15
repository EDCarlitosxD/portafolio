import React from 'react';
import '../../styles/Skill.scss'


import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javascript from '../../assets/javascript-js.svg';
import java from '../../assets/java.svg';
import reactIcon from '../../assets/react.svg'
import sass from '../../assets/sass.svg';
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'

// Futuro
import mySql from '../../assets/mysql.svg';
import php from '../../assets/php.svg';
import python from '../../assets/python.svg';
import nodeIcon from '../../assets/node.svg'
import { ItemSkill } from './ItemSkill';



const skills = [
    { nombre: 'Html5', icon: html },
    { nombre: 'Css', icon: css },
    { nombre: 'Javascript', icon: javascript },
    { nombre: 'Java', icon: java },
    { nombre: 'React', icon: reactIcon },
    { nombre: 'Sass', icon: sass },
    { nombre: 'Git', icon: git },
    { nombre: 'GitHub', icon: github },
]


function Skill() {
    return (
        <section >
            <h2 className='t-skill text-center titulo'>Mis Skill</h2>

            <div className='skill-container'>
                {skills.map(ski => (
                    <ItemSkill key={ski.nombre} src={ski.icon} nombre={ski.nombre} />
                ))}
            </div>


        </section>
    )
}

export { Skill }
