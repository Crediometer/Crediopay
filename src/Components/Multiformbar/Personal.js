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
import { FaTimesCircle } from 'react-icons/fa';
import { postpersonal } from '../../Redux/Activate/PersonalAction';
import Errormodal from "../Modal/Errormodal";
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
        <form onSubmit={handleSubmit} method="POST">
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>What does Text Venture do ? *</label>
                    <textarea 
                        className={styles2.fieldtext}
                        placeholder="Enter text"
                        onBlur={handleDescription}
                        onChange={handleDescription}
                    >
                    </textarea>
                </div>
                <p className='formtext'>You are advise to write a detailed text about your business for example Fresh Foods is a local grocery store committed to providing high-quality, locally-sourced produce, meats, and specialty products. Conveniently located downtown with competitive pricing.</p>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Phone</label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter phone number"
                        onBlur={handleNumber}
                        onChange={handleNumber}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Business Email</label>
                    <input 
                        className={styles2.fieldinput}
                        type="email"
                        placeholder="Enter Email" 
                        onBlur={handleEmail}
                        onChange={handleEmail}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Support Email</label>
                    <input 
                        className={styles2.fieldinput}
                        type="email"
                        placeholder="Enter Email" 
                        onBlur={handleSupportEmail}
                        onChange={handleSupportEmail}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Where is your business located *</label>
                    <select 
                        className={styles2.fieldinput}
                        onBlur={handleState}
                        onChange={handleState}
                    >
                        <optgroup>
                            <option>-options-</option>
                            <option value="ondo">Ondo</option>
                            <option value="oyo">Oyo</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Address Line 1"
                        onBlur={handleAddress1}
                        onChange={handleAddress1}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Address Line 2(optional)"
                        onBlur={handleAddress2}
                        onChange={handleAddress2}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Link to website</label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter Link"
                        onBlur={handleWebsite}
                        onChange={handleWebsite}
                    >
                    </input>
                </div>
            </div>
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
        </form>
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