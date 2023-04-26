import { combineReducers } from 'redux'
import { hightLightReducer } from './HighlightReducer';
import { categoryReducer } from './CategoryReducer';
import { activityReducer } from './ActivityReducer';

const reducers = combineReducers({
    highLightsList: hightLightReducer,
    categoryList: categoryReducer,
    activityList: activityReducer
})

export default reducers;