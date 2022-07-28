import "./navbar.css";
import { IoSearchSharp } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';


export const Navbar = () => {

    return (
        <nav>
            <ul className="list-ul c-hide">
                <li>Coins</li>
                <li>Exchanges</li>
                <li>Swap</li>
            </ul>

            <img className="brand-icon" src="https://coincap.io/static/logos/black.svg" alt="coincap" />

            <ul className="list-ul c-hide">
                <li><IoSearchSharp /></li>
                <li><IoMdSettings /></li>
                <button className="wallet-button">Connect Wallet</button>
            </ul>
        </nav>
    )
}