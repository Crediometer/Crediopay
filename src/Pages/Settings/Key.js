import { connect } from "react-redux";
import {IoMdEye} from 'react-icons/io'
import { IoCopy } from "react-icons/io5";
import {FaTimes} from 'react-icons/fa'
import './Key.css'
import { useState } from "react";
import { fetchgetprofile } from "../../Redux/Getprofile/GetprofileAction";
import { profileFaliure } from "../../Redux/Profile/ProfileAction";
import { putwebhook } from "../../Redux/Webhook/WebhookAction";
const Key = ({fetchgetprofile, putwebhook, clientid,apiKey, error}) => {
    const [pending, setPending] = useState(false)
    const [success, setSuccess] = useState(false)
    const [short, setShort] = useState(false);
    const [Url, seturl] = useState("")
    const [hookState, sethookState] = useState(null);
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const handleShort = ()=>{
        setShort(!short)
    }
    const handlewebhook = (e) =>{
        const value = e.target.value;
        console.log(value);
        seturl(value);
        sethookState({ ...hookState, ...{Url} });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await putwebhook(clientid, hookState,()=>{ 
                console.log("now go to hook..");
                setSuccess(true);
                },()=>{ 
                    console.log(errorHandler)
                    console.log("now go to error..", error);
                    setErrorHandler(error)
                    setPending(true);
                });
            console.log(hookState)
        }catch(error){
            // setPending(false);
            console.log("Something went wrong ??? ",error);
        }
    };
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
            {pending && (
                <div className="key-error-notiication">
                    <p>Error message</p>
                    <div className="error-cancle"><FaTimes/></div>
                </div>
            )}
           {success && (
                <div className="key-success-notiication">
                    <p>success message</p>
                    <div className="error-cancle"><FaTimes/></div>
                </div>
            )}
           
            <div className="key-body">
                <div className="secret-key">
                    <p className="secret-key-head">Client Id</p>
                    <div className="secret-key-form">
                        <div className="secret-input">
                            <input
                                type="text"
                                placeholder={clientid}
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
                                placeholder={apiKey}
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
                                onChange={handlewebhook}
                                onBlur={handlewebhook}
                                required
                            >
                            </input>
                            <div className="secret-icon">
                                <IoMdEye/>
                                <IoCopy/>
                            </div>
                        </div>
                        <div className="secret-submit-2">
                            <button onClick={handleSubmit}>Set</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStoreToProps = (state) => {
    // console.log("states   ", state);
    return {
        webhook: state.webhook,
        error: state.webhook.error,
        clientid: state?.getprofile?.data?.client?.clientId,
        apiKey: state?.getprofile?.data?.client?.apiKey
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchgetprofile: () => dispatch(fetchgetprofile()),
        putwebhook: (id, hookState, history,setErrorHandler) => dispatch(putwebhook(id, hookState, history,setErrorHandler))
    };
};
 
export default connect(mapStoreToProps, mapDispatchToProps)(Key);