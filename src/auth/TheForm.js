import React from 'react';
import Label from '../reusables/Label';
import DTextField from '../reusables/DTextField'
import Button from '../reusables/Button';

import { useNavigate } from 'react-router-dom';


const TheForm = (props) => {
    const navigate = useNavigate();
    const {handleLogin,updateMail,updatePassword} =props;
    const goToRegister=()=>{
        navigate("/register");
    }
    return (
        <div style={{backgroundColor:"#22c6f0",height:"270px",width:"600px",border:"2px solid black" ,borderRadius:"6%",padding:"5px",paddingTop:"10px"}}>
            <form>
                <Label title={"Email"} variant={"h5"} />
                <DTextField updateState={updateMail} type={"email"} hint={"Enter your e-mail here eg. maroon5@gmail.com"}/>
                <Label title={"Password"} variant={"h5"}/>
                <DTextField updateState={updatePassword} type={"password"} hint={"Enter your password here"}/>
                <Button handle={handleLogin} label={"Let me in"} sty={{marginLeft:"240px",marginTop:"10px"}}/>
                <div style={{display:"flex",flexDirection:"row",marginLeft:"200px",marginTop:"8px"}}><Label style={{paddingRight:"5px"}} title={"Not Registered Yet?  "}/><div onClick={goToRegister}><b style={{cursor:"pointer"}}>Sign Up</b></div></div>
            </form>
        </div>
    );
};

export default TheForm;