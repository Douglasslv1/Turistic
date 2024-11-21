import React from "react";
import Style from "./Style.module.css";
import Logo from "../img/logo turistando nova (1).png";
import Image from "../img/recifenoite.jpg";
import Praia1 from '../img/praia2.jpg'
import Praia2 from '../img/porto_de_galinhas.jpg'
import Praia3 from '../img/carneiros.jpg'
import Praia4 from '../img/boaviagem.jpg'
import Praia5 from '../img/pontaldemaracaipe.jpg'
import Footer from "../footer/Index";
import CardBeach from "../model-beach/Index";
import Recife from '../img/recife.jpg'



const Page1 = () => {
  return (
    <>
      <header className={Style.container}>
        <img className={Style.logo} src={Logo} alt="Logo" />
        <nav>
          <ul className={Style.list}>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ROTAS</a>
            </li>
            <li>
              <a href="#">PRAIAS</a>
            </li>
            <li>
              <a href="#">GALERIA</a>
            </li>
            <li>
              <a href="#">CONTATO</a>
            </li>
          </ul>
        </nav>
        <button className={Style.cta}>
          <span>Entrar</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </header>
      <section>
        <div className={Style.section1}>
          <img className={Style.ImageSection} src={Image} alt="imagem" />
        </div>
      </section>
      <div className={Style.card}>
        <CardBeach beatch={Praia1} BeatchTitle="Fernando de Noronha" description="Fernando de Noronha é um arquipélago vulcânico situado a cerca de 350 quilómetros ao largo da costa nordeste do Brasil. "/>
        <CardBeach beatch={Praia2} BeatchTitle="Porto de Galinhas" description="Porto de Galinhas é uma praia localizada no distrito homônimo, pertencente ao município de Ipojuca, no estado de Pernambuco, Brasil."/>
        <CardBeach beatch={Praia3} BeatchTitle="Praia dos Carneiros" description="A Praia dos Carneiros é uma praia localizada no município de Tamandaré, no estado brasileiro de Pernambuco. É considerada uma das praias mais bonitas do Brasil."/>
        <CardBeach beatch={Praia4} BeatchTitle="Boa Viagem" description="A Praia de Boa Viagem é a praia urbana mais famosa da cidade do Recife, capital do estado brasileiro de Pernambuco. Com aproximadamente oito quilômetros de extensão na Zona Sul da capital pernambucana."/>
        <CardBeach beatch={Praia5} BeatchTitle="Pontal de Maracaípe" description="é uma praia do município de Ipojuca, no estado brasileiro de Pernambuco. É uma extensão do litoral de Porto de Galinhas. É muito procurada por surfistas, sediando importantes campeonatos de surf e longboard."/>
      </div>
      <section className={Style.Section}>
        <div className={Style.model}>
          <h1>Explore Recife</h1>
          <p>A história encontra o paraíso!</p>
        </div>
        <div className={Style.secondModel}>
          <img src={Recife} alt="ImagemdeRecife" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page1;
