import {combineReducers} from 'redux';

import { dashboardReducer, recenttranReducer, sumtranReducer } from './Dashboard/DashboardReducer';
import { profileReducer } from './Profile/ProfileReducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    recenttransaction: recenttranReducer,
    sumtransaction: sumtranReducer,
    profile: profileReducer,
})

export default rootReducer;