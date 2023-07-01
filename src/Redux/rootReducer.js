import {combineReducers} from 'redux';

import { dashboardReducer, recenttranReducer, sumtranReducer } from './Dashboard/DashboardReducer';
import { profileReducer } from './Profile/ProfileReducer';
import { transactionReducer } from './Transaction/TransactionReducer';
import { statementReducer } from './Statement/StatementReducer';
import { notificationReducer } from './Notification/NotificationReducer';
import { bankReducer, banknameReducer, transferReducer } from './Transfer/BankReducer';
import { personalReducer } from './Activate/PersonalReducer';
import { businessReducer } from './Activate/BusinessReducer';
import authReducer from './Login/LoginReducer';
import registerReducer from './Registration/RegisterReducer';
import otpReducer from './Registration/OtpReducer';
import passwordReducer from './Registration/SavepasswordReducer';

const rootReducer = combineReducers({
    login: authReducer,
    register: registerReducer,
    otp: otpReducer,
    password: passwordReducer,
    dashboard: dashboardReducer,
    recenttransaction: recenttranReducer,
    sumtransaction: sumtranReducer,
    profile: profileReducer,
    transaction: transactionReducer,
    statement: statementReducer,
    notification: notificationReducer,
    bank: bankReducer,
    bankname: banknameReducer,
    transfer: transferReducer,
    personal: personalReducer,
    business: businessReducer,

})

export default rootReducer;