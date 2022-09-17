import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            쇼핑
          </Link>
          <Link className="nav-link" to='/sign-in'>
            로그인
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;