import { Link } from 'react-router-dom';
import './Header.css';
export default function Header(){
    return(
        <header className='Header'>
            <Link to="/portfolio/" className='Header__logo'><h1>OKAPI2K22</h1></Link>
            {/* <nav>
                <ul>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
            </nav> */}
        </header>
    );
}