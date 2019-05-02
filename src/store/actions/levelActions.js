export const levelPicker = (level) => {
    return (dispatch, getState) => {
        dispatch({ type: 'PICK_LEVEL', level });
    }
}
