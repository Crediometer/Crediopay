import mtn from '../../Assets/mtn.png'
import glo from '../../Assets/glo.png'
import mobile from '../../Assets/9mobile.png'
import airtel from '../../Assets/airtel.png'
import JSEncrypt from 'jsencrypt';
import consts from '../../Pages/keys/const'
import { connect } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { RiContactsBookFill } from 'react-icons/ri'
import { FormattedNumber, IntlProvider } from "react-intl";
import { FaChevronDown, FaChevronLeft, FaSearch, FaTimes } from 'react-icons/fa'
import LottieAnimation from '../../Lotties'
import preloader from '../../Assets/preloader.json'
import loader from '../../Assets/loading.json'
import { fetchvasproduct, fetchvasservices, postvasdata } from '../../Redux/Vas/VasAction'
import Errormodal from '../../Components/Modal/Errormodal';
import SuccessModal2 from '../../Components/Modal/SuccessModal2';
import { fetchgetprofile } from '../../Redux/Getprofile/GetprofileAction';
import { fetchvault } from '../../Redux/Vault/VaultAction';
const Data = ({loading,loading2, data, fetchvasproduct, product, submitting, postvasdata,error, success, cid,vault, fetchgetprofile,fetchvault, name}) => {
    const [count, setcount] = useState(1)
    const [showBank, setShowBank] = useState(false);
    const [showBank2, setShowBank2] = useState(false);
    const [amounts, setAmount] = useState(null)
    const [selectImage, setSelectImage] = useState(null)
    const [selectBank2, setSelectBank2]  = useState("Select Network");
    const [selectBank, setSelectBank]  = useState("See Available Bundles")
    const [phoneNumber, setPhoneNumber]= useState("");
    const [postState, setPostState] = useState({});
    const [showsuccess, setshowsuccess] = useState(false)
    const [showerror, setshowerror] = useState(false)
    const handleShow =()=>{
        setShowBank(!showBank)
    }
    const handleShow2 =()=>{
        setShowBank2(!showBank2)
    }
    const handleSelectedImage = (option) => {
        setSelectImage(option)
    };
    const handleSelectedBank2 = (option) => {
        setSelectBank2(option)
    };
    const handleSelectedBank = (option) => {
        setSelectBank(option)
    };
    const handleCategory = (id) => {
        fetchvasproduct(id)
        setPostState({ ...postState, ...{ serviceCategoryId:id } });
    };
    const handleNumber = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        setPostState({ ...postState, ...{ phoneNumber } });
    };
    const handleAmounttt = (id) =>{
        let num = parseInt(id)
        setAmount(num)
       
    }
    const handlebundle = (id, am)=>{

        let num = parseInt(am)
        setPostState({ ...postState, ...{ bundleCode: id, amount: num} });
    }
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
       
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(pins);
        
        setPostState({ ...postState, ...{ pin: encrypted } });
    };
    const handlesubmit = (e)=>{
        e.preventDefault();
        
        postvasdata(
             postState,()=>{ 
               setshowsuccess(true)
            // setPending(true);
            },()=>{ 
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
                <p className="airtime-title">Data</p>
            </div>
            {loading  ?( 
                <div className="preloader vas-preloader">
                    <LottieAnimation data={preloader} />
                </div> 
            ):(
                <div>
                    {count === 1 ? (
                        <form method="POST">
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <div className="form-group-inner">
                                    <input
                                        type="text"
                                        placeholder='Enter phone number'
                                        onChange={handleNumber}
                                        onBlur={handleNumber}
                                    ></input>
                                    <RiContactsBookFill/>
                                </div>
                            </div>
                            <div className="form-group" onClick={handleShow2}>
                                <label>Service Provider</label>
                                <div className="form-group-inner">
                                    <p><img src={selectImage}></img>{selectBank2}</p>
                                    <FaChevronDown/>
                                </div>
                                {showBank2 && (
                                    <div className='vas-airtime'>
                                        {data.map((network)=>{
                                            return(
                                                <div className="airtime-network" onClick={() => {handleCategory(network._id); handleSelectedBank2(network.name); handleSelectedImage(network.logoUrl); handleShow2()}}>
                                                    <img src={network.logoUrl}></img>
                                                    <p>{network.name}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                            <div className="form-group"  onClick={handleShow}>
                                <label>Available Bundles</label>
                                <div className="form-group-inner">
                                    <p>{selectBank}</p>
                                    <FaChevronDown/>
                                </div>
                            </div>
                            {showBank && (
                                <div className="vas-form-select">
                                    <div className="vas-form-select-header">
                                        <div className="vas-select-head">
                                            <p className="airtime-back"  onClick={handleShow}><FaTimes/></p>
                                            <p className="airtime-title vas-select-title">Data Plan</p>
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
                                    {loading2  ?( 
                                        <div className="vas-preloader">
                                            <LottieAnimation data={preloader} />
                                        </div> 
                                    ):(
                                    <div className="vas-select-body">
                                        {product.map((product)=>{
                                            return(
                                                <div className="vas-select-body-inner" onClick={() => {handleSelectedBank(`${product.bundleCode} - ${product.validity} - N${product.amount}`); handleAmounttt(product.amount); handlebundle(product.bundleCode, product.amount); handleShow()}}>
                                                    <p>{product.bundleCode} - {product.validity} - N{product.amount}</p>
                                                </div>
                                            )
                                        })}
                                    </div>)}
                                </div>
                            )}
                            <div className="form-group">
                                <label>Amount</label>
                                <div className="form-group-inner">
                                    <input
                                        type="text"
                                        placeholder='₦ 2000'
                                        value={amounts}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                            <button className='transfer-button' onClick={()=> setcount(count + 1)}><span>Continue</span></button>
                        </form>
                    ): null}
                    {count === 2 ? (
                        <form>
                            <div className="receiver-details">
                                <div className="preview-1 preview-upper">
                                <div className="preview-left">
                                    <p className="receipt-head vas-head">Operation</p>
                                    <p className="receipt-body-2 vas-body-2">Data purchase</p>
                                </div>
                                <div className="preview-right">
                                    <p className="receipt-head vas-head">Amount</p>
                                    <p className="receipt-body-2 vas-body-2">
                                    N{amounts}
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
    
    return {
        loading: state.vascategory.loading,
        data: state?.vascategory?.data?.data,
        loading2: state.vasproduct.loading,
        product: state?.vasproduct.data.data,
        submitting: state.data.loading,
        error: state.data.error,
        success: state.data.data.message,
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
        // fetchgetprofile: () => dispatch(fetchgetprofile()),
        fetchgetprofile: () => dispatch(fetchgetprofile()),
        fetchvault: (id) => dispatch(fetchvault(id)),
        postvasdata: (poststate, history, errors) => dispatch(postvasdata(poststate, history, errors)),
        fetchvasproduct: (id) => dispatch(fetchvasproduct(id))
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Data);