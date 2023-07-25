import { useEffect, useRef, useState } from "react";
import JSEncrypt from 'jsencrypt';
import consts from '../../Login/keys/const'
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Navbar from "../../../Components/Navbar/Navbar";
import { postnewforgot } from "../../../Redux/Pin/Forgot/ForgotAction";
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import loader from "../../../Assets/loading.json";
import LottieAnimation from "../../../Lotties";
const Password = ({postnewforgot, loading}) => {
    const history = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const [postState, setPostState] = useState({})
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
    const [pin, setPin] = useState("");
    const atmpin = useRef(null);
    useEffect(() => {
        if (pin.length === 1) {
        atmpin1.current.focus();
        }
    }, [pin.length]);
    const onChangepin1 = (e) => {
        const value = e.target.value
        setPin(value)
    };
    const [pin1, setPin1] = useState("");
    const atmpin1 = useRef(null);
    useEffect(() => {
        if (pin1.length === 1) {
        atmpin2.current.focus();
        }
    }, [pin1.length]);
    const onChangepin2 = (e) => {
        const value = e.target.value
        setPin1(value)
    };
    const [pin2, setPin2] = useState("");
    const atmpin2 = useRef(null);
    useEffect(() => {
        if (pin2.length === 1) {
        atmpin3.current.focus();
        }
    }, [pin2.length]);
    const onChangepin3 = (e) => {
        const value = e.target.value
        setPin2(value)
    };
    const [pin3, setPin3] = useState("");
    const atmpin3 = useRef(null);
    const onChangepin4 = (e) => {
        const value = e.target.value
        setPin3(value)
        const pins = `${pin}${pin1}${pin2}${value}`
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(pins);
        setPostState({...{pin: encrypted} });
    };
    const handlesubmit = (e)=>{
        e.preventDefault();
        postnewforgot(
            postState, ()=>{ 
            history(`/setting`);
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
                    <div className="password setpin">
                        <div className="phone-header">
                            <p className="phone-header-head">Set New Password</p>
                            <p className="phone-header-text">Please Enter your new Phone Number</p>
                        </div>
                        <div className="phone-body">
                            <form onSubmit={handlesubmit}>
                                <div className="setpin-container">
                                    <div className="field-1">
                                        <div className="pinfield">
                                            <input
                                            type="text"
                                            maxlength="1"
                                            onChange={onChangepin1}
                                            ref={atmpin}
                                            autoFocus
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="field-1">
                                        <div className="pinfield">
                                            <input
                                            type="text"
                                            maxlength="1"
                                            onChange={onChangepin2}
                                            ref={atmpin1}
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="field-1">
                                        <div className="pinfield">
                                            <input
                                            type="text"
                                            maxlength="1"
                                            onChange={onChangepin3}
                                            ref={atmpin2}
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="field-1">
                                        <div className="pinfield">
                                            <input
                                            type="text"
                                            maxlength="1"
                                            onBlur={onChangepin4}
                                            ref={atmpin3}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="setpin-button">
                                    {loading ? (
                                        <button className='transfer-button' disabled>
                                            <LottieAnimation data={loader}/>
                                        </button>
                                    ) : (
                                        <button className='transfer-button'><span>Submit</span></button>
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
        loading: state.newforgot.loading,
        success:state?.changepin?.data?.message,
        profile: state.getprofile.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postnewforgot: (postdata, history) => {
            dispatch(postnewforgot(postdata, history));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Password);