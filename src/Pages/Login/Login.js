import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {connect, useDispatch} from 'react-redux'
import { LoginAuthAction } from "../../Redux/Login/LoginAction";
import { faEye, faSpinner, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Fingerprint2 from 'fingerprintjs2';
import { Link } from 'react-router-dom';
import { useState, useEffect, useMemo} from 'react';
import LottieAnimation from "../../Lotties"
import loader from "../../Assets/loading.json"
import { useNavigate } from "react-router-dom";
// import Select from "react-select";
import countryList from "../../Components/countries.json";
import consts from "../Login/keys/const";
import JSEncrypt from 'jsencrypt';
import './Login.css';
import { fetchgetprofile } from "../../Redux/Getprofile/GetprofileAction";
import ForgetModal from "../../Components/Modal/ForgetModal";
const Login = (props) => {
    const {login,error,loading, getprofile,fetchgetprofile } = props
    const [type, setType] = useState('password');
    const [icon, setIcon] =useState(faEye);
    const options = useMemo(() => countryList, []);
    const history = useNavigate();
    const [number, setNumber] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginState, setLoginState] = useState({});
    const [fingerprint, setFingerprint] = useState(null);
    const [modal, setmodal] = useState(false);
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [pending, setPending] = useState(false);
    // FOR COUNTRY SELECT
    const [country, setCountry] = useState({
        "label": "Nigeria",
        "value": "+234",
        "code": "NG"
    });
    useEffect(() => {
        setErrorHandler(error)  
    }, [error]);
    // FOR PASSWORD VISIBILITY
    const vissibleToggle=()=>{
        if(type==='password'){
            setIcon(faEye);
            setType('text');
        }
        else{
            setIcon(faEyeSlash);
            setType('password');
        }
    }
    const handleForget = ()=>{
        setmodal(!modal);
    }
    // FOR PHONE NUMBER
    const handleCountry = (value) => {
        setCountry(value);
      };
    // const phone = `${country["value"]}${number}`
    const handleNumber = (e) => {
        const value = e.target.value;
        let formattedNumber = value.trim().replace(/\D/g, ''); // Remove non-numeric characters

        // Check if the first digit is '0' and remove it, then prepend '+234'
        if (formattedNumber.charAt(0) === '0') {
            formattedNumber = '+234' + formattedNumber.slice(1);
        }
        setNumber(formattedNumber);
        setLoginState({ ...loginState, ...{phoneNumber:number} });
    };
    // FOR PASSWORD ENCRYTPTING
    const handlePassword = (e) => {
        const value = e.target.value;
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
        setPassword(encrypted);
        setLoginState({ ...loginState, ...{password} });
    };
    //FOR LOGIN PROCESS
    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
            await login(loginState, ()=>{ 
                // fetchgetprofile()
                history(`/dashboard`)
            // setPending(true);
            }, ()=>{ 
                setErrorHandler(error)
                // setPending(false);
            });
        }catch(error){
        }
    };
    //FOR DEVICE ID
    useEffect(() => {
        Fingerprint2.get((components) => {
            const values = components.map(component => component.value);
            const deviceID = Fingerprint2.x64hash128(values.join(''), 31);
            const deviceId = deviceID
            // const deviceId = deviceID
            setFingerprint(deviceID);
            setLoginState({ ...loginState, ...{deviceId} });
          });
      }, []);
    useEffect(() => {
        setLoginState({ ...loginState, phoneNumber:number, password });
    }, [number, password]);
    return ( 
        <div className="login">
            <div className="login-logo">
                <p>Credio pay</p>
            </div>
            <div className="login-right">
                <div className="login-form-section-inner">
                    <div className="welcome">
                        <p className='login-header'>Login</p>
                        <p className='login-text'>Please enter phone number and password to continue</p>
                    </div>
                    {(errorHandler?.dataAdded) ?
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            
                        </div> : <div className="login-error">{errorHandler}</div>
                    }
                    <div className="login-form">
                        <form onSubmit={handleSignUp} method="POST">

                            <div className="inputfield-4 loginfield">
                                <label>Phone Number</label><br></br>
                                <div className="inputbox2 inputbox-login">
                                    <input
                                        type="tel"
                                        placeholder='0903 4344 5532'
                                        name="email"
                                        maxLength="11"
                                        onChange={handleNumber}
                                        onBlur={handleNumber}
                                        required
                                    >
                                    </input>
                                    <span className='place-mobile'>Phone Number</span>
                                </div>
                            </div>
                            <div className="inputfield-4 loginfield">
                                <label>Password</label><br></br>
                                <div className="inputbox2 inputbox-login">
                                    <input
                                        type={type}
                                        placeholder='***********'
                                        name="password"
                                        onChange={handlePassword}
                                        onBlur={handlePassword}
                                        required
                                    >
                                    </input>
                                    <span className='place-mobile'>Password</span>
                                    <span className="psw-visible"><FontAwesomeIcon icon={icon} onClick={vissibleToggle}/></span>
                                </div>
                            </div>
                            <p className="forget-password" onClick={handleForget}>Forget Password?</p>
                            {/* <div className="forget">
                                <div className="forget-password">
                                    <Link to='/forget'>
                                        <p>Forget password ?</p>
                                    </Link>
                                </div>
                            </div> */}
                            <div className="submit submit-login">
                                {loading ? (
                                    <button disabled>
                                        <LottieAnimation data={loader}/>
                                    </button>
                                ) : (
                                    <button><span>Login</span></button>
                                )}
                                {/* <button 
                                type="submit"
                                name="submit"
                                value="Login"
                                // onClick={handleSignUp}
                                >
                                    {loading ? (
                                    <FontAwesomeIcon
                                        className="spinner"
                                        icon={faSpinner}
                                    ></FontAwesomeIcon>
                                    ): ( 
                                    <span>Login</span>
                                     )} 
                                </button> */}
                            </div>
                            <div className="account">
                                <p className="signin">Don’t have an account yet ? <Link to='/signup'><span>Sign up</span></Link></p>
                            </div>
                        </form>
                    </div>
                    {modal && <ForgetModal togglemodal={handleForget}/>}
                </div>
                <div className="circle-background"></div>
            </div>
           
        </div>
    );
}
const mapStateToProps = state => {
    return{
        error:state?.login?.error,
        loading: state?.login?.dataAdded,
        getprofile: state?.getprofile?.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        login: (loginState, history, setErrorHandler) => {
            dispatch(LoginAuthAction(loginState, history, setErrorHandler));
        },
        fetchgetprofile: () => dispatch(fetchgetprofile()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
