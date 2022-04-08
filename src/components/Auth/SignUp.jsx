import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { alreadyExists, baseUrl } from "../../constants";
import { errorInitial, isValidate } from "../../helper/validator";
import Container from "../ui/Container";
import TextField from "../ui/TextField";

export default function SignUp() {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fnameError, setFnameError] = useState(errorInitial);
  const [lnameError, setLnameError] = useState(errorInitial);
  const [emailError, setEmailError] = useState(errorInitial);
  const [passwordError, setPasswordError] = useState(errorInitial);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFname = isValidate(fname);
    const isLname = isValidate(lname);
    const isEmail = isValidate(email, 3, true);
    const isPassword = isValidate(password, 8);

    setFnameError(isFname);
    setLnameError(isLname);
    setEmailError(isEmail);
    setPasswordError(isPassword);
    if (
      !isFname.isValid ||
      !isLname.isValid ||
      !isPassword.isValid ||
      !isEmail.isValid
    )
      return;
    handleCreateUser();
  };

  const handleCreateUser = async () => {
    const bodydata = { first_name: fname, last_name: lname, email, password };
    try {
      const res = await axios.post(`${baseUrl}/user/`, bodydata);
      if ((res.data.message === alreadyExists)) {
        setEmailError({ isValid: false, errorMsg: res.data.message });
        return;
      }
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="First Name"
          setState={setFname}
          state={fname}
          error={fnameError}
        />
        <TextField
          type="text"
          label="Last Name"
          setState={setLname}
          state={lname}
          error={lnameError}
        />
        <TextField
          type="email"
          label="Email"
          setState={setEmail}
          state={email}
          error={emailError}
        />
        <TextField
          type="password"
          label="Password"
          setState={setPassword}
          state={password}
          error={passwordError}
        />
        <div className="alignItems">
          <button>Submit</button>
          <Link to={"/login"}>login</Link>
        </div>
      </form>
    </Container>
  );
}
