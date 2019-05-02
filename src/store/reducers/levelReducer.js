// Takes in two parameters: state and action with a default value
import levels from '../../components/levels/levelMaster'

const initState = {
    levelObject: null,
    levelChoice: null
}

const levelReducer = (state = initState, action) => {
    switch (action.type) {
        case 'PICK_LEVEL': 
            levels[action.level].questions.sort(function(a, b){return 0.5 - Math.random()});
            console.log(levels[action.level].questions);
            console.log(`Level chosen ${levels[action.level].name}`);
            return {
                ...state,
                levelObject: levels[action.level],
                levelChoice: levels[action.level].name
            }
            default:
                return state;
    }
}

export default levelReducer