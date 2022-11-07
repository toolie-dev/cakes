const SET_ACTIVE_PAGE = "SET-ACTIVE-PAGE";

const initialState = {
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
        default:
            return state;
    }
}

export const setActivePage = (number) => ({type: SET_ACTIVE_PAGE, number});

export default dessertsReducer;