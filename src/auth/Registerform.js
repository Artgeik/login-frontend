import React from 'react';
import { useNavigate } from 'react-router-dom';
import DTextField from '../reusables/DTextField';
import Button from '../reusables/Button';
import Label from '../reusables/Label';


const Registerform = (props) => {
    const navigate = useNavigate();
    const {handleRegister,updateAge,updateMail,updateName,updatePassword} = props;
    const goToLogin=()=>{
        navigate("/login");
    };
    return (
        <div style={{backgroundColor:"#22c6f0",height:"440px",width:"600px",border:"2px solid black" ,borderRadius:"5%",padding:"5px",paddingTop:"10px"}}>
            <form>
                <Label title={"Name"} variant={"h5"}/>
                <DTextField type={"text"} updateState={updateName} hint={"Enter your name here eg.Tarun"}/>
                <Label title={"Email"} variant={"h5"} />
                <DTextField updateState={updateMail} type={"email"} hint={"Enter your e-mail here eg. maroon5@gmail.com"}/>
                <Label title={"Password"} variant={"h5"}/>
                <DTextField updateState={updatePassword} type={"password"} hint={"Enter your password here"}/>
                <Label title={"Age"} variant={"h5"}/>
                <DTextField updateState={updateAge} type="number" min={"18"} max={"90"} hint={"Enter your age here eg 18"}/>
                <Button handle={handleRegister} label={"Note it down"} sty={{marginLeft:"230px",marginTop:"10px"}}/>
                <div style={{display:"flex",flexDirection:"row",marginLeft:"200px",marginTop:"8px"}}><Label style={{paddingRight:"5px"}} title={"Already registered?  "}/><a onClick={goToLogin}><b style={{cursor:"pointer"}}>Log In</b></a></div>
            </form>
        </div>
    );
};

export default Registerform;