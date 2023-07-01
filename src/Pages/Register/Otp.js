import { Link, useNavigate} from "react-router-dom";
import { otpData } from "../../Redux/Registration/OtpAction";
import { connect } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
const Otp = (props) => {
    const {otpData, loading, data, error}= props
    const [pin, setPin] = useState(null);
    const history = useNavigate();
    const [otpState, setOtpState] = useState({});
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const handleotp = (e) => {
        const value = e.target.value;
        const pin_id = data
        console.log(pin_id);
        console.log(value);
        setPin(value);
        setOtpState({ ...otpState, ...{pin, pin_id}});
        // setOtpState({ ...otpState, ...{pinId} });
    };
    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
            await otpData(otpState, ()=>{ 
            console.log("now go to password..");
            history(`/password`);
            // setPending(true);
            }, ()=>{ 
                console.log("now go to error..", error);
                setErrorHandler(error)
                // setPending(false);
            });
            console.log(otpState)
        }catch(e){
            // setPending(false);
            console.log("Something went wrong ??? ",e);
        }
    };
    return ( 
        <div className="login">
        <div className="login-logo">
            <p>Credio</p>
        </div>
        <div className="login-right">
            <div className="login-form-section-inner">
                <div className="welcome">
                    <p className='login-header'>Enter OTP</p>
                    <p className='login-text'>A 4-Digit code whas been sent to your number</p>
                </div>
                {(errorHandler.dataAdded) ?
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        
                    </div> : <div>{errorHandler}</div>
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
                            {!loading && <button> <span>Submit</span></button>}
                            {loading && <button disabled>  <FontAwesomeIcon
                                    className="spinner"
                                    icon={faSpinner}
                            ></FontAwesomeIcon></button>}
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