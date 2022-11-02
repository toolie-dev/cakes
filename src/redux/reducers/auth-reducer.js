const initialState = {
    isAuth: false,
    typeUser: "confectioner"//null buyer confectioner
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default authReducer;