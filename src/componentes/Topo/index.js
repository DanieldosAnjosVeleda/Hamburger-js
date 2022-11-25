import './style.css';
import { Link } from 'react-router-dom';
function Topo(){
    return(
        <header>
            <div className='limitar-secao'>
                <img src="assets/logo.png" alt='logo' title='logo' />

                <nav>
                    <Link className='link-topo' to='/'>Home</Link>
                    <Link className='link-topo' to='/sabores'>sabores</Link>
                    <Link className='link-topo' to='/sobre'>sobre</Link>
                </nav>
            </div>
        </header>
    );
}
export default Topo;