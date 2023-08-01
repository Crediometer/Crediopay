import "../Login/Login.css";
import { Link, useNavigate} from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { registerData, transferData} from "../../Redux/Registration/RegisterAction";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/loading.json"
const Register = (props) => {
    const {registerData, loading, error}= props
    const dispatch = useDispatch();
    const [number, setNumber] = useState(null);
    const [name, setName] = useState(null);
    const [email, setemail] = useState("")
    const history = useNavigate();

    const [registerState, setRegisterState] = useState({});
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    
    const handleNumber = (e) => {
        const value = e.target.value;
        setNumber(value);
        const phoneNumber = value;
        setRegisterState({ ...registerState, ...{phoneNumber} });
    };
    const handleName = (e) => {
        const value = e.target.value;
        dispatch(transferData(value));
        setName(value);
        const businessName = value;
        setRegisterState({ ...registerState, ...{businessName} });
    };
    // const handleEmail = (e) => {
       
    //     const value = e.target.value;  
    //     setemail(value);
    //     setRegisterState({ ...registerState, ...{email} });
    // };
    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
            await registerData(registerState, ()=>{ 
            history(`/otp`);
            // setPending(true);
            }, ()=>{ 
                setErrorHandler(error)
                // setPending(false);
            });
        }catch(e){
            // setPending(false);
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
                        <p className='login-header'>Sign up</p>
                        <p className='login-text'>Please enter your phone number</p>
                    </div>
                    {(errorHandler?.loading) ?
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            
                        </div> : <div className="login-error">{errorHandler}</div>
                    }
                    <div className="login-form">
                        <form onSubmit={handleSignUp}>
                            <div className="inputfield-4 loginfield">
                                <label>Business Name</label><br></br>
                                <div className="inputbox2 inputbox-login">
                                    <input
                                        type="text"
                                        placeholder='Ibranch ltd'
                                        onChange={handleName}
                                        onBlur={handleName}
                                        required
                                    >
                                    </input>
                                    <span className='place-mobile'>Ibranch ltd</span>
                                </div>
                            </div>
                            <div className="inputfield-4 loginfield">
                                <label>Phone Number</label><br></br>
                                <div className="inputbox2 inputbox-login">
                                    <input
                                        type="tel"
                                        placeholder='+234 903 4344 5532'
                                        onChange={handleNumber}
                                        onBlur={handleNumber}
                                        required
                                    >
                                    </input>
                                    <span className='place-mobile'>+234 903 4344 5532</span>
                                </div>
                            </div>
                            {/* <div className="inputfield-4 loginfield">
                                <label>Email(optional)</label><br></br>
                                <div className="inputbox2 inputbox-login">
                                    <input
                                        type="email"
                                        placeholder='xyz@gmail.com'
                                        onChange={handleEmail}
                                        onBlur={handleEmail}
                                        required
                                    >
                                    </input>
                                    <span className='place-mobile'>xyz@gmail.com</span>
                                </div>
                            </div> */}
                            <div className="submit submit-login">
                                {loading ? (
                                    <button disabled>
                                        <LottieAnimation data={loader}/>
                                    </button>
                                ) : (
                                    <button><span>Submit</span></button>
                                )}
                            </div>
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
        loading: state.register.loading,
        error: state?.register?.error?.data?.message
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
      registerData: (registerState, history, setErrorHandler)=>{
        dispatch(registerData(registerState, history, setErrorHandler))
      },
    //   traData: (registerState) => {
    //     dispatch(traData(registerState));
    //   },

    };
};
  

export default connect(mapStoreToProps, mapDispatchToProps)(Register);