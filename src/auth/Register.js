import React from 'react';
import Registerform from './Registerform';
import TheLabel from '../reusables/TheLabel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthActions } from '../store/actions/authAction';
import { connect } from 'react-redux';
import Instructions from './Instructions';

const Register = ({register}) => {
    const navigate = useNavigate();
    const [name,setName]= useState("");
    const [mail,setMail]= useState("")
    const [password,setPassword]=useState("");
    const [age,setAge]=useState(18);
    const inst = [
        "Name must be atleast 3 characters and at most 12 characters long",
        "The email should be valid",
        "password must be:",
        "Atleast 8 characters long",
        "Must contain a lower case letter",
        "Must contain a upper case letter",
        "Must contain a special character",
        "Age must be atleast 18 and atmost 90 years"
      ];
    const handleRegister=()=>{
        console.log("it is calling handle register");
        const userDetails={
            name,
            password,
            mail,
            age,
        }
        register(userDetails,navigate);
    };

    const updateName=(e)=>{
        setName(e.target.value);
    }
    const updateMail=(e)=>{
        setMail(e.target.value);
    }
    const updatePassword=(e)=>{
        setPassword(e.target.value);
    }
    const updateAge=(e)=>{
        setAge(e.target.value);
    }
    return (
        <div style={{backgroundColor:"#b308fc",height:"100vh",width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <TheLabel style={{marginBottom:"40px"}} title={"Welcome to Register page"}/>
            <Registerform updateAge={updateAge} updatePassword={updatePassword} updateMail={updateMail} updateName={updateName} handleRegister={handleRegister}/>
            <div style={{position:"absolute",top:"45%",right:"3px"}}>
        <Instructions style={{border:"2px solid black",width:300,height:250,backgroundColor:"blue"}} inst={inst}/>
      </div>
        </div>
    );
};

const mapActionToProps=(dispatch)=>{
    return {...getAuthActions(dispatch)};
};

export default connect(null,mapActionToProps)(Register);