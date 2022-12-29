const SET_ACTIVE_PAGE = "SET-ACTIVE-PAGE/confectionersPage";
const SET_TYPES = "SET-TYPES/confectionersPage";
const SET_TAGS = "SET-TAGS/confectionersPage";

const initialState = {
    user: {
        numberPage: 15,
        activePage: 8,
    },
    goods: {
        types: [],
        tags: [],
        numberPage: 15,
        activePage: 8,
    }
}

const confectionerPageReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ACTIVE_PAGE:
            switch(action.typePage){
                case "confectioner":
                    if(action.number > 0 && action.number <= state.user.numberPage){
                        return{
                            ...state,
                            user: {
                                ...state.user,
                                activePage: action.number
                            }
                        }
                    }
                case "goods":
                    if(action.number > 0 && action.number <= state.goods.numberPage){
                        return{
                            ...state,
                            goods: {
                                ...state.goods,
                                activePage: action.number
                            }
                        }
                    }
            }
        case SET_TYPES:
            console.log(state,action);
            return {
                ...state,
                goods: {
                    ...state.goods,
                    types: state.goods.types.some(item => item === action.typeDessert)?
                    state.goods.types.filter(item => item != action.typeDessert):
                    [...state.goods.types, action.typeDessert]
                }
            }
        case SET_TAGS:
            return {
                ...state,
                goods: {
                    ...state.goods,
                    tags: state.goods.tags.some(item => item === action.tag)?
                    state.goods.tags.filter(item => item != action.tag):
                    [...state.goods.tags, action.tag]
                }
            }
        default:
            return state;
    }
}

export const setActivePage = (number, typePage) => ({type: SET_ACTIVE_PAGE, number, typePage});
export const setTypes = (typeDessert) => ({type: SET_TYPES, typeDessert});
export const setTags = (tag) => ({type: SET_TAGS, tag});

export default confectionerPageReducer;