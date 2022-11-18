const SET_ACTIVE_PAGE = "SET-ACTIVE-PAGE/confectioners";
const SET_TAGS = "SET-TAGS/confectioners";
const SET_TYPES = "SET-TYPES/confectioners";

const initialState = {
    types: [],
    numberPage: 15,
    activePage: 8
}

const confectionersReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export const setActivePage = (number) => ({type: SET_ACTIVE_PAGE, number});
export const setTypes = (typeDessert) => ({type: SET_TYPES, typeDessert});

export default confectionersReducer;