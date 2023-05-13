import { authAction } from "../actions/authAction";

const initState={
    userDetails:{dashboard:false},
};

const reducer = (state=initState,action)=>{
    switch(action.type){
        case authAction.SET_DETAILS:
            return {...state,
                userDetails:action.data
            };
        default:
            return state;
    }
};

export default reducer;