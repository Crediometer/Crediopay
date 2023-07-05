import {combineReducers} from 'redux';

import { dashboardReducer, recenttranReducer, sumtranReducer } from './Dashboard/DashboardReducer';
import { profileReducer } from './Profile/ProfileReducer';
import { transactionReducer } from './Transaction/TransactionReducer';
import { statementReducer } from './Statement/StatementReducer';
import { notificationReducer } from './Notification/NotificationReducer';
// import { bankReducer, banknameReducer, transferReducer } from './Transfer/BankReducer';
import { personalReducer } from './Activate/PersonalReducer';
import { businessReducer } from './Activate/BusinessReducer';
import authReducer from './Login/LoginReducer';
import registerReducer from './Registration/RegisterReducer';
import otpReducer from './Registration/OtpReducer';
import passwordReducer from './Registration/SavepasswordReducer';
import { getprofileReducer } from './Getprofile/GetprofileReducer';
import { webhookReducer } from './Webhook/WebhookReducer';
import { vaultReducer } from './Vault/VaultReducer';
import { settingReducer } from './Settings/SettingsReducer';
import banknameReducer from './Bank/BankReducer';
import depositReducer from './Deposit/DepositReducer';

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
    bankname: banknameReducer,
    deposit: depositReducer,
    // bank: bankReducer,
    // transfer: transferReducer,
    // bankname: banknameReducer,
    personal: personalReducer,
    business: businessReducer,
    getprofile: getprofileReducer,
    webhook: webhookReducer,
    vault: vaultReducer,
    setting: settingReducer,
})

export default rootReducer;