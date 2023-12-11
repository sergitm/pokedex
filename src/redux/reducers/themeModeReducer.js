import { CHANGE_MODE } from "../actions/changeModeAction";

const getThemeInStorage = () => {
    return localStorage.getItem('mode');
}

const theme = getThemeInStorage();

const default_mode = { 
    mode: theme || 'light' 
};

const themeModeReducer = (state = default_mode, action) => {
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

export default themeModeReducer;