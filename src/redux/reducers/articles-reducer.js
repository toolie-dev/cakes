const SET_ACTIVE_PAGE = "SET-ACTIVE-PAGE/articles";
const SET_TAGS = "SET-TAGS/articles";
const SET_TYPES = "SET-TYPES/articles";
const DELETE_RESULT = "DELETE-RESULT/articles";
const SET_RESULT = "SET-RESULT/articles";

const initialState = {
    types: [],
    numberPage: 15,
    activePage: 8,
    result: []
}

const articlesReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ACTIVE_PAGE:
            const result = state.activePage + action.number;
            if(result > 0 && result <= state.numberPage){
                return{
                    ...state,
                    activePage: result
                }
            }
        case SET_TYPES:
            return {
                ...state,
                types: state.types.some(item => item === action.typeDessert)?
                state.types.filter(item => item != action.typeDessert):
                [...state.types, action.typeDessert]
            }
        case DELETE_RESULT:
            return{
                ...state,
                result: state.result.filter((item, i) => i != action.id)
            }
        case SET_RESULT:
            return{
                ...state,
                result: [{
                    text: action.text,
                    products: "loading"
                },
                ...state.result]
            }
        default:
            return state;
    }
}

export const setActivePage = (number) => ({type: SET_ACTIVE_PAGE, number});
export const setTypes = (typeDessert) => ({type: SET_TYPES, typeDessert});
export const deleteResult = (id) => ({type: DELETE_RESULT, id});
export const setResult = (text) => ({type: SET_RESULT, text});

export default articlesReducer;