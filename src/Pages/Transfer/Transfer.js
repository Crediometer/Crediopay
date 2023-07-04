import { FaChevronDown, FaPiggyBank, FaTimes } from 'react-icons/fa';
import {Select, Switch} from 'antd'
import { connect } from "react-redux";
import {BsBank2} from 'react-icons/bs'
import credio from '../../logo.png'
import './Transfer.css'
import LottieAnimation from '../../Lotties';
import preloader from '../../Assets/preloader.json'
import Input from '../../Components/Inputfield/Input';
import { useEffect, useState } from 'react';
import { fetchbank, fetchbankname, postTransfer, reqData } from '../../Redux/Transfer/BankAction';
import Pinconfirm from '../../Components/Modal/Pinconfirm';
const Transfer = ({fetchbank, bank, fetchbankname, postTransfer, name}) => {
    const [showBank, setShowBank] = useState(false);
    const [selectBank, setSelectBank]  = useState("Select a Bank")
    const [nameState, setNameState] = useState({});
    const [accountNumber, setaccountNumber] = useState("");
    const [accountName, setaccountName] = useState('')
    const [nibssCode, setnibssCode] = useState(null);
    const [amount, setAmount] = useState("");
    const [narration, setnarration] = useState("");
    const [query, setQuery] = useState("")
    const debitAccountNumber = "0118462550";
    const saveBeneficiary = false;
    const [saveBeneficiaryForUs, setSaveBeneficiaryForUs] = useState(false);
    const [show, setShow] = useState(false)
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const handleClick = () => {
        setIsChecked(!isChecked);
    };
    const handleClick2 = () => {
        setIsChecked2(!isChecked2);
    };

    const handleShow =()=>{
        setShowBank(!showBank)
    }
    // const handleShow2 = () =>{
    //     setShow(!show)
    // }
    //HANDLE SELECTED BANK SHOW
    const handleSelectedBank = (option) => {
        setSelectBank(option)
    };
    // HANDLE FOR ACCOUNT NUMBER
    const handleNumber = (e) => {
        // handleFetchData();
        const value = e.target.value;
        console.log(value);
        setaccountNumber(value);
        setNameState({ ...nameState, ...{ accountNumber } });
    };
    // HANDLE FOR BANK SELECT
    const handleBank = (value) => {
        setnibssCode(value);
        console.log(value);
        setNameState({ ...nameState, ...{ nibssCode: value } });
    };
     // HANDLE FOR AMOUNT
    const handleAmount = (e) => {
        const value = e.target.value;
        let num = parseInt(value)
        setAmount(num);
    };
     // HANDLE FOR COMMENT
     const handleComment = (e) => {
        const value = e.target.value;
        setnarration(value);
    };
    useEffect(() => {
        if (nibssCode !== "" && accountNumber.length === 10) {
            console.log(nameState)
            fetchbankname(nameState);
            setaccountName(name.data.accountName)
        }
        fetchbank();
    }, [nibssCode, accountNumber, nameState]);
      //HANDLE TO SUBMIT TRANSACTION
    const handleSubmit = (e) => {
        e.preventDefault();
        reqData({
          nameEnquiryReference: name.data.sessionId,
          debitAccountNumber,
          beneficiaryAccountNumber: accountNumber,
          beneficiaryBankCode: nibssCode,
          beneficiaryAccountName: accountName,
          narration,
          amount,
          saveBeneficiary,
          saveBeneficiaryForUs,
        });
        setShow(!show)
        // setAmount('');
        // setaccountNumber('');
        // accountName = ""
        // setnibssCode('');
        // resetInput()
        // setnarration('');
        // history(`/confirm`);
    };
    return ( 
        <div className="transfer">
            <p className="transfer-head">Fund Transfer</p>
            <div className="transfer-body">
                <div className="transfer-inner">
                    <div className="transfer-to">
                        <p className='transfer-to-title'>Transfer To :</p>
                        <div className="transfer-to-inner">
                            <div className="to" onClick={handleClick}>
                                <p>Credio Account </p>
                                <div className="to-inner">
                                    <div className="to-image">
                                        <img src={credio}></img>
                                    </div>
                                    <div className="to-select">
                                        <input type="radio" checked={isChecked} onChange={handleClick} name="bank" value="credio"></input>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="to" onClick={handleClick}>
                                <p>Other Bank</p>
                                <div className="to-inner">
                                    <div className="to-image">
                                        <BsBank2/>
                                    </div>
                                    <div className="to-select">
                                        <input type="radio" checked={!isChecked} onChange={handleClick} name="bank" value="credio"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="transfer-cred">
                        {/* <div className="transfer-send">
                            <p>Sending Account </p>
                            <select>
                                <option>Sub Account</option>
                            </select>
                        </div> */}
                        <div className="transfer-account">
                            <div className="transfer-account-left">
                                <p className='account-left-head'>Test Ventures</p>
                                <p className='account-left-text'>09083736822</p>
                            </div>
                            <div className="transfer-account-right">
                                <div className="transfer-available">
                                    <p className='available-2'>Available Balance</p>
                                    <div className='sub-2'>
                                        <p>Sub Acc</p>
                                    </div>
                                </div>
                                <p className='balance-2'>N 68,485.26</p>
                            </div>
                        </div>
                    </div>
                    <div className="transfer-form">
                        <form>
                            {/* <LottieAnimation lotti={preloader} height={150} width={150} /> */}
                            <div className="form-1-outer">
                                <div className="form-1">
                                    <div className="input">
                                        <label className='form-1-label'>Beneficiary’s  Bank </label>
                                        <div className="form-1-select" onClick={handleShow}>
                                            <p>{selectBank}</p>
                                            <FaChevronDown/>
                                        </div>
                                    </div>
                                    {showBank && (
                                        <div className="bank-select">
                                            <div className="bank-select-top">
                                                <p>Select a Bank</p>
                                                <div className="select-cancel" onClick={handleShow}>
                                                    <FaTimes/>
                                                </div>
                                            </div>
                                            <div className="bank-select-search">
                                                <input type='text' placeholder='Search for bank' onChange={(e)=> setQuery(e.target.value)}></input>
                                            </div>
                                            <div className="bank-select-body">
                                            {bank.loading ? (
                                               <LottieAnimation lotti={preloader} height={150} width={150} /> 
                                            ):(
                                                <div>
                                                    {bank.data.filter(banks => banks.name.toLowerCase().includes(query)
                                                    ).map((bank)=>{
                                                        return(
                                                            <div className="banks" onClick={() => {handleBank(bank.bankCode); handleSelectedBank(bank.name); handleShow()}}>
                                                                <div className="bank-icon">
                                                                    <BsBank2/>
                                                                </div>
                                                                <p className="bank-name">{bank.name}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="form-1">
                                    <div className="input">
                                        <label className='form-1-label'>Beneficiary’s  Account Number </label>
                                        <input type="text" placeholder="0198604538" 
                                        onBlur={handleNumber}
                                        onChange={handleNumber}
                                        required
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-1">
                                    <div className="input">
                                        <label className='form-1-label'>Beneficiary’s Name </label>
                                        <input type="text" 
                                        placeholder="0198604538"
                                        value={name.data.accountName}
                                        disabled
                                        required
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="save-ben">
                                <p>save as beneficiary</p>
                                <div className="save-ben-switch">
                                    <Switch/>
                                </div>
                            </div>
                            <div className="form-1-outer">
                                <div className="form-2">
                                    <div className="input">
                                        <label>Amount</label>
                                        <input type="text" 
                                        placeholder="NGN 5,000"
                                        onBlur={handleAmount}
                                        onChange={handleAmount}
                                        required
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-2">
                                    <div className="input">
                                        <label>Narration</label>
                                        <input type="text"
                                         placeholder="e.g School Fees"
                                         onBlur={handleComment}
                                         onChange={handleComment}
                                         ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-button">
                                <button className='reset'>Reset</button><br></br>
                                <button className='transfer-button' onClick={(e)=>{handleSubmit(e)}}>Transfer</button>
                            </div>
                        </form>
                    </div>
                    {show && <Pinconfirm/>}
                </div>
            </div>
        </div>
    );
}

const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
      bank: state.bank,
      name: state.bankname,
      transfer: state.transfer,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchbank: () => dispatch(fetchbank()),
        fetchbankname: (nameState) => dispatch(fetchbankname(nameState)),
        postTransfer: (transferState) => dispatch(postTransfer(transferState)),
        reqData: (depositState) => {dispatch(reqData(depositState));},
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Transfer);