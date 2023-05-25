import { Switch } from "antd";
import {IoMdEye} from 'react-icons/io'
import { IoCopy } from "react-icons/io5";
import './Key.css'
const Key = () => {
    return ( 
        <div className="key">
            <div className="key-top">
                <div className="key-switch">
                    <p>Production</p>
                    <div className="key-switch-inner">
                        <Switch/>
                    </div>
                    <p>Test</p>
                </div>
            </div>
            <div className="key-body">
                <div className="secret-key">
                    <p className="secret-key-head">Secret key</p>
                    <div className="secret-key-form">
                        <div className="secret-input">
                            <input
                                type="text"
                            >
                            </input>
                            <div className="secret-icon">
                                <IoMdEye/>
                                <IoCopy/>
                            </div>
                        </div>
                        <div className="secret-submit">
                            <button>Make key short </button>
                        </div>
                    </div>
                </div>
                <div className="secret-key">
                    <p className="secret-key-head">Api key</p>
                    <div className="secret-key-form">
                        <div className="secret-input">
                            <input
                                type="text"
                            >
                            </input>
                            <div className="secret-icon">
                                <IoMdEye/>
                                <IoCopy/>
                            </div>
                        </div>
                        <div className="secret-submit">
                            <button>Make key short </button>
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