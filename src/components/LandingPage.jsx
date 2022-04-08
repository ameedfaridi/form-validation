import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { toggleLogin } from "../modules/auth/actions";
import Container from "./ui/Container";

export default function LandingPage() {
  const dispatch = useDispatch();
  const [localState, setLocalState, removeLocalState] = useLocalStorage();
  const authState = useSelector((state) => state);

  useEffect(() => {
    if (localState.accessToken && localState.refreshToken) {
      if (authState.isLogin) return;
      dispatch(toggleLogin());
    }
  }, [localState]);

  const handleLogout = () => {
    removeLocalState();
    dispatch(toggleLogin());
  };

  return (
    <Container>
      {authState.isLogin ? (
        <div className="center">
          <p>Hi you are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="center">
          <p>Please Login</p>
          <Link to={"/login"}>
            <button>login </button>
          </Link>
        </div>
      )}
    </Container>
  );
}
