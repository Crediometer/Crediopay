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
    const appID = "65c1594edbc15d0040b5c60a";

    /**
     *  This is your account public key
     *  (go to your dashboard at
     *  https://dojah.io/dashboard to
     *  retrieve it. You can also regenerate one)
     */
    const publicKey = "test_pk_hwps2TD34uPQZEM7nD6gVCFWI";
  
    /**
     *  This is the widget type you'd like to load
     *  (go to your dashboard at
     *  https://dojah.io/dashboard to enable different
     *  widget types)
     */
    const type = "custom";
  
    const config = {
        widget_id: "65e23a56dd3ad4003f2e5217" //this is generated from easyonboard 
    };
  
    /**
     *  These are the user's data to verify, options
     *  available to you possible options are:
     *  {first_name: STRING, last_name: STRING, dob: DATE STRING}
     *
     *  NOTE: Passing all the values will automatically skip
     *  the user-data page (thus the commented out `last_name`)
     */
    const userData = {
      first_name: "Aleriwa Precious", //Optional
    //   last_name: {$last_name}, //Optional
      dob: "2003-10-08", //YYYY-MM-DD Optional
      residence_country: 'NG', //Optional
      email: "aleriwaprecious70@gmail"//optional
    };
  
    /**
     *  These are the metadata options
     *  You can pass any values within the object
     */
    const metadata = {
      user_id: '121',
    };
   
  
    /**
     * @param {String} type
     * This method receives the type
     * The type can only be one of:
     * loading, begin, success, error, close
     * @param {String} data
     * This is the data from doja
     */
    const response = (type, data) => {
      console.log(type, data);
      if(type === 'success'){
      }else if(type === 'error'){
      }else if(type === 'close'){
      }else if(type === 'begin'){
      }else if(type === 'loading'){
      }
    }
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
            <Dojah
                response={response}
                appID={appID}
                publicKey={publicKey}
                type={type}
                config={config}
                userData={userData}
                metadata={metadata}
                />
                <button className={styles3.activateButton}>
                    {loading ? (
                        <FontAwesomeIcon
                            className="spinner"
                            icon={faSpinner}
                        ></FontAwesomeIcon>
                        ): ( 
                        <span>Save</span>
                            )} 
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