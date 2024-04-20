import { useState } from "react";
import './Phone.css';
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Navbar from "../../../Components/Navbar/Navbar";
import { postforgot } from "../../../Redux/Pin/Forgot/ForgotAction";
import LottieAnimation from "../../../Lotties";
import loader from "../../../Assets/loading.json";
import Errormodal from "../../../Components/Modal/Errormodal";
const Phone = ({postforgot, loading,error}) => {
    const [sidebar, setSidebar] = useState(false);
    const history = useNavigate();
    const [phone, setphoneNumber] = useState("");
    const [postState, setPostState] = useState({})
    const [showerror, setshowerror] = useState(false)
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
    const handleNumber =(e)=>{
        const value = e.target.value;
        setphoneNumber(value);
        setPostState({  ...{userNumber: phone} });
    }
    const togglemodal = ()=>{
        setshowerror(!showerror)
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        postforgot(
            postState, ()=>{ 
            history(`/forgototp`);
            // setPending(true);
        },  ()=>{ 
            // setErrorHandler(error)
            setshowerror(true)
            // setPending(false);
        }
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
                    <div className="phone">
                        <div className="phone-header">
                            <p className="phone-header-head">Phone Number</p>
                            <p className="phone-header-text">Please Enter your phone number</p>
                        </div>
                        <div className="phone-body">
                            <form className="phone-form" onSubmit={handlesubmit} method="POST">
                                <div className="form-change">
                                    <div className="input input-2">
                                        <input type="text" placeholder="Phone Number" 
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
            {showerror && (<Errormodal error={error} togglemodal={togglemodal}/>)}
         </div>
     );
}

const mapStateToProps = state => {
    return{
        error: state?.forgot?.error?.data?.message,
        loading: state.forgot.loading,
        success:state?.changepin?.data?.message,
        profile: state.getprofile.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postforgot: (postdata, history, error) => {
            dispatch(postforgot(postdata, history, error));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone);