
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Activate from './Pages/Activate/Activate';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import styles from './styles.module.css'
import Registration from './Pages/Registration/Registration';
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
        </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
