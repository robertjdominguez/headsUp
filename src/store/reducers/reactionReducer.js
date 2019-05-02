// Takes in two parameters: state and action with a default value
import reactions from '../../components/game/celebrations'

const initState = {
    levelObject: null,
    levelChoice: null,
    winningReaction: null,
    losingReaction: null,
    modal: false
}

const reactionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ASSIGN_REACTIONS': 
            const ranWinning = reactions.winningRxn[Math.floor(Math.random()*reactions.winningRxn.length)];
            const ranLosing = reactions.losingRxn[Math.floor(Math.random()*reactions.losingRxn.length)];
            console.log(ranWinning)
            console.log(ranLosing)
            return {
                ...state,
                winningReaction: ranWinning,
                losingReaction: ranLosing
            }
        case 'MODAL_OPEN': 
        return {
            ...state,
            modal: true
        }
        case 'MODAL_CLOSE':
        return {
            ...state,
            modal: false
        }
        default:
            return state;
    }
}

export default reactionReducer