import React, { useEffect } from "react";
import wlcm from "./wlcm.gif";
import TheLabel from "../reusables/TheLabel";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Dashboard = ({userDetails}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(() => {
      if(userDetails.dashboard===false){
        navigate("/login");
      }
      console.log('Delayed function executed');
    }, 200);
  },[userDetails,navigate])
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
      <TheLabel style={{marginBottom:"80px"}} title={"you've successfully logged in"}/>
      <div style={{border:"2px solid black" }}>
      <img alt={"welcome"} src={wlcm}/>
      </div>
    </div>
  );
};

const mapStateToProps=({auth})=>{
  return {...auth,}
};

export default connect(mapStateToProps)(Dashboard);
