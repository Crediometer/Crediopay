import { useState } from 'react';
import './AccountPage.css'
import styles from './Main.module.css'
import Main from './Main';
import Sub from './Sub';
import Virtual from './Virtual';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
const AccountPage = () => {
    const [show, setShow] = useState(1);
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
    const handleMain = ()=>{
        setShow(1)
    }
    const handleSub = ()=>{
        setShow(2)
    }
    const handleVirtual = ()=>{
        setShow(3)
    }
    return ( 
        <div className="test">
            <div className="left">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} toggle={toggleSidebar}/>
            </div>
            <div className="right">
                <Navbar toggle={toggleSidebar} mode={sidebar}/>
                <div className="content">
                    <div className="account-page">
                        <div className="settings-top accounts-top">
                            <p onClick={handleMain} className={show === 1 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Main Accounts</p>
                            <p onClick={handleSub} className={show === 2 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Sub Accounts</p>
                            <p onClick={handleVirtual} className={show === 3 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Virtual Accounts</p>
                        </div>
                        <div className="accounts-body">
                            { (show === 1) && <Main/>}
                            { (show === 2) && <Sub/>} 
                            { (show === 3) && <Virtual/>}           
                        </div>
                    </div>
                </div>
                </div>
          </div>
     );
}
 
export default AccountPage;