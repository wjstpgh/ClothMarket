import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              로그아웃
            </span>
          ) : (
            <Link className="nav-link" to='/auth'>
              로그인
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;