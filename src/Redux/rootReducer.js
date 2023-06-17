import {combineReducers} from 'redux';

import { dashboardReducer, recenttranReducer, sumtranReducer } from './Dashboard/DashboardReducer';
import { profileReducer } from './Profile/ProfileReducer';
import { transactionReducer } from './Transaction/TransactionReducer';
import { statementReducer } from './Statement/StatementReducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    recenttransaction: recenttranReducer,
    sumtransaction: sumtranReducer,
    profile: profileReducer,
    transaction: transactionReducer,
    statement: statementReducer,
})

export default rootReducer;