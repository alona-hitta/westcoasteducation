import Navigation from '../Navigation/Navigation';
import Logo from '../../styles/img/westcoast-logo.png';

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__logo">
                <img src={Logo} alt="logo" className="logo" />
            </div>
            <Navigation />
        </header>
     );
}
 
export default Header;