import { combineReducers } from 'redux'
import dashboardReducer from './dashboardReducer'
import tabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer
})

export default rootReducer