//const ADD_POST = "ADD-POST";
//const SET_USER = "SET-USER";

const initialState = {
    isAuth: false,
    typeUser: null//null user confectioner
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        default:
        return state;
    }
}

//export const addPost = (message) => ({type: ADD_POST, message: message});
//export const setUser = (userData) => ({type: SET_USER, userData: userData});

export default authReducer;