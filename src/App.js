
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Activate from './Pages/Activate/Activate';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import styles from './styles.module.css'
import Registration from './Pages/Registration/Registration';
import Payment from './Pages/Payment/Payment';
import Product from './Pages/Payment/Product';
import Zelle from './Pages/Zelle/Zelle';
import Transaction from './Pages/Transaction/Transaction';
import Settings from './Pages/Settings/Settings';
import Account from './Pages/Account/Account';
import AccountPage from './Pages/Account/AccountPage';
import Transfer from './Pages/Transfer/Transfer';
function App() {
  return (
    <Router>
      <div className={styles.test}>
        <div className={styles.left}>
          <Sidebar/>
        </div>
        <div className={styles.right}>
          <Navbar/>
          <div className={styles.content}>
          <Routes>
            <Route exact path='/' element={<Registration/>}></Route>
            <Route exact path='/dashboard' element={<Dashboard/>}></Route>
            <Route path="/activate" element={<Activate/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/zelle" element={<Zelle/>}/>
            <Route path="/transaction" element={<Transaction/>}/>
            <Route path="/setting" element={<Settings/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/accountpage" element={<AccountPage/>}/>
            <Route path="/transfer" element={<Transfer/>}/>
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
