const SET_TYPE_POPUP = "SET-TYPE-POPUP";
const ON_CLICK_CANVAS = "ON-CLICK-CANVAS";

const initialState = {
    typePopup: ""
}

const popupReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TYPE_POPUP:
            return{
                ...state,
                typePopup: action.typePopup
            }
        case ON_CLICK_CANVAS:
            if(action.e.target.classList.contains("canvas")){
                return{
                    ...state,
                    typePopup: ""
                }
            }
        default:
            return state;
    }
}

export const setTypePopup = (typePopup) => ({type: SET_TYPE_POPUP, typePopup});
export const onClickCanvas = (e) => ({type: ON_CLICK_CANVAS, e});

export default popupReducer;