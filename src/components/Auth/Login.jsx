import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants";
import { errorInitial, isValidate } from "../../helper/validator";
import useLocalStorage from "../../hooks/useLocalStorage";
import { toggleLogin } from "../../modules/auth/actions";
import Container from "../ui/Container";
import TextField from "../ui/TextField";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localState, setLocalState] = useLocalStorage();
  const [emailError, setEmailError] = useState(errorInitial);
  const [passwordError, setPasswordError] = useState(errorInitial);
  const [errorResponse, setErrorResponse] = useState("");
  const authState = useSelector((state) => state);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorResponse("");
    const isEmail = isValidate(email, 3, true);
    const isPassword = isValidate(password, 8);
    setEmailError(isEmail);
    setPasswordError(isPassword);
    if (!isPassword.isValid || !isEmail.isValid) return;
    handleUserLogin();
  };

  const handleUserLogin = async () => {
    const bodydata = { email, password };

    try {
      const res = await axios.post(`${baseUrl}/token/`, bodydata);

      if (res.data.access && res.data.refresh) {
        setLocalState(res.data.access, res.data.refresh);
        dispatch(toggleLogin());
        return navigate("/");
      }
      setErrorResponse(res.data.message);
    } catch (error) {
      setErrorResponse("Invalid Login Details");
    }
  };

  return (
    <Container>
      {errorResponse && <label className="error">{errorResponse}</label>}
      <form onSubmit={handleLogin}>
        <TextField
          type="email"
          label="Email"
          setState={setEmail}
          state={email}
          autoComplete="off"
          error={emailError}
        />
        <TextField
          type="password"
          label="Password"
          setState={setPassword}
          state={password}
          error={passwordError}
          autoComplete="off"
        />
        <div className="alignItems">
          <button>Submit</button>
          <Link to={"/sign-up"}>sign up</Link>
        </div>
      </form>
    </Container>
  );
}
