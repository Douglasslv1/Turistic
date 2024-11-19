import React from "react";
import Style from "./Style.module.css";
import Logo from "../img/logo turistando nova (1).png";
import Image from "../img/sunset.png";
import MediaCard from "../card/Index";
import Praia1 from '../img/praia2.jpg'
import Praia2 from '../img/porto_de_galinhas.jpg'
import Praia3 from '../img/carneiros.jpg'
import Praia4 from '../img/boaviagem.jpg'
import Praia5 from '../img/pontaldemaracaipe.jpg'
import Footer from "../footer/Index";
import CardBeach from "../model-beach/Index";



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
        <CardBeach beatch={Praia1} BeatchTitle="Porto de Galinhas" description="Porto de Galinhas é uma praia localizada no distrito homônimo, pertencente ao município de Ipojuca, no estado de Pernambuco, Brasil."/>
        <CardBeach beatch={Praia2} BeatchTitle="Porto de Galinhas" description="Porto de Galinhas é uma praia localizada no distrito homônimo, pertencente ao município de Ipojuca, no estado de Pernambuco, Brasil."/>
        <CardBeach beatch={Praia3} BeatchTitle="Porto de Galinhas" description="Porto de Galinhas é uma praia localizada no distrito homônimo, pertencente ao município de Ipojuca, no estado de Pernambuco, Brasil."/>
        <CardBeach beatch={Praia4} BeatchTitle="Porto de Galinhas" description="Porto de Galinhas é uma praia localizada no distrito homônimo, pertencente ao município de Ipojuca, no estado de Pernambuco, Brasil."/>
        <CardBeach beatch={Praia5} BeatchTitle="Porto de Galinhas" description="Porto de Galinhas é uma praia localizada no distrito homônimo, pertencente ao município de Ipojuca, no estado de Pernambuco, Brasil."/>
      </div>
      <Footer />
    </>
  );
};

export default Page1;
