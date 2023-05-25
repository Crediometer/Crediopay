import { useState } from 'react';
import Key from './Key';
import Set from './Set';
import './Settings.css'
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
                <p className='overview'>Overview</p>
                <p className='document'>Documents</p>
                <p className='setting-head' onClick={handleSetting}>Settings</p>
                <p className='key-head' onClick={handleKey}>Keys</p>
            </div>
            <div className="settings-body">
               { (show === 1) && <Set/>}
               { (show === 5) && <Key/>}            
            </div>
            
        </div>
    );
}
 
export default Settings;