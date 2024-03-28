import React from 'react'
import myfriend from './assets/img/my frend.jpg'
import tarmoqlar from './assets/img/tarmoqlar.png'
import aligment from './assets/img/alignment.png'
import oy from './assets/img/oy.png'
import quyosh from './assets/img/quyosh.png'
function Header({mode,setMode}) {
  return (
    <div className={mode == true ? 'light' : 'dark'}>
         <header>
      <div className="container">
        <div className={mode == true ? 'head__log head__loglight': 'head__log head__logdark'}>
            <button onClick={()=> setMode(!mode)}>
            <img width='100' src={mode == true ? oy : quyosh} alt="" />
            </button>
        </div>
      <nav className="nav">
       <div className="hero">
        <img src={myfriend} className="pixtures" alt=""/>
       </div>
        <div className="info">
          <h2 className={mode == true ? 'title__light':'title__dark'}>Xoshimjonov Azizbek</h2>
          <p className={mode == true ? 'title__light':'title__dark'}>Software Engineer</p>
          <ul className="nav__list">
            <li>
              <img src={tarmoqlar}alt=""/>
              </li>
          </ul>
        </div>
      </nav>
        <div className="work">
          <div>
            <p className={mode == true ?  'work1 wor__light': 'wor__dark'}>7</p>
            <p className={mode == true ?  'work1 wor__light': 'wor__dark'}>Years of work experience</p>
          </div>
          <div>
            <p className={mode == true ?  'work1 wor__light': 'wor__dark'}>50+</p>
            <p className={mode == true ?  'work1 wor__light': 'wor__dark'}>Completed projects</p>
          </div>
          <div>
            <p className={mode == true ?  'work1 wor__light': 'wor__dark'}>20+</p>
            <p className={mode == true ?  'work1 wor__light': 'wor__dark'}>Satisfied <br />customers</p>
          </div>
        </div>
        <div className="button">
        <button className={mode == true ? 'dow__btn dow__light':'dow__dark'}>Download CV
          <img src={aligment} alt=""/>
        </button>
        <button className={mode == true ? 'now__btn now__light':'now__dark'}>Contact me</button>
        </div>
        <div className={mode == true ? 'portfol portfol__light':'portfol__dark'}>
          <button className="port__btn">Portfolio</button>
          <p className={mode == true ? 'port__des port__deslight':' port__des port__desldark'}>Skills</p>
        </div>
    </div>
      </header>
    </div>
  )
}

export default Header
