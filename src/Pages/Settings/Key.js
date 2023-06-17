import { Switch } from "antd";
import {IoMdEye} from 'react-icons/io'
import { IoCopy } from "react-icons/io5";
import './Key.css'
import { useState } from "react";
const Key = () => {
    const [short, setShort] = useState(false);
    const handleShort = ()=>{
        setShort(!short)
    }
    return ( 
        <div className="key">
            {/* <div className="key-top">
                <div className="key-switch">
                    <p>Production</p>
                    <div className="key-switch-inner">
                        <Switch/>
                    </div>
                    <p>Test</p>
                </div>
            </div> */}
            <div className="key-body">
                <div className="secret-key">
                    <p className="secret-key-head">Client Id</p>
                    <div className="secret-key-form">
                        <div className="secret-input">
                            <input
                                type="text"
                                placeholder="saddbhysdn"
                            >
                            </input>
                            <div className="secret-icon">
                                <IoMdEye/>
                                <IoCopy/>
                            </div>
                        </div>
                        <div className="secret-submit">
                            {(short) ? <button onClick={handleShort}>Copied</button> : <button onClick={handleShort}>Copy Key</button>} 
                        </div>
                    </div>
                </div>
                <div className="secret-key">
                    <p className="secret-key-head">Api key</p>
                    <div className="secret-key-form">
                        <div className="secret-input">
                            <input
                                type="text"
                                placeholder="saddbhysdn"
                            >
                            </input>
                            <div className="secret-icon">
                                <IoMdEye/>
                                <IoCopy/>
                            </div>
                        </div>
                        <div className="secret-submit">
                            <button>Copy Key</button>
                        </div>
                    </div>
                </div>
                <div className="secret-key">
                    <p className="secret-key-head">Set Webhook URL</p>
                    <div className="secret-key-form">
                        <div className="secret-input">
                            <input
                                type="text"
                                placeholder="Enter webhook url"
                            >
                            </input>
                            <div className="secret-icon">
                                <IoMdEye/>
                                <IoCopy/>
                            </div>
                        </div>
                        <div className="secret-submit-2">
                            <button>Set</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Key;