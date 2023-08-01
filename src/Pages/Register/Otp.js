import { Link, useNavigate} from "react-router-dom";
import { otpData } from "../../Redux/Registration/OtpAction";
import { connect } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/loading.json"
const Otp = (props) => {
    const {otpData, loading, data, error}= props
    const [pin, setPin] = useState(null);
    const history = useNavigate();
    const [otpState, setOtpState] = useState({});
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const handleotp = (e) => {
        const value = e.target.value;
        const pin_id = data
        setPin(value);
        setOtpState({ ...otpState, ...{pin, pin_id}});
    };
    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
            await otpData(otpState, ()=>{ 
            history(`/password`);
            }, ()=>{ 
                setErrorHandler(error)
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
                    <p className='login-header'>Enter OTP</p>
                    <p className='login-text'>A 4-Digit code whas been sent to your number</p>
                </div>
                {(errorHandler?.loading) ?
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        
                    </div> : <div className="login-error">{errorHandler}</div>
                }
                <div className="login-form">
                    <form onSubmit={handleSignUp}>
                        <div className="inputfield-4 loginfield">
                            <label>OTP</label><br></br>
                            <div className="inputbox2 inputbox-login">
                                <input
                                    type="text"
                                    placeholder='070707'
                                    maxLength="6"
                                    onChange={handleotp}
                                    onBlur={handleotp}
                                >
                                </input>
                                <span className='place-mobile'>OTP</span>
                            </div>
                        </div>
                        <div className="submit submit-login">
                            {loading ? (
                                <button disabled>
                                    <LottieAnimation data={loader}/>
                                </button>
                            ) : (
                                <button><span>submit</span></button>
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
        error: state.otp.error,
        loading: state.otp.loading,
        data:  state.register.data.pinId
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
      otpData: (otpState, history, setErrorHandler)=>{
        dispatch(otpData(otpState, history, setErrorHandler))
    }
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Otp);