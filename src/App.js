import {Provider} from 'react-redux';
import store from './Redux/Store';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Activate from './Pages/Activate/Activate';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
// import styles from './styles.module.css'
import './App.css';
import Registration from './Pages/Registration/Registration';
import Payment from './Pages/Payment/Payment';
import Product from './Pages/Payment/Product';
import Zelle from './Pages/Zelle/Zelle';
import Transaction from './Pages/Transaction/Transaction';
import Settings from './Pages/Settings/Settings';
import Account from './Pages/Account/Account';
import AccountPage from './Pages/Account/AccountPage';
import Transfer from './Pages/Transfer/Transfer';
import { useState } from 'react';
import Onetime from './Pages/Payment/Onetime';
import Notification from './Pages/Notification/Notification';
import AccountStatement from './Pages/AccountStatement/AccountStatement';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Otp from './Pages/Register/Otp';
import Setpassword from './Pages/Register/Setpassword';
import AuthenticatedRoute from './Components/AuthenticatedRoute';
import SetPin from './Pages/Settings/SetPin/SetPin';
import ChangePin from './Pages/Settings/SetPin/ChangePin';
import Phone from './Pages/Settings/Forgot/Phone';
import Forgototp from './Pages/Settings/Forgot/Otp';
import Password from './Pages/Settings/Forgot/Password';
function App() {
  // const [sidebar, setSidebar] = useState(false);
  // const toggleSidebar = () => {
  //   setSidebar((prevState) => !prevState);
  // };
  return (
    <Router>
      <Provider store={store}>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/signup" element={<Register/>}/>
              <Route path="/otp" element={<Otp/>}/>
              <Route path="password" element={<Setpassword/>}/>
              {/* <Route element={<AuthenticatedRoute/>}> */}
                  <Route exact path='/registration' element={<Registration/>}></Route>
                  <Route exact path='/dashboard' element={<Dashboard/>}></Route>
                  <Route path="/activate" element={<Activate/>}/>
                  <Route path="/payment" element={<Payment/>}/>
                  <Route path="/product" element={<Product/>}/>
                  <Route path="/onetime" element={<Onetime/>}/>
                  <Route path="/zelle" element={<Zelle/>}/>
                  <Route path="/transaction" element={<Transaction/>}/>
                  <Route path="/setting" element={<Settings/>}/>
                  {/* <Route path="/account" element={<Account/>}/> */}
                  <Route path="/account" element={<AccountPage/>}/>
                  <Route path="/transfer" element={<Transfer/>}/>
                  <Route path='/notification' element={<Notification/>}/>
                  <Route path='/statement' element={<AccountStatement/>}/>
                  {/* <Route path='/setpin' element={<SetPin/>}/>
                  <Route path='/changepin' element={<ChangePin/>}/> */}
                  <Route path='/forgot' element={<Phone/>}/>
                  <Route path='/forgototp' element={<Forgototp/>}/>
                  <Route path='/forgotnew' element={<Password/>}/>
              {/* </Route> */}
            </Routes>
      </Provider>
    </Router>
  );
}

export default App;
