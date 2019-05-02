// EXAMPLE!
import teamReducer from './teamReducer';
import levelReducer from './levelReducer';
import scoreReducer from './scoreReducer';
import reactionReducer from './reactionReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    teams: teamReducer,
    level: levelReducer,
    scores: scoreReducer,
    reactions: reactionReducer
})

export default rootReducer