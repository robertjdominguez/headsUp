export const teamNames = (names) => {
    return (dispatch, getState) => {
        dispatch({ type: 'ADD_NAMES', names });
    }
}
