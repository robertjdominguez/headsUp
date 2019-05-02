// Takes in two parameters: state and action with a default value

const initState = {
    teamOneScore: 0,
    teamTwoScore: 0
}

const scoreReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_POINTS':
            if(action.team == 'teamOneScore') {
                console.log(`Added points to  ${action.team}`);
                return {
                    ...state,
                    teamOneScore: state.teamOneScore + 1
                }
            } else if (action.team == 'teamTwoScore') {
                console.log(`Added points to  ${action.team}`);
                return {
                    ...state,
                    teamTwoScore: state.teamTwoScore + 1
                }  
            } else {
                return state;
            }
        case 'CLEAR_POINTS':
            return {
                teamOneScore: 0,
                teamTwoScore: 0
            }
        default: return state
    }
}

export default scoreReducer