import { Link, useNavigate} from "react-router-dom";
import JSEncrypt from 'jsencrypt';
import consts from '../Login/keys/const';
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Fingerprint2 from 'fingerprintjs2';
import { passwordData } from "../../Redux/Registration/SavepasswordAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
// import { traData } from "../../Redux/Registration/RegisterAction";
import { useSelector } from 'react-redux';
const Setpassword = (props) => {
    const {passwordData, loading, phoneNumber,traData, nameData, error}= props
    const history = useNavigate();
    const businessName = useSelector((state) => state.register.registerData.businessName);
    console.log(businessName)
    const [referredBy, setReferredby] = useState(null);
    const [password, setPassword] = useState(null);
    const [enterPassword, setEnterPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [passwordState, setPasswordState] = useState({});
    const [fingerprint, setFingerprint] = useState(null);
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const handlePassword = (e) => {
        // console.log(process.env.REACT_APP_PUB_KEY);
        const value = e.target.value;
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
        console.log(`encrypted   - ${encrypted}`);
        setPassword(encrypted);
        setEnterPassword(value)
        setPasswordsMatch(value === confirmPassword);
        setPasswordState({ ...passwordState, ...{ password,  phoneNumber, businessName} });
    };
    const handleconfirmPassword = (e) => {
        // console.log(process.env.REACT_APP_PUB_KEY);
        const value = e.target.value;
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
        console.log(`encrypted   - ${encrypted}`);
        setPassword(encrypted);
        setConfirmPassword(value)
        setPasswordsMatch(value === enterPassword);
    };
    useEffect(() => {
        Fingerprint2.get((components) => {
            const values = components.map(component => component.value);
            const deviceID = Fingerprint2.x64hash128(values.join(''), 31);
            const deviceId = deviceID
            // const deviceId = deviceID
            console.log(deviceID);
            setFingerprint(deviceID);
            setPasswordState({ ...passwordState, ...{ deviceId} })
          });
      }, []);
    // const handleRefer = (e) => {
    //     const value = e.target.value;
    //     setReferredby(value);
    //     setPasswordState({ ...passwordState, ...{referredBy} });
    // };
    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
            await passwordData(passwordState, ()=>{ 
            console.log("now go to login..");
            history(`/`);
            // setPending(true);
            }, ()=>{ 
                console.log("now go to error..", error);
                setErrorHandler(error)
                // setPending(false);
            });
            console.log(passwordState)
        }catch(e){
            // setPending(false);
            console.log("Something went wrong ??? ",e);
        }
    };
    return ( 
        <div className="login">
        <div className="login-logo">
            <p>Credio pay</p>
        </div>
        <div className="login-right">
            <div className="login-form-section-inner">
                <div className="welcome">
                    <p className='login-header'>Set Password</p>
                    <p className='login-text'>Enter the password you want?</p>
                </div>
                {/* {(errorHandler.dataAdded) ?
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        
                    </div> : <div>{errorHandler}</div>
                } */}
                <div className="login-form">
                    <form onSubmit={handleSignUp}>
                        <div className="inputfield-4 loginfield">
                            <div className="inputbox2 inputbox-login">
                                <input
                                    type="password"
                                    placeholder='Enter Password`'
                                    name="password"
                                    onChange={handlePassword}
                                    onBlur={handlePassword}
                                    required
                                >
                                </input>
                                <span className='place-mobile'>Enter Password</span>
                            </div>
                        </div>
                        <div className="inputfield-4 loginfield">
                            <div className="inputbox2 inputbox-login">
                                <input
                                    type= "password"
                                    placeholder='Confirm New Password`'
                                    name="password"
                                    onChange={handleconfirmPassword}
                                    onBlur={handleconfirmPassword}
                                    required
                                >
                                </input>
                                <span className='place-mobile'>Confirm New Password</span>
                            </div>
                        </div>
                        {/* <div className="inputfield-4 loginfield">
                            <div className="inputbox2 inputbox-login">
                                <select
                                    className="bank-select"
                                    onBlur={handleRefer}
                                    onChange={handleRefer}
                                    required
                                >
                                <optgroup>
                                    <option>Refered by</option>
                                    <option value="friends">Friends</option>
                                    <option value="influencer">Influencer</option>
                                    <option value="facebook">Facebook</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="tiktok">Tiktok</option>
                                    <option value="credio-agent">Credio-Agents</option>
                                    <option value="others">Others.....</option>
                                </optgroup>
                                </select>
                            </div>
                        </div> */}
                            {!passwordsMatch && (
                                <p style={{ color: "black", fontFamily: "Poppins", textAlign: "center", marginTop: "20px"}}>Passwords do not match!</p>
                            )}
                            {passwordsMatch && (
                                <div className="submit submit-login">
                                    <button> <span>Submit</span></button>
                                    {/* {!loading && <button> <span>Submit</span></button>}
                                    {loading && <button disabled>  <FontAwesomeIcon
                                            className="spinner"
                                            icon={faSpinner}
                                    ></FontAwesomeIcon></button>} */}
                                </div>
                            )}
                        
                    </form>
                </div>
            </div>
            <div className="circle-background"></div>
        </div>
       
    </div>
    );
}
 
const mapStoreToProps = (state) => {

    return {
        nameData: state,
        loading: state.password.loading,
        error: state.password.error,
        phoneNumber: state.register.data.to,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
      passwordData: (passwordState, history, setErrorHandler)=>{
        dispatch(passwordData(passwordState, history, setErrorHandler))
      },
    //   traData: (registerState) => {
    //     dispatch(traData(registerState));
    //   },
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Setpassword);