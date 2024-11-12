import React from "react";
import Style from "./Style.module.css";
import Logo from "../img/logo turistando nova (1).png";
import Praia1 from "../img/praia1.jpg"
import Praia2 from "../img/praia2.jpg"
import Praia3 from "../img/porto.jpg"


const Page1 = () => {
  return (
    <>
      <header className={Style.container}>
        <img className={Style.logo} src={Logo} alt="Logo" />
        <nav>
          <ul className={Style.list}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pontos turisticos</a>
            </li>
            <li>
              <a href="#">Galeria</a>
            </li>
            <li>
              <a href="#">Contato</a>
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
        <img className={Style.praia3} src={Praia3} alt="" />
        <div className={Style.praia}>
          <img className={Style.praia1} src={Praia1} alt="praia1" />
          <img className={Style.Praia2} src={Praia2} alt="praia2" />
        </div>
      </section>
      
    </>
  );
};

export default Page1;
