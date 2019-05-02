// Takes in two parameters: state and action with a default value

const initState = {
    teamOne: null,
    teamTwo: null
}

const teamReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_NAMES': 
            console.log('Created teams', action.names);
            return {
                ...state,
                teamOne: action.names.teamOne,
                teamTwo: action.names.teamTwo
            }
            default:
                return state;
    }
    
}

export default teamReducer