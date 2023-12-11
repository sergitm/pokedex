export const CHANGE_MODE = "CHANGE_MODE";

export const changeModeAction = (mode) => {
    return {
        type: CHANGE_MODE,
        payload: mode
    }
}