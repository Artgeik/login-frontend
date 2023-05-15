import axios from "axios";

const apiClient = axios.create({
    baseURL:'https://login-backend-production-1604.up.railway.app/',
    timeout:4000
});

export const login = async(data)=>{
    try{
        return await apiClient.post('/login',data);
    }catch(exception){
        return {
            error:true,
            exception,
        }
    }
};

export const register = async (data) =>{
    try{
        return await apiClient.post('/register',data);
    }catch(exception){
        return {
            error:true,
            exception,
        };
    };
};