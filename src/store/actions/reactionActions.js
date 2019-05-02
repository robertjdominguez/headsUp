export const reactionPicker = (level) => {
    return (dispatch, getState) => {
        dispatch({ type: 'ASSIGN_REACTIONS', level });
    }
}

export const modalPop = (level) => {
    return (dispatch, getState) => {
        dispatch({ type: 'MODAL_OPEN', level });
    }
}

export const modalClose = (level) => {
    return (dispatch, getState) => {
        dispatch({ type: 'MODAL_CLOSE', level });
    }
}
