import './style.css';
function Rodape(){
    return(
        <footer>
            <div className=' limitar-secao container-logo-informacoes'>
                <img src='assets/logo.png' alt='logo'/>
                
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Av. 24 de Outubro, 1753</p>
                    <p>Goiânia, Goiás 12345-678</p>
                </div>

                <div>
                    <h3>CONTATO</h3>
                    <p>contato@meusite.com</p>
                    <p>Tel: (62) 11111-1111</p>
                </div>

                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>18:00 - 23:59</p>
                </div>
            </div>
            <div className='limitar-secao direito-autoral'>
                <p>Hamburgueria. Orgulhosamente desenvolvido por Daniel dos Anjos</p>
            </div>
        </footer>
    );
}
export default Rodape;