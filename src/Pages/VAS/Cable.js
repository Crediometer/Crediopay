import { useEffect, useRef, useState } from 'react'
import JSEncrypt from 'jsencrypt';
import consts from '../../Pages/keys/const'
import { connect } from 'react-redux'
import { FormattedNumber, IntlProvider } from "react-intl";
import { RiContactsBookFill } from 'react-icons/ri'
import { FaChevronDown, FaChevronLeft, FaSearch, FaTimes } from 'react-icons/fa'
import LottieAnimation from '../../Lotties'
import preloader from '../../Assets/preloader.json'
import loader from '../../Assets/loading.json'
import { fetchvasproduct, postvascable, postvasverify } from '../../Redux/Vas/VasAction'
import Errormodal from '../../Components/Modal/Errormodal';
import SuccessModal2 from '../../Components/Modal/SuccessModal2';
import { fetchgetprofile } from '../../Redux/Getprofile/GetprofileAction';
import { fetchvault } from '../../Redux/Vault/VaultAction';
import LoadingModal from '../../Components/Modal/LoadingModal';
const Cable = ({
    loading, 
    loading2, 
    data, 
    fetchvasproduct, 
    product, 
    postvasverify, 
    verify, 
    verifycable,
    postvascable, 
    submitting,
    error, 
    success, cid,vault, fetchgetprofile,fetchvault, name, loading3
}) => {
    const [count, setcount] = useState(1)
    const [selectImage, setSelectImage] = useState(null)
    const [showBank, setShowBank] = useState(false);
    const [showBank2, setShowBank2] = useState(false);
    const [selectBank, setSelectBank]  = useState("DSTV")
    const [selectBank2, setSelectBank2]  = useState("See available bundles")
    const [number, setNumber] = useState("")
    const [amounts, setamount] = useState("")
    const [serviceid, setServiceid]= useState("")
    const [nameState, setNameState]= useState({})
    const [postState, setPostState] = useState({})
    const [bundle, setBundle] = useState("")
    const [showamount, setShowamount] = useState(false)
    const [showsuccess, setshowsuccess] = useState(false)
    const [showerror, setshowerror] = useState(false)
    const [verifycable2, setverifycable] = useState('')
    const handleShow =()=>{
        setShowBank(!showBank)
    }
    const handleShow2 =()=>{
        setShowBank2(!showBank2)
    }
    const handleSelectedImage = (option) => {
        setSelectImage(option)
    };
    const handleSelectedBank = (option) => {
        setSelectBank(option)
    };
    const handleSelectedBank2 = (option) => {
        setSelectBank2(option)
    };
    const handleCategory = (id) => {
        fetchvasproduct(id)
        setServiceid(id)
        setNameState({...nameState, ...{serviceCategoryId:id}})
        setPostState({ ...postState, ...{ serviceCategoryId:id } });
    };
    const handleNumber = (e)=>{
        const value = e.target.value;
        setNumber(value);
        setNameState({...nameState, ...{entityNumber: number}})
        setPostState({ ...postState, ...{entityNumber: number, cardNumber: number} });
    }
    const handleAmount = (e) =>{
        const vaule = e.target.value;
        let num = parseInt(vaule)
        setamount(num)
        console.log(amounts)
        setPostState({ ...postState, ...{ bundleCode: bundle, amount: amounts} });
    }
    const handleBundle = (id, am) =>{
        setBundle(id)
        console.log(bundle)
        console.log(id)
        if(id == 'TOP_UP'){
            setShowamount(true)
        }else{
            setPostState({ ...postState, ...{ bundleCode: id , amount: am} });
        }
        
    }
    const togglemodal = ()=>{
        setshowerror(!showerror)
    }
    useEffect(() => {
        if(number.length === 10 && serviceid !== ""){
            
            postvasverify(nameState)
        }
        setverifycable(verifycable)
    }, [number, serviceid,nameState, verifycable]);
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
        
        postvascable(
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
                <p className="airtime-back"><FaChevronLeft/></p>
                <p className="airtime-title">Cable TV</p>
            </div>
            {loading  ?( 
                <div className="vas-preloader">
                    <LottieAnimation data={preloader} />
                </div> 
            ):(
                <div>
                    {count === 1 ? (
                        <form>
                            <div className="form-group" onClick={handleShow2}>
                                <label>Service Provider</label>
                                <div className="form-group-inner">
                                    <p><img src={selectImage}></img>{selectBank}</p>
                                    <FaChevronDown/>
                                </div>
                            </div>
                            {showBank2 && (
                                <div className="vas-form-select">
                                    <div className="vas-form-select-header">
                                        <div className="vas-select-head">
                                            <p className="airtime-back"  onClick={handleShow2}><FaTimes/></p>
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
                                                <div className="vas-select-body-inner" onClick={() => {handleCategory(cable._id); handleSelectedBank(cable.identifier); handleSelectedImage(cable.logoUrl); handleShow2()}}>
                                                    <img src={cable.logoUrl}></img>
                                                    <p>{cable.identifier}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                            <div className="form-group">
                                <label>Decoder Number</label>
                                <div className="form-group-inner">
                                    <input
                                        type="text"
                                        placeholder='Enter decoder number'
                                        onChange={handleNumber}
                                        onBlur={handleNumber}
                                    ></input>
                                    {/* <RiContactsBookFill/> */}
                                </div>
                            </div>
                            <div className="form-group"  onClick={handleShow}>
                                <label>Available Bundles</label>
                                <div className="form-group-inner">
                                    <p>{selectBank2}</p>
                                    <FaChevronDown/>
                                </div>
                            </div>
                            {showBank && (
                                <div className="vas-form-select">
                                    <div className="vas-form-select-header">
                                        <div className="vas-select-head">
                                            <p className="airtime-back"  onClick={handleShow}><FaTimes/></p>
                                            <p className="airtime-title vas-select-title">CABLE PLAN</p>
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
                                    {loading2 ?( 
                                        <div className="vas-preloader">
                                            <LottieAnimation data={preloader} />
                                        </div> 
                                    ):(
                                    <div className="vas-select-body">
                                        {product.map((product)=>{
                                            return(
                                                <div className="vas-select-body-inner" onClick={() => {handleBundle(product.bundleCode, product.amount);  handleSelectedBank2(`${product.name} - ${product.amount}`); handleShow()}}>
                                                    <p>{product.name} - {product.amount}</p>
                                                </div>
                                            )
                                        })}
                                    </div>)}
                                </div>
                            )}
                            {showamount ? ( 
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
                            ): (null)}
                            {verify === 200 ? 
                                ( <button className='transfer-button' onClick={()=> setcount(count + 1)}><span>Continue</span></button>)
                            :
                                (<p className='airtime-title'>your Decoder Number is not correct</p>)
                            }
                           {loading3 && <LoadingModal/>}
                        </form>
                    ): null}
                    {count === 2 ? (
                        <form>
                            <div className="receiver-details">
                                <div className="preview-1 preview-upper">
                                <div className="preview-left">
                                    <p className="receipt-head vas-head">Operation</p>
                                    <p className="receipt-body-2 vas-body-2">Cable purchase</p>
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
                                    <p className="receipt-head vas-head">Card Number</p>
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
    
    return {
        loading: state.vascategory.loading,
        data: state?.vascategory?.data?.data,
        loading2: state.vasproduct.loading,
        product: state?.vasproduct?.data?.data,
        verify: state?.verifycable?.data?.statusCode,
        loading3: state?.verifycable?.loading,
        submitting: state.cable.loading,
        error: state.cable.error,
        success: state.cable.data.message,
        name: state?.getprofile?.data?.businessName,
        cid: state?.getprofile?.data?.client?._id,
        vault:state?.vault?.data?.data?.mainAccount,
        verifycable: state?.verifycable?.data?.data?.customernumber

        // data: state?.vas?.data?.data,
        // cid: state?.getprofile?.data?.client?._id,
        // vault:state?.vault?.data?.data?.mainAccount
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        // fetchvasservices: () => dispatch(fetchvasservices()),
        // fetchgetprofile: () => dispatch(fetchgetprofile()),
        // fetchvascategory: (id) => dispatch(fetchvascategory(id)),
        fetchgetprofile: () => dispatch(fetchgetprofile()),
        fetchvault: (id) => dispatch(fetchvault(id)),
        postvascable: (postState, history, errors) => dispatch(postvascable(postState, history, errors)),
        postvasverify: (nameState) => dispatch(postvasverify(nameState)),
        fetchvasproduct: (id) => dispatch(fetchvasproduct(id))
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Cable);