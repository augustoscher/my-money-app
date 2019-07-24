import { combineReducers } from 'redux'
import dashboardReducer from './dashboardReducer'
import tabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billinCycleReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer
})

export default rootReducer