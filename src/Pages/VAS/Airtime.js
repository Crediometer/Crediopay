import './Airtime.css'
import { connect } from 'react-redux';
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa';
import {RiContactsBookFill} from 'react-icons/ri';
import JSEncrypt from 'jsencrypt';
import consts from '../../Pages/keys/const'
import mtn from '../../Assets/mtn.png'
import glo from '../../Assets/glo.png'
import mobile from '../../Assets/9mobile.png'
import airtel from '../../Assets/airtel.png'
import { useEffect, useRef, useState } from 'react';
import { FormattedNumber, IntlProvider } from "react-intl";
import LottieAnimation from '../../Lotties';
import preloader from '../../Assets/preloader.json'
import loader from '../../Assets/loading.json'
import { postvasairtime } from '../../Redux/Vas/VasAction';
import Errormodal from '../../Components/Modal/Errormodal';
import SuccessModal from '../../Components/Modal/SuccessModal';
import SuccessModal2 from '../../Components/Modal/SuccessModal2';
import { fetchgetprofile } from '../../Redux/Getprofile/GetprofileAction';
import { fetchvault } from '../../Redux/Vault/VaultAction';
const Airtime = ({loading, data, submitting, postvasairtime, error, success, cid,vault, fetchgetprofile,fetchvault, name}) => {
    const [count, setcount] = useState(1);
    const [showBank, setShowBank] = useState(false);
    const [selectImage, setSelectImage] = useState(null)
    const [selectBank, setSelectBank]  = useState("Select Network");
    const [phoneNumber, setPhoneNumber]= useState("");
    const [amount, setAmount] = useState("")
    const [postState, setPostState] = useState({})
    const [showsuccess, setshowsuccess] = useState(false)
    const [showerror, setshowerror] = useState(false)
    const handleShow =()=>{
        setShowBank(!showBank)
    }
    const handleSelectedImage = (option) => {
        setSelectImage(option)
    };
    const handleSelectedBank = (option) => {
        setSelectBank(option)
    };
    const handleNumber = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        setPostState({ ...postState, ...{ phoneNumber } });
    };
    const handleAmount = (e) => {
        const value = e.target.value;
        let num = parseInt(value)
        setAmount(num);
        setPostState({ ...postState, ...{ amount: num } });
    };
    const handleCategory = (id) => {
        console.log(id)
        setPostState({ ...postState, ...{ serviceCategoryId:id } });
    };

    const togglemodal = ()=>{
        setshowerror(!showerror)
    }
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
        setPostState({ ...postState, ...{ pin: encrypted } });
    };
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(postState)
        postvasairtime(
            postState,()=>{ 
               setshowsuccess(true)
            // setPending(true);
            },()=>{ 
            // console.log(errorHandler)
            // console.log("now go to error..", error);
            // setErrorHandler(error)
                setshowerror(true)
            // setPending(false);
            }   
        )
    }

    useEffect(() => {
        fetchgetprofile();
        fetchvault(cid)
    }, [cid]);
    return ( 
        <div className="airtime">
            <div className="airtime-head">
                <button className="airtime-back" onClick={()=> setcount(count - 1)} disabled={count < 2}><FaChevronLeft/></button>
                <p className="airtime-title">Airtime</p>
            </div>
            {loading  ?( 
                <div className="preloader vas-preloader">
                    <LottieAnimation data={preloader} />
                </div> 
            ):(
                <div>
                    {count === 1 ? (
                        <form>
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <div className="form-group-inner">
                                    <input
                                        type="text"
                                        placeholder='Enter phone number'
                                        onChange={handleNumber}
                                        onBlur={handleNumber}
                                        required
                                    ></input>
                                    <RiContactsBookFill/>
                                </div>
                            </div>
                            <div className="form-group" onClick={handleShow}>
                                <label>Service Provider</label>
                                <div className="form-group-inner">
                                    <p><img src={selectImage}></img>{selectBank}</p>
                                    <FaChevronDown/>
                                </div>
                                {showBank && (
                                    <div className='vas-airtime'>
                                        {data.map((network)=>{
                                            return(
                                                <div className="airtime-network" onClick={() => {handleCategory(network._id);  handleSelectedBank(network.name); handleSelectedImage(network.logoUrl); handleShow()}}>
                                                    <img src={network.logoUrl}></img>
                                                    <p>{network.name}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Amount</label>
                                <div className="form-group-inner">
                                    <input
                                        type="text"
                                        placeholder='₦ 2000'
                                        onChange={handleAmount}
                                        onBlur={handleAmount }
                                        required
                                    ></input>
                                </div>
                            </div>
                            <button className='transfer-button' onClick={()=> setcount(count + 1)}><span>Continue</span></button>
                        </form>
                    ): null}
                    {count === 2 ? (
                        <div>
                            <div className="receiver-details">
                                <div className="preview-1 preview-upper">
                                <div className="preview-left">
                                    <p className="receipt-head vas-head">Operation</p>
                                    <p className="receipt-body-2 vas-body-2">Airtime purchase</p>
                                </div>
                                <div className="preview-right">
                                    <p className="receipt-head vas-head">Amount</p>
                                    <p className="receipt-body-2 vas-body-2">
                                    N{amount}
                                    </p>
                                </div>
                                </div>
                                <div className="preview-1">
                                <div className="preview-left">
                                    <p className="receipt-head vas-head">Phone Number</p>
                                    <p className="receipt-body-2 vas-body-2">
                                    {phoneNumber}
                                    </p>
                                </div>
                                <div className="preview-right">
                                    <p className="receipt-head vas-head">Commision</p>
                                    <p className="receipt-body-2 vas-body-2">N10.00</p>
                                </div>
                                </div>
                                <div className="preview-1">
                                <div className="preview-left">
                                    <p className="receipt-head vas-head">From Account</p>
                                    <p className="receipt-body-2 vas-body-2">
                                        {name}
                                    </p>
                                </div>
                                <div className="preview-right">
                                    <p className="receipt-head vas-head">Balance</p>
                                    <IntlProvider>
                                        {" "}
                                        <p className="receipt-body-2 vas-body-2">
                                        <FormattedNumber
                                            value={
                                                vault?.accountBalance
                                            }
                                            style="currency"
                                            currency="NGN"
                                        />
                                        </p>
                                    </IntlProvider>
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
                            {submitting ? (
                                <button className='transfer-button' disabled>
                                    <LottieAnimation data={loader}/>
                                </button>
                            ) : (
                                <button className='transfer-button' onClick={handlesubmit}><span>Continue</span></button>
                            )}
                        </div>
                    ): null}
                </div>
            )}
            {showerror && (<Errormodal error={error} togglemodal={togglemodal}/>)}
            {showsuccess && (<SuccessModal2 message={success} link="/dashboard"/>)}
        </div>
    );
}
const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
        loading: state.vascategory.loading,
        data: state?.vascategory?.data?.data,
        submitting: state.airtime.loading,
        error: state.airtime.error,
        success: state.airtime.data.message,
        name: state?.getprofile?.data?.businessName,
        cid: state?.getprofile?.data?.client?._id,
        vault:state?.vault?.data?.data?.mainAccount
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        postvasairtime: (poststate, history, errors) => dispatch(postvasairtime(poststate, history, errors)),
        // fetchvasservices: () => dispatch(fetchvasservices()),
        fetchgetprofile: () => dispatch(fetchgetprofile()),
        // fetchvascategory: (id) => dispatch(fetchvascategory(id)),
        fetchvault: (id) => dispatch(fetchvault(id))
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Airtime);