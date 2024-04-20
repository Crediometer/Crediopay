import { useState } from "react";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Navbar from "../../../Components/Navbar/Navbar";
import { postotpforgot } from "../../../Redux/Pin/Forgot/ForgotAction";
import { useNavigate } from 'react-router-dom';
import loader from "../../../Assets/loading.json";
import LottieAnimation from "../../../Lotties";
const Forgototp = ({postotpforgot, data, loading}) => {
    const [sidebar, setSidebar] = useState(false);
    const [otp, setotp] = useState("");
    const history = useNavigate();
    const [postState, setPostState] = useState({})
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
    const handleNumber =(e)=>{
        const value = e.target.value;
        const pin_id = data
        setotp(value);
        setPostState({  ...{pin: otp, pin_id} });
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        postotpforgot(
            postState, ()=>{ 
            history(`/forgotnew`);
            // setPending(true);
        }
        // ,  ()=>{ 
        //     // setErrorHandler(error)
        //     setshowerror(true)
        //     // setPending(false);
        // }
        )
    }
    return ( 
        <div className="test">
            <div className="left">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} toggle={toggleSidebar}/>
            </div>
            <div className="right">
                <Navbar toggle={toggleSidebar} mode={sidebar}/>
                <div className="content">
                    <div className="otp phone">
                        <div className="phone-header">
                            <p className="phone-header-head">OTP</p>
                            <p className="phone-header-text">Please Enter the OTP sent to your phone number</p>
                        </div>
                        <div className="phone-body">
                            <form className="phone-form" onSubmit={handlesubmit} method="POST">
                                <div className="form-change">
                                    <div className="input input-2">
                                        <input type="text" placeholder="OTP" 
                                        onBlur={handleNumber}
                                        onChange={handleNumber}
                                        required
                                        ></input>
                                    </div>
                                </div>
                                <div className="phone-button">
                                    {loading ? (
                                        <button className='phone-button-inner' disabled>
                                            <LottieAnimation data={loader}/>
                                        </button>
                                    ) : (
                                        <button className='phone-button-inner'><span>Submit</span></button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                 </div>
             </div>
         </div>
    );
}
const mapStateToProps = state => {
    return{
        data: state.forgot.data.pinId,
        error: state?.forgot?.error?.data?.message,
        loading: state.otpforgot.loading,
        success:state?.changepin?.data?.message,
        profile: state.getprofile.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postotpforgot: (postdata, history) => {
            dispatch(postotpforgot(postdata, history));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forgototp);