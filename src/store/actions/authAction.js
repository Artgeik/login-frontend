import * as api from "../../serverConnection/api.js";
import { setAlertDetails } from "./alertActions.js";

export const authAction = {
  SET_DETAILS:"SETUSERDETAILS"
};

export const getAuthActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};


const setUserDetails=(userDetails)=>{
    return {
        type:authAction.SET_DETAILS,
        data:userDetails,
    };
};

const login=(userDetails,navigate)=>{
    return async (dispatch) =>{
        const response = await api.login(userDetails);
        console.log(response);
        if(response.error===true || response.error==="true"){
            console.log(response);
            dispatch(setAlertDetails("error",true,response?.exception?.response?.data));
        }else{
            const useDet = response?.data;
            console.log(useDet);
            dispatch(setUserDetails(useDet));
            navigate('/dashboard');
        }
    }
};

const register =(userDetails,navigate)=>{
    return async (dispatch) =>{
        const response = await api.register(userDetails);
        console.log(response);
        if(response.error || response.error==="true"){
            console.log(response);
            dispatch(setAlertDetails("error",true,response?.exception?.response?.data));
        }else{
            const useDet = response?.data;
            console.log(useDet);
            dispatch(setUserDetails(useDet));
            navigate('/dashboard');
        }
    }
}