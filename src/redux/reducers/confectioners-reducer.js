const SET_ACTIVE_PAGE = "SET-ACTIVE-PAGE/confectioners";
const SET_TAGS = "SET-TAGS/confectioners";
const DELETE_RESULT = "DELETE-RESULT/confectioners";
const SET_RESULT = "SET-RESULT/confectioners";

const initialState = {
    tags: [],
    numberPage: 15,
    activePage: 8,
    result: []
}

const confectionersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ACTIVE_PAGE:
            if(action.number > 0 && action.number <= state.numberPage){
                return{
                    ...state,
                    activePage: action.number
                }
            }
        case SET_TAGS:
            return {
                ...state,
                tags: state.tags.some(item => item === action.tag)?
                state.tags.filter(item => item != action.tag):
                [...state.tags, action.tag]
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
export const setTags = (tag) => ({type: SET_TAGS, tag});
export const deleteResult = (id) => ({type: DELETE_RESULT, id});
export const setResult = (text) => ({type: SET_RESULT, text});

export default confectionersReducer;