import './style.css';
import Rodape from '../../componentes/Rodape';
import Topo from '../../componentes/Topo';
function Home(){
    return(
        <div>
            <Topo/>
            
            <main>
                <section className='secao-banner'>
                    <div className='texto-banner'>
                        <h1>Hamburgueria</h1>
                    </div>
                </section>

                <section className='secao-nossos-sabores'>
                    <img src='assets/sabores.jpg' alt='vários hamburgers' title='vários hamburgers'/>
                    
                    <div className='texto-secao-nossos-sabores'>
                        <h2>NOSSOS SABORES</h2>
                        <span>Novos e Deliciosos!</span>

                        <p>
                           Um bom Hamburguer é aquele feito com os melhores ingredientes!
                           Aqui na Hamburgueria, nossos Hamburguers são de altíssima qualidade,
                           feito com ingredientes da melhor qualidade e sem nenhum conservante ou algo do tipo!
                           Oferecemos também opções vegetarianas. Venha conhecer e se apaixone!
                        </p>
                    </div>
                </section>

                <section className='secao-nossos-eventos'>
                    <div className='texto-secao-nossos-eventos'>
                        <h2>NOSSOS EVENTOS</h2>
                        <span>Variedade de hamburgers</span>
                        <p>
                            Mais do que uma Hamburgueria, uma extensão da sua casa! Estamos aqui
                            prontinhos para te atender e oferecer os melhores eventos com os melhores
                            hamburgers da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                    </div>
                    <img src='assets/eventos.jpg' alt='mesa de festa' title='mesa de festa' />
                </section>

                <section className='secao-sobre-nos'>
                    <img src='assets/sobre-img.jpg' alt='pessoas comendo hamburguer' title='pessoas comendo hamburguer' />

                    <div className='texto-secao-sobre-nos'>
                        <h2>SOBRE NÓS</h2>
                        <span>Alegria a cada mordida!</span>
                        <p>
                            Venha saborear o melhor hamburguer da região aqui com a gente! Nós
                            estamos há anos no mercado produzindo o que tem de melhor para o
                            nosso cliente e você não pode ficar fora dessa. Venha nos fazer
                            uma visita e aproveite o melhor atendimento e o melhor hamburguer
                            da cidade.
                        </p>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}
export default Home;