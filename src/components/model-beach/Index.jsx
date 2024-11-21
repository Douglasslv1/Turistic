import React from 'react'
import Style from './Style.module.css'

const CardBeach = (props) => {
  return (
    <div className={Style.CardBody}>
        <img className={Style.BeatchImg} src={props.beatch} alt="PortoDeGalinhas" />
        <h1 className={Style.Tittle}>{props.BeatchTitle}</h1>
        <p className={Style.Description}>{props.description}</p>
        <button className={Style.botao}>SAIBA MAIS</button>
    </div>
  )
}

export default CardBeach