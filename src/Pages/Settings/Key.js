import { connect } from "react-redux";
import {IoMdEye} from 'react-icons/io'
import { IoCopy } from "react-icons/io5";
import {FaTimes} from 'react-icons/fa'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSpinner, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import './Key.css'
import copy from 'copy-to-clipboard'
import { useEffect, useState } from "react";
import { fetchgetprofile } from "../../Redux/Getprofile/GetprofileAction";
import { profileFaliure } from "../../Redux/Profile/ProfileAction";
import { putwebhook } from "../../Redux/Webhook/WebhookAction";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/loading.json";
import validator from 'validator'
const Key = ({fetchgetprofile, putwebhook, clientid,apiKey, error, loading, personal, business}) => {
    const [pending, setPending] = useState(false)
    const [success, setSuccess] = useState(false)
    const [short, setShort] = useState(false);
    const [short2, setShort2] = useState(false);
    const [type, setType] = useState('text');
    const [icon, setIcon] =useState(faEyeSlash);
    const [type2, setType2] = useState('text');
    const [icon2, setIcon2] =useState(faEyeSlash);
    const [url, seturl] = useState("")
    const [hookState, sethookState] = useState(null);
    const [num, setNum] = useState("")
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const handleShort = ()=>{
        setShort(!short)
        copy(clientid);
    }

    const handleshort2 = () => {
        setShort2(!short2)
        copy(apiKey);
    }
    const vissibleToggle=()=>{
        if(type==='text'){
            setIcon(faEye);
            setType('password');
        }
        else{
            setIcon(faEyeSlash);
            setType('text');
        }
    }
    const vissibleToggle2=()=>{
        if(type==='text'){
            setIcon2(faEye);
            setType2('password');
        }
        else{
            setIcon2(faEyeSlash);
            setType2('text');
        }
    }
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() 
                * (max - min + 1)) + min;
    };
    useEffect(() => {
        setNum(randomNumberInRange(1, 9));
    }, []);
    const handlewebhook = (e) =>{
        const value = validator.trim(e.target.value);
        seturl(value);
        sethookState({ ...hookState, ...{webhook: url} });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await putwebhook(clientid, hookState,()=>{ 
                setSuccess(true);
            },()=>{ 
                    setErrorHandler(error)
                    setPending(true);
                });
        }catch(error){
            // setPending(false);
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
            {(business.length !== 0) ? (
              <div></div>  
            ) : (
                <div className="key-error-notiication">
                    <p>Please Complete Your Profile</p>
                    {/* <div className="error-cancle"><FaTimes/></div> */}
                </div>
            )}
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
                                type={type}
                                value={(business.length !== 0) ? (clientid) : ("xxxxxxxxxxxxxx")}
                            >
                            </input>
                            <div className="secret-icon">
                                <FontAwesomeIcon icon={icon} onClick={vissibleToggle}/>
                                <IoCopy onClick={handleShort}/>
                            </div>
                        </div>
                        <div className="secret-submit">
                            {/* {(short) ? <button onClick={handleShort}>Copied</button> : <button onClick={handleShort}>Copy Key</button>}  */}
                        </div>
                    </div>
                </div>
                <div className="secret-key">
                    <p className="secret-key-head">Api key</p>
                    <div className="secret-key-form">
                        <div className="secret-input">
                            <input
                                type={type2}
                                value={(business.length !== 0) ? (apiKey) : ("xxxxxxxxxxxxxx")}
                            >
                            </input>
                            <div className="secret-icon">
                                <FontAwesomeIcon icon={icon2} onClick={vissibleToggle2}/>
                                <IoCopy onClick={handleshort2}/>
                            </div>
                        </div>
                        <div className="secret-submit">
                        {/* {(short2) ? <button onClick={handleshort2}>Copied</button> : <button onClick={handleshort2}>Copy Key</button>}  */}
                        </div>
                    </div>
                </div>
                <div className="secret-key">
                    <p className="secret-key-head">Set Webhook URL</p>
                    <form onSubmit={handleSubmit} method="POST">
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
                                {loading ? (
                                    <button disabled>
                                        <LottieAnimation data={loader}/>
                                    </button>
                                ) : (
                                    <button disabled = {(business.length !== 0) ? (false) : (true)}><span>set</span></button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStoreToProps = (state) => {
    // 
    return {
        webhook: state.webhook,
        error: state.webhook.error,
        loading: state.webhook.loading,
        clientid: state?.getprofile?.data?.client?._id,
        apiKey: state?.getprofile?.data?.client?.apiKey,
        personal: state?.getprofile?.data?.personalInfo,
        business: state?.getprofile?.data?.businessInformation
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchgetprofile: () => dispatch(fetchgetprofile()),
        putwebhook: (id, hookState, history,setErrorHandler) => dispatch(putwebhook(id, hookState, history,setErrorHandler))
    };
};
 
export default connect(mapStoreToProps, mapDispatchToProps)(Key);