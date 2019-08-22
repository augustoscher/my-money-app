import { combineReducers } from 'redux'
//importa reducer de redux-form com o alias de formReducer
import { reducer as formReducer } from 'redux-form';
import dashboardReducer from './dashboardReducer'
import tabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billinCycleReducer';
import { reducer as toastrReducer } from 'react-redux-toastr'
import authReducer from '../auth/authReducer';


const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
  auth: authReducer 
})

export default rootReducer