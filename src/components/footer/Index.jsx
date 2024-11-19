import React from 'react'
import Style from  './Style.module.css'

const Footer = () => {
  return (
    <footer className={Style.Container}>
        <div className={Style.cabecalho}>
            <p>Aqui vai um paragrafo de informação</p>
            <button className={Style.btn}>Seja Parceiro</button>
        </div>
        <div className={Style.info}>
            <p>Aqui vao entrar coisas como suporte dentre outros</p>

        </div>
        <div className={Style.end}>
            <p>douglas.aarq@gmail.com</p>
        </div>
    </footer>
  )
}

export default Footer