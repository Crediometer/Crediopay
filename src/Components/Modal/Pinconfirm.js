import { useEffect, useRef, useState } from 'react';
import { connect } from "react-redux";
import JSEncrypt from 'jsencrypt';
import consts from "../../Pages/keys/const"
import './Pinconfirm.css'
import { fetchbankname, postTransfer, reqData } from '../../Redux/Transfer/BankAction';
const Pinconfirm = () => {
    const [combinedpin, setCombinedpin] = useState('');
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
        console.log(encrypted)
        setCombinedpin(encrypted);
    };
    return ( 
        <div className="modal-background">
            <div className="modal">
                <div className="receiver-details">
                    <div className="preview-1 preview-upper">
                    <div className="preview-left">
                        <p className="receipt-head">Bank Name</p>
                        {/* <p className="receipt-body-2">{getName()}</p> */}Sterling Bank
                    </div>
                    <div className="preview-right">
                        <p className="receipt-head">Amount</p>
                        <p className="receipt-body-2">
                            
                        </p>
                    </div>
                    </div>
                    <div className="preview-1">
                    <div className="preview-left">
                        <p className="receipt-head">Account Number</p>
                        <p className="receipt-body-2">
                            
                        </p>
                    </div>
                    <div className="preview-right">
                        <p className="receipt-head">Commision</p>
                        <p className="receipt-body-2">N10.00</p>
                    </div>
                    </div>
                    <div className="preview-1">
                    <div className="preview-left">
                        <p className="receipt-head">Account Name</p>
                        <p className="receipt-body-2">
                           
                        </p>
                    </div>
                    <div className="preview-right">
                        <p className="receipt-head">Balance</p>
                        <p className="receipt-body-2">N50.00</p>
                    </div>
                    </div>
                </div>
                <div className="field-container">
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
        </div>
    );
}

const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
    // bankData: state.bankname,
    nameData: state,
    // deposit: state.bankname.transferData,
    // loading: state.deposit.loading,
    // status: state?.deposit?.deposit?.status,
    // error: state?.deposit?.error,
    // message: state?.deposit?.deposit?.message,
    // errormessage: state?.deposit?.error?.data?.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchbankname: (nameState) => dispatch(fetchbankname(nameState)),
        reqData: (depositState) => {
            dispatch(reqData(depositState));
        },
        postTranser: (depositState, history, historyError)=>{
            dispatch(postTransfer(depositState, history, historyError))
        }
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Pinconfirm);