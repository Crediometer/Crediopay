import { useState } from 'react';
import Key from './Key';
import Set from './Set';
import './Settings.css'
import styles from '../Account/Main.module.css'
import Overview from './Overview';
import Document from './Document';
const Settings = () => {
    const [show, setShow] = useState(1);
    const handleSetting = ()=>{
        setShow(1)
    }
    const handleOverview = ()=>{
        setShow(3)
    }
    const handleDocument = ()=>{
        setShow(4)
    }
    const handleKey = ()=>{
        setShow(5)
    }
    return ( 
        <div className="settings">
            <div className="settings-top">
                <p onClick={handleOverview} className={show === 3 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Overview</p>
                <p onClick={handleDocument} className={show === 4 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Documents</p>
                <p  onClick={handleSetting} className={show === 1 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Settings</p>
                <p  onClick={handleKey} className={show === 5 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Keys</p>
            </div>
            <div className="settings-body">
                { (show === 3) && <Overview/>}  
                { (show === 4) && <Document/>}    
                { (show === 1) && <Set/>}
                { (show === 5) && <Key/>}            
            </div>
            
        </div>
    );
}
 
export default Settings;