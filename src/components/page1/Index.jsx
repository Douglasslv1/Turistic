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
        <MediaCard image={Praia1} titlee="Fernando de Noronha" description="Fernando de Noronha é um arquipélago vulcânico situado a cerca de 350 quilómetros ao largo da costa nordeste do Brasil. "/>
        <MediaCard image={Praia2} titlee="Porto de Galinhas" description="Porto de Galinhas é uma praia localizada no distrito homônimo, pertencente ao município de Ipojuca, no estado de Pernambuco, Brasil."/>
        <MediaCard image={Praia3} titlee="Praia dos Carneiros" description="A Praia dos Carneiros, em Pernambuco, é reconhecida como uma das praias mais bonitas do Brasil e desperta o interesse de muitos viajantes por sua beleza natural. É o lugar perfeito para relaxar e curtir um cenário paradisíaco."/>
        <MediaCard image={Praia4} titlee="Praia de Boa viagem" description="A Praia de Boa Viagem é a praia urbana mais famosa da cidade do Recife, capital do estado brasileiro de Pernambuco. Com aproximadamente oito quilômetros de extensão, está situada no bairro homônimo, Zona Sul da capital pernambucana, delimitada pela Praia do Pina ao norte e pela Praia de Piedade ao sul."/>
        <MediaCard image={Praia5} titlee="Pontal de Maracaípe" description="Maracaípe é reconhecida como uma praia rica em reservas ambientais. A preservação do Mangue nessa praia sempre esteve no palco da discussão de ambientalistas e dos nativos."/>
      </div>
    </>
  );
};

export default Page1;
