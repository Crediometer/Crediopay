import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Textfield from '../Formfield/Textfield';
import styles from '../../Pages/Registration/Registration.module.css';
import styles2 from '../Formfield/style.module.css' 
import styles3 from '../../Pages/Activate/Activate.module.css'
import { faEye, faSpinner, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import './MultiStepProgressBar.css'
import { connect } from "react-redux";
import Inputfield from '../Formfield/Inputfield';
import Selectfield from '../Formfield/Selectfield';
import { useState } from 'react';
import styles4 from '../../Pages/Activate/Activate.module.css';
import Dojah from 'react-dojah'
import { FaTimesCircle } from 'react-icons/fa';
import { postpersonal } from '../../Redux/Activate/PersonalAction';
import Errormodal from "../Modal/Errormodal";
import ErrorBoundary from "../../ErrorBoundary";
const Personal = ({next, personal, error, loading}) => {
    const [nameState, setNameState] = useState({});
    const [businessDescriptions, setbusinessDescriptions] = useState("");
    const [phoneNumber, setphoneNumber] = useState("")
    const [businessEmail, setbusinessEmail] = useState("")
    const [supportEmail, setsupportEmail] = useState("")
    const [address1, setaddress1] = useState("")
    const [address2, setaddress2] = useState("")
    const [state, setstate] = useState("")
    const [websiteLink, setwebsiteLink] = useState("")
    const[filename, setFilename] = useState('')
    const[image, setImage] = useState(null)
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showerror, setshowerror] = useState(false)
    const handleDescription = (e) => {
        const value = e.target.value;
        setbusinessDescriptions(value);
        setNameState({ ...nameState, ...{ businessDescriptions } });
    };
    const handleNumber = (e) => {
        const value = e.target.value;
        setphoneNumber(value);
        setNameState({ ...nameState, ...{ phoneNumber } });
    };
    const handleEmail = (e) => {
        const value = e.target.value;
        setbusinessEmail(value);
        setNameState({ ...nameState, ...{ businessEmail } });
    };
    const handleSupportEmail = (e) => {
        const value = e.target.value;
        setsupportEmail(value);
        setNameState({ ...nameState, ...{ supportEmail } });
    };
    const handleState = (e) => {
        const value = e.target.value;
        setstate(value);
        setNameState({ ...nameState, ...{ state } });
    };
    const handleAddress1 = (e) => {
        const value = e.target.value;
        setaddress1(value);
        setNameState({ ...nameState, ...{ address1 } });
    };
    const handleAddress2 = (e) => {
        const value = e.target.value;
        setaddress2(value);
        setNameState({ ...nameState, ...{ address2 } });
    };
    const handleWebsite = (e) => {
        const value = e.target.value;
        setwebsiteLink(value);
        setNameState({ ...nameState, ...{ websiteLink } });
    };

    const togglemodal = ()=>{
        setshowerror(!showerror)
    }
    const handelClick = ()=>{
        next()
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await personal(nameState, ()=>{ 
            next();
            // setPending(true);
            }, ()=>{ 
                setErrorHandler(error)
                setshowerror(true)
                // setPending(false);
            });
        }catch(error){
            // setPending(false);
        }
    };



    return ( 
        <ErrorBoundary>
            <div>
                {/* <p className={styles4.activateBody}>Your Documents are Still in the Verification Process, You will be notiication through an SMS Message if it has been Verified</p> */}
                <p className={styles4.activateBody}>This is a sandbox server so ID verification process will not be carried out please press the contine button to proceed to the next step</p>
                <button className={styles3.activateButton} onClick={handelClick}>
                    {/* {loading ? (
                        <FontAwesomeIcon
                            className="spinner"
                            icon={faSpinner}
                        ></FontAwesomeIcon>
                        ): (  */}
                        <span>Continue</span>
                            {/* )}  */}
                </button>
                {showerror && (<Errormodal error={error} togglemodal={togglemodal}/>)}
            </div>
        </ErrorBoundary>
    );
}

const mapStoreToProps = (state) => {
    return {
        error: state.personal.error,
        loading: state.personal.loading
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        personal: (nameState, history, setErrorHandler) => {
            dispatch(postpersonal(nameState, history, setErrorHandler));
        }
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Personal);