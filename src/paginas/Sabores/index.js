import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import './style.css';

function Sabores(){
    return(
        <div>

      <Topo />

      <main>
        <section className="secao-banner-sabores">
          <div className="titulo-banner-sabores">
            <h1>NOSSOS SABORES</h1>
          </div>
        </section>

        <section className="limitar-secao secao-sabores">
          <h2>SABORES DE HAMBURGUERES</h2>
          <div className="container-hamburger">
            <div className="box-hamburger">
              <img src="assets/avocado-burger.jpg" alt="sorvete sabor oreo"/>
              <h3>Avocado Burger</h3>
              <p>Delicioso hamburger com abacate. Uma explosão de sabor.</p>
            </div>
            <div className="box-hamburger">
              <img src="assets/bacon-burger.jpg" alt="sorvete sabor pistache"/>
              <h3>Bacon Burger</h3>
              <p>Hamburger lendário com muito bacon para você amar.</p>
            </div>
            <div className="box-hamburger">
              <img src="assets/beet-burger.jpg" alt="sorvete sabor cookie com avelã"/>
              <h3>Beet Burger</h3>
              <p>O nosso melhor hamburger. Você vai adorar o sabor.</p>
            </div>
            <div className="box-hamburger">
              <img src="assets/black-edamame.jpg" alt="sorbet sabor kiwi"/>
              <h3>Black Edamame</h3>
              <p>Delicioso hamburger para você que é vegetariano.</p>
            </div>
            <div className="box-hamburger">
              <img src="assets/cheese-burger.jpg" alt="sorbet sabor morango"/>
              <h3>Cheese Burger</h3>
              <p>O grande e clássico hamburger com vários tipos de queijo.</p>
            </div>
            <div className="box-hamburger">
              <img src="assets/chorizo-burger.jpg" alt="sorbet limão siciliano"/>
              <h3>Chorizo Burger</h3>
              <p>Monstro Mexicano que o assustará com seu sabor maravilhoso.</p>
            </div>
          </div>
        </section>

      </main>

      <Rodape />

    </div>
    );
}
export default Sabores;