import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

import "./style.css";

export default function Sobre() {
  return (
    <div>

      <Topo />

      <main>
        <section className="secao-banner-sobre">
          <div className="titulo-banner-sobre">
            <h1>HAMBURGUERIA</h1>
          </div>
        </section>

        <section className="container-secao-sobre-nos">
          <div className="limitar-secao">
            <h2>Sobre Nós</h2>
            <span>Nós simplesmente amamos hamburger!</span>
            <p>
              Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
              hamburger produzido. Fazemos o melhor hamburger para os nossos
              clientes e gostamos de receber elogios. Estamos operando desde
              2009 com as melhores matérias-primas para a produção final do
              hamburger. Vendemos tanto para varejo como para atacado.
            </p>
            <p>
              Nossos clientes podem comprar os nossos hamburgueres e degustar na
              nossa loja ou levar para sua residência e aproveitar junto com a
              família. Também vendemos para estabelecimentos e criamos eventos
              como festa de aniversário, formaturas e eventos empresariais. Para
              contratar os nossos serviços, basta entrar em contato conosco.
              Iremos proporcionar o melhor atendimento e os melhores produtos
              para você fazer a sua festa mais saborosa, com o melhor sorvete da
              cidade.
            </p>
          </div>
        </section>

        <section className="container-secao-imagens">
          <div>
            <img src="assets/sobre-img.jpg" alt="pessoas comendo hamburger" />
            <img src="assets/hamburgueria.jpg" alt="hamburgueria" />
          </div>
        </section>
      </main>

      <Rodape />

    </div>
    );
}
