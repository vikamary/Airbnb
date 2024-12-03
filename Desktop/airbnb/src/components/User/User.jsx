import Account from '../Account/Account';
import Link from '../Link/Link';
import globeIcon from './globe.svg';
import './style.scss';

const User = () => {
  return ( 
    <div className="user">
      <div className="user__home">
        <Link text="Airbnb your home" />
      </div>
      <div className="user__local">
        <Link icon={globeIcon}/>
      </div>
      <div className="user__account">
        <Account />
      </div>
    </div>
  );
}

export default User;