const SET_ACTIVE_PAGE = "SET-ACTIVE-PAGE/desserts";
const SET_TAGS = "SET-TAGS/desserts";
const SET_TYPES = "SET-TYPES/desserts";

const initialState = {
    tags: [],
    types: [],
    numberPage: 15,
    activePage: 8
}

const dessertsReducer = (state = initialState, action) => {
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
        case SET_TAGS:
            return {
                ...state,
                tags: state.tags.some(item => item === action.tag)?
                state.tags.filter(item => item != action.tag):
                [...state.tags, action.tag]
            }
        default:
            return state;
    }
}

export const setActivePage = (number) => ({type: SET_ACTIVE_PAGE, number});
export const setTags = (tag) => ({type: SET_TAGS, tag});
export const setTypes = (typeDessert) => ({type: SET_TYPES, typeDessert});

export default dessertsReducer;