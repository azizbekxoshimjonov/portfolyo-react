import React from 'react'
import reduct from './assets/img/reduct.png'
import sam from './assets/img/samdevelopment.png'
import gerp from './assets/img/gerb.png'
import dinncs from './assets/img/dinncs.png'
import incrp from './assets/img/incrp.png'
import lena from './assets/img/lena.png'
function Hero({mode}) {
  return (
    <div className={mode == true ? 'light' : 'dark'}>
       
       <section className="project">
    <div className="container">
      <ul className="project__list">
        <li className="project__item">
          <img src={reduct} alt=""/>
        </li>
        <li className="project__item">
          <img src={sam} alt=""/>
        </li>
        <li className="project__item">
          <img src={gerp} alt=""/>
        </li>
        <li className="project__item">
          <img src={dinncs} alt=""/>
        </li>
        <li className="project__item">
          <img src={incrp} alt=""/>
        </li>
        <li className="project__item">
          <img src={lena} alt=""/>
        </li>
      </ul>
      <p className='foot__des'>© Victor Alvarado. 2022 All rigths reserved</p>
    </div>
  </section>
    </div>
  )
}

export default Hero
