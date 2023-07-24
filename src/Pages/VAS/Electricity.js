import { useEffect, useRef, useState } from 'react'
import { connect } from "react-redux";
import { RiContactsBookFill } from 'react-icons/ri'
import { FormattedNumber, IntlProvider } from "react-intl";
import { FaChevronDown, FaChevronLeft, FaSearch, FaTimes } from 'react-icons/fa'
import LottieAnimation from '../../Lotties';
import preloader from '../../Assets/preloader.json'
import loader from '../../Assets/loading.json'
import { fetchvasproduct, postvasutility, postvasverify } from '../../Redux/Vas/VasAction';
import Errormodal from '../../Components/Modal/Errormodal';
import SuccessModal2 from '../../Components/Modal/SuccessModal2';
import { fetchgetprofile } from '../../Redux/Getprofile/GetprofileAction';
import { fetchvault } from '../../Redux/Vault/VaultAction';
const Electricity = ({
    loading, 
    data, 
    postvasverify,
    verify, 
    submitting, 
    postvasutility,
    error, 
    success, cid,vault, fetchgetprofile,fetchvault, name
}) => {
    const [count, setcount] = useState(1)
    const [selectImage, setSelectImage] = useState(null)
    const [showBank, setShowBank] = useState(false);
    const [selectBank, setSelectBank]  = useState("Select Biller")
    const [number, setNumber] = useState("")
    const [amount, setAmount] = useState("")
    const [serviceid, setServiceid]= useState("")
    const [nameState, setNameState]= useState({})
    const [postState, setPostState] = useState({})
    const [showsuccess, setshowsuccess] = useState(false)
    const [showerror, setshowerror] = useState(false)
    const handleShow =()=>{
        setShowBank(!showBank)
    }
    const handleSelectedBank = (option) => {
        setSelectBank(option)
    };
    const handleSelectedImage = (option) => {
        setSelectImage(option)
    };
    const handleCategory = (id) => {
        setServiceid(id)
        setNameState({...nameState, ...{serviceCategoryId:id}})
        setPostState({ ...postState, ...{ serviceCategoryId:id } });
    };
    const handleNumber = (e)=>{
        const value = e.target.value;
        setNumber(value);
        setNameState({...nameState, ...{entityNumber: number}})
        setPostState({ ...postState, ...{meterNumber: number } });
    }
    const handleAmount = (e) => {
        const value = e.target.value;
        let num = parseInt(value)
        setAmount(num);
        setPostState({ ...postState, ...{ amount: num } });
    };
    const togglemodal = ()=>{
        setshowerror(!showerror)
    }
    useEffect(() => {
        if(number.length === 10 && serviceid !== ""){
            console.log(nameState)
            postvasverify(nameState)
        }
    }, [number, serviceid,nameState]);
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
        // var encrypt = new JSEncrypt();
        // encrypt.setPublicKey(`${consts.pub_key}`);
        // var encrypted = encrypt.encrypt(pins);
        // console.log(encrypted)
        // setCombinedpin(encrypted);
    };

    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(postState)
        postvasutility(
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
                <p className="airtime-title">Utility</p>
            </div>
            {loading  ?( 
                <div className="preloader vas-preloader">
                    <LottieAnimation data={preloader} />
                </div> 
            ):(
                <div>
                    {count === 1 ? (
                        <form>
                            <div className="form-group"  onClick={handleShow}>
                                <label>Service Provider</label>
                                <div className="form-group-inner">
                                    <p><img src={selectImage}></img>{selectBank}</p>
                                    <FaChevronDown/>
                                </div>
                            </div>
                            {showBank && (
                                <div className="vas-form-select">
                                    <div className="vas-form-select-header">
                                        <div className="vas-select-head">
                                            <p className="airtime-back"  onClick={handleShow}><FaTimes/></p>
                                            <p className="airtime-title vas-select-title">Select Biller</p>
                                        </div>
                                        <div className="vas-select-search">
                                            <FaSearch/>
                                            <input
                                                type='text'
                                                placeholder='Search'
                                            >
                                            </input>
                                        </div>
                                    </div>
                                    <div className="vas-select-body">
                                        {data?.map((cable)=>{
                                            return(
                                                <div className="vas-select-body-inner" onClick={() => {handleCategory(cable._id); handleSelectedBank(cable.identifier); handleSelectedImage(cable.logoUrl); handleShow()}}>
                                                    <img src={cable.logoUrl}></img>
                                                    <p>{cable.identifier}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                            
                            <div className="form-group">
                                <label>Payment Type</label>
                                <div className="form-group-inner">
                                <select>
                                    <optgroup>
                                        <option>Postpaid</option>
                                        <option>Prepaid</option>
                                    </optgroup>
                                </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Meter Number</label>
                                <div className="form-group-inner">
                                    <input
                                        type="text"
                                        placeholder='Enter Meter number'
                                        onChange={handleNumber}
                                        onBlur={handleNumber}
                                    ></input>
                                    <RiContactsBookFill/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Amount</label>
                                <div className="form-group-inner">
                                    <input
                                        type="text"
                                        placeholder='₦ 2000'
                                        onChange={handleAmount}
                                        onBlur={handleAmount}
                                    ></input>
                                </div>
                            </div>
                            {verify === 200 ? 
                                ( <button className='transfer-button' onClick={()=> setcount(count + 1)}><span>Continue</span></button>)
                            :
                                (<p className='airtime-title'>your Decoder Number is not correct</p>)
                            }
                        </form>
                    ): null}
                    {count === 2 ? (
                        <form>
                            <div className="receiver-details">
                                <div className="preview-1 preview-upper">
                                <div className="preview-left">
                                    <p className="receipt-head vas-head">Operation</p>
                                    <p className="receipt-body-2 vas-body-2">Utility purchase</p>
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
                                    <p className="receipt-head vas-head">Meter Number</p>
                                    <p className="receipt-body-2 vas-body-2">
                                    {number}
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
                        </form>
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
        verify: state?.verifycable?.data?.statusCode,
        submitting: state.utility.loading,
        error: state.utility.error,
        success: state.utility.data.message,
        name: state?.getprofile?.data?.businessName,
        cid: state?.getprofile?.data?.client?._id,
        vault:state?.vault?.data?.data?.mainAccount
        // data: state?.vas?.data?.data,
        // cid: state?.getprofile?.data?.client?._id,
        // vault:state?.vault?.data?.data?.mainAccount
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        // fetchvasservices: () => dispatch(fetchvasservices()),
        fetchgetprofile: () => dispatch(fetchgetprofile()),
        fetchvault: (id) => dispatch(fetchvault(id)),
        postvasutility: (postState, history, errors) => dispatch(postvasutility(postState, history, errors)),
        postvasverify: (nameState) => dispatch(postvasverify(nameState)),
        fetchvasproduct: (id) => dispatch(fetchvasproduct(id))
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Electricity);