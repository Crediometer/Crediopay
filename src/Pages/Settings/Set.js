import { FaPlus, FaTrash } from "react-icons/fa";
import {Switch} from "antd";
import './Set.css';
import DirectorModal from "../../Components/Modal/DirectorModal";
import { useState } from "react";
const Set = () => {
    const [modal, setModal] = useState(false);
    const handleModal = ()=>{
        setModal(!modal)
    }
    return ( 
        <div className="set">
            <div className="directors">
                <div className="director-top">
                    <p>Directors/Users </p>
                    <button onClick={handleModal}><FaPlus/>Add</button>
                </div>
                <div className="director-body">
                    <div className="director">
                        <p className="director-name">Test Venture/Rasheed Raji</p>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                    <div className="director">
                        <p className="director-name">Test Venture/Rasheed Raji</p>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="set-settings">
                <p className="set-head">Set account notification settings</p>
                <div className="set-body">
                    <div className="set-setting">
                        <div className="set-setting-text">
                            <p className="set-text-head">Email Notification </p>
                            <p className="set-text-body">Enable email notifications.</p>
                        </div>
                        <div className="switch">
                            <Switch/>
                        </div>
                    </div>
                    <div className="set-setting">
                        <div className="set-setting-text">
                            <p className="set-text-head">Email Monthly Notification </p>
                            <p className="set-text-body">Enable monthly email notifications for account statement.</p>
                        </div>
                        <div className="switch">
                            <Switch/>
                        </div>
                    </div>
                    <div className="set-setting">
                        <div className="set-setting-text">
                            <p className="set-text-head">SMS Notification </p>
                            <p className="set-text-body">Enable SMA notifications.</p>
                        </div>
                        <div className="switch">
                            <Switch/>
                        </div>
                    </div>
                </div>
            </div>
            {modal && (
                <DirectorModal togglemodal={handleModal}/>
            )}
        </div>
    );
}
 
export default Set;