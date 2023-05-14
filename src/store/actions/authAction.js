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
        console.log(response,"this was actual response");
        if(response.error===true || response.data.error===true){
            if(response.error===true){
                dispatch(setAlertDetails("error",true,response?.exception?.response?.data));    
            }else{
                dispatch(setAlertDetails("error",true,response?.data?.exception?.response?.data));
            }            
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
        console.log(response,);
        if(response.error){
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