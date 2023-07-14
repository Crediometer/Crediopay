import { useEffect, useRef, useState } from "react";
import JSEncrypt from 'jsencrypt';
import consts from '../../Login/keys/const'
import {connect} from 'react-redux'
// import Navbar from "../../Components/Navbar/Navbar";
// import Sidebar from "../../Components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { postchangepin } from "../../../Redux/Pin/SetpinAction";
import SuccessModal from "../../../Components/Modal/SuccessModal";

const ChangePin = ({postchangepin, success}) => {
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
        console.log(pins)
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(pins);
        // console.log(encrypted)
        // setCombinedpin(encrypted);
        setPostState({...postState, ...{oldPin: encrypted} });
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
        console.log(pins)
        setEnterPassword(pins)
        setPasswordsMatch(pins === confirmPassword);
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(pins);
        // console.log(encrypted)
        setcombinedPin(encrypted);
        setPostState({...postState, ...{newPin: encrypted} });
    };
    const [pin8, setPin8] = useState("");
    const atmpin8 = useRef(null);
    useEffect(() => {
        if (pin8.length === 1) {
        atmpin9.current.focus();
        }
    }, [pin8.length]);
    const onChangepin9 = (e) => {
        const value = e.target.value
        setPin8(value)
    };
    const [pin9, setPin9] = useState("");
    const atmpin9 = useRef(null);
    useEffect(() => {
        if (pin9.length === 1) {
        atmpin10.current.focus();
        }
    }, [pin9.length]);
    const onChangepin10 = (e) => {
        const value = e.target.value
        setPin5(value)
    };
    const [pin10, setPin10] = useState("");
    const atmpin10 = useRef(null);
    useEffect(() => {
        if (pin10.length === 1) {
        atmpin11.current.focus();
        }
    }, [pin10.length]);
    const onChangepin11 = (e) => {
        const value = e.target.value
        setPin10(value)
    };
    const [pin11, setPin11] = useState("");
    const atmpin11 = useRef(null);
    const onChangepin12 = (e) => {
        const value = e.target.value
        const pins = `${pin}${pin1}${pin2}${value}`
        console.log(pins)
        setConfirmPassword(pins)
        setPasswordsMatch(pins === enterPassword);
        // var encrypt = new JSEncrypt();
        // encrypt.setPublicKey(`${consts.pub_key}`);
        // var encrypted = encrypt.encrypt(pins);
        // console.log(encrypted)
        // setCombinedpin(encrypted);
    };
    const togglemodal = ()=>{
        setshowsuccess(!showsuccess)
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(postState)
        postchangepin(
             postState,
            ()=>{ 
               setshowsuccess(true)
            // setPending(true);
            }
        //,  ()=>{ 
        //     // console.log(errorHandler)
        //     // console.log("now go to error..", error);
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
                            <p className="setpin-head">Old Pin</p>
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
                            <p className="setpin-head">New Pin</p>
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
                        <div className="setpin-field-2">
                            <p className="setpin-head">Confirm Pin</p>
                            <div className="setpin-container">
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onChange={onChangepin9}
                                        ref={atmpin8}
                                        autoFocus
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onChange={onChangepin10}
                                        ref={atmpin9}
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onChange={onChangepin11}
                                        ref={atmpin10}
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onBlur={onChangepin12}
                                        ref={atmpin11}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="setpin-button">
                            <Link to='/forgot'>
                                <button className='reset'>Forgot Pin</button>
                            </Link><br></br>
                            {!passwordsMatch && (
                                <p style={{ color: "black", fontFamily: "Poppins", textAlign: "center", marginTop: "20px"}}>Passwords do not match!</p>
                            )}
                            {passwordsMatch && (
                                <button className='transfer-button' onClick={handlesubmit}>Submit</button>
                            )}
                        </div>
                        {showsuccess && (<SuccessModal message={success} togglemodal={togglemodal}/>)}
                    </div>
        //         </div>
        //     </div>
        // </div>
    );
}

const mapStateToProps = state => {
    return{
        success:state?.changepin?.data?.message,
        profile: state.getprofile.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postchangepin: (postdata, history) => {
            dispatch(postchangepin(postdata, history));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChangePin);