export const addPoints = (team) => {
    return (dispatch, getState) => {
        dispatch({ type: 'ADD_POINTS', team });
    }
}

export const clearPoints = (level) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CLEAR_POINTS', level });
    }
}
