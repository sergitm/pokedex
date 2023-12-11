import { CHANGE_MODE } from "../actions/changeModeAction";

const default_mode = { 
    mode: 'light' 
};

const changeModeReducer = (state = default_mode, action) => {
    switch (action.type) {
        case CHANGE_MODE: {
            return {
                ...state,
                mode: action.payload
            }
        }
        default:
            return state;
    }
}

export default changeModeReducer;