import { theActions } from "../actions/alertActions";

const init = {
    severity:"info",
    open:false,
    alertMessageContent:"nothing to show currently"
};

const reducer =(state=init,action)=>{
    switch(action.type){
        case theActions.SET_DET:
            return {...state,...action.data};
        default:
            return {state};
    }
};

export default reducer;