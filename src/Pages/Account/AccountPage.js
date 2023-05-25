import { useState } from 'react';
import './AccountPage.css'
import Main from './Main';
import Sub from './Sub';
import Virtual from './Virtual';
const AccountPage = () => {
    const [show, setShow] = useState(1);
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
        <div className="account-page">
            <div className="settings-top">
                <p onClick={handleMain}>Main Accounts</p>
                <p onClick={handleSub}>Sub Accounts</p>
                <p onClick={handleVirtual}>Virtual Accounts</p>
            </div>
            <div className="settings-body">
                { (show === 1) && <Main/>}
                { (show === 2) && <Sub/>} 
                { (show === 3) && <Virtual/>}           
            </div>
        </div>
     );
}
 
export default AccountPage;