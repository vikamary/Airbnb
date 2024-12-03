import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import User from '../User/User';
import './style.scss';

function Header () {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <Logo />
          </div>
          <div className="header__search">
            <SearchBar />
          </div>
          <div className="header__user">
            <User />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;