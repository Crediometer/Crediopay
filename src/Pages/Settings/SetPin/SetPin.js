import { useEffect, useRef, useState } from "react";
import JSEncrypt from 'jsencrypt';
import consts from '../../Login/keys/const'
import {connect} from 'react-redux'
// import Navbar from "../../../Components/Navbar/Navbar";
// import Sidebar from "../../../Components/Sidebar/Sidebar";
import './SetPin.css';
import { postsetpin } from "../../../Redux/Pin/SetpinAction";
import SuccessModal from "../../../Components/Modal/SuccessModal";
import loader from "../../../Assets/loading.json"
import LottieAnimation from "../../../Lotties";
import SuccessModal2 from "../../../Components/Modal/SuccessModal2";
const SetPin = ({postsetpin, success, loading}) => {
    const [sidebar, setSidebar] = useState(false);
    const [enterPassword, setEnterPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [postState, setPostState] = useState({})
    const [combinedPin, setcombinedPin] = useState("");
    const [showsuccess, setshowsuccess] = useState(false)
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
        setEnterPassword(pins)
        setPasswordsMatch(pins === confirmPassword);
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(pins);
        setcombinedPin(encrypted);
        setPostState({...{pin: encrypted} });
    };
    const [pin4, setPin4] = useState("");
    const atmpin4 = useRef(null);
    useEffect(() => {
        if (pin4.length === 1) {
        atmpin5.current.focus();
        }
    }, [pin4.length]);
    const onChangepin5 = (e) => {
        const value = e.target.value
        setPin4(value)
    };
    const [pin5, setPin5] = useState("");
    const atmpin5 = useRef(null);
    useEffect(() => {
        if (pin5.length === 1) {
        atmpin6.current.focus();
        }
    }, [pin5.length]);
    const onChangepin6 = (e) => {
        const value = e.target.value
        setPin5(value)
    };
    const [pin6, setPin6] = useState("");
    const atmpin6 = useRef(null);
    useEffect(() => {
        if (pin6.length === 1) {
        atmpin7.current.focus();
        }
    }, [pin6.length]);
    const onChangepin7 = (e) => {
        const value = e.target.value
        setPin6(value)
    };
    const [pin7, setPin7] = useState("");
    const atmpin7 = useRef(null);
    const onChangepin8 = (e) => {
        const value = e.target.value
        const pins = `${pin}${pin1}${pin2}${value}`
        setConfirmPassword(pins)
        setPasswordsMatch(pins === enterPassword);
        // var encrypt = new JSEncrypt();
        // encrypt.setPublicKey(`${consts.pub_key}`);
        // var encrypted = encrypt.encrypt(pins);
        // setCombinedpin(encrypted);
    };
    const togglemodal = ()=>{
        setshowsuccess(!showsuccess)
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        postsetpin(
             postState,
            ()=>{ 
               setshowsuccess(true)
            // setPending(true);
            }
        //,  ()=>{ 
        //     // setErrorHandler(error)
        //     setshowerror(true)
        //     // setPending(false);
        // }
        )
    }
    return ( 
        // <div className="test">
        //     <div className="left">
        //         <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} toggle={toggleSidebar}/>
        //     </div>
        //     <div className="right">
        //         <Navbar toggle={toggleSidebar} mode={sidebar}/>
        //         <div className="content">
                    <div className="setpin">
                        <div className="setpin-field">
                            <p className="setpin-head">Pin</p>
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
                        </div>
                        <div className="setpin-field-2">
                            <p className="setpin-head">Confirm Pin</p>
                            <div className="setpin-container">
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onChange={onChangepin5}
                                        ref={atmpin4}
                                        autoFocus
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onChange={onChangepin6}
                                        ref={atmpin5}
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onChange={onChangepin7}
                                        ref={atmpin6}
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onBlur={onChangepin8}
                                        ref={atmpin7}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="setpin-button">
                            {!passwordsMatch && (
                                <p style={{ color: "black", fontFamily: "Poppins", textAlign: "center", marginTop: "20px"}}>Passwords do not match!</p>
                            )}
                            {passwordsMatch && (
                                <div>
                                    {loading ? (
                                        <button className='transfer-button' disabled>
                                            <LottieAnimation data={loader}/>
                                        </button>
                                    ) : (
                                        <button className='transfer-button' onClick={handlesubmit}><span>Submit</span></button>
                                    )}
                                </div>
                                
                            )} 
                        </div>
                        {showsuccess && (<SuccessModal2 message={success} link="/dashboard"/>)}
                    </div>
        //         </div>
        //     </div>
        // </div>
    );
}
const mapStateToProps = state => {
    return{
        loading: state.setpin.loading,
        success:state?.setpin?.data?.message,
        profile: state.getprofile.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postsetpin: (postdata, history) => {
            dispatch(postsetpin(postdata, history));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SetPin);