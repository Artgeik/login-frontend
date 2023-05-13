import React from "react";
import TheLabel from "../reusables/TheLabel";
import TheForm from "./TheForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthActions } from "../store/actions/authAction";
import { connect } from "react-redux";
import Instructions from "./Instructions";
const Login = ({ login }) => {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const inst = [
    "The email should be valid",
    "password must be:",
    "Atleast 8 characters long",
    "Must contain a lower case letter",
    "Must contain a upper case letter",
    "Must contain a special character",
  ];

  const handleLogin = () => {
    const userDetails = {
      mail,
      password,
    };
    login(userDetails, navigate);
  };
  const updateMail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div
      style={{
        backgroundColor: "#b308fc",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TheLabel
        style={{ marginBottom: "80px" }}
        title={"Welcome to the login page"}
      />
      <TheForm
        handleLogin={handleLogin}
        updateMail={updateMail}
        updatePassword={updatePassword}
      />
      <div style={{position:"absolute",top:"45%",right:"3px"}}>
        <Instructions style={{border:"2px solid black",width:300,height:150,backgroundColor:"blue"}}inst={inst}/>
      </div>
    </div>
  );
};

const mapActionToProps = (dispatch) => {
  return { ...getAuthActions(dispatch) };
};

export default connect(null, mapActionToProps)(Login);
