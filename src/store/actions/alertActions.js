export let theActions={
    SET_DET:"SetDetails",
}

export const getActions=(dispatch)=>{
    return {
        setAlertDetails:(severity,open,alertMessageContent)=>dispatch(setAlertDetails(severity,open,alertMessageContent)),
    };
};

export const setAlertDetails=(severity,open,alertMessageContent)=>{
    return {
        type:theActions.SET_DET,
        data:{severity,open,alertMessageContent}
    }
};