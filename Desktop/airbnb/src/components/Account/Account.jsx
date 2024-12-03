import navIcon from './nav.svg';
import './style.scss';

const Account = () => {
  return ( 
    <button className="account">
      <div className="accont__nav-icon">
        <img src={navIcon} alt="Nav" />
      </div>
      <div href="#" className="account__avatar">
        <img src="./img/icons/user-avatar.svg" alt="User Avatar" />
      </div>
    </button>
  );
}

export default Account;