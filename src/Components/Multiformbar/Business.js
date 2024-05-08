import Textfield from '../Formfield/Textfield';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSpinner, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import styles from '../../Pages/Registration/Registration.module.css';
import styles2 from '../Formfield/style.module.css' 
import styles3 from '../../Pages/Activate/Activate.module.css'
import './MultiStepProgressBar.css'
import Inputfield from '../Formfield/Inputfield';
import Selectfield from '../Formfield/Selectfield';
import { useEffect, useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import {FiAlertTriangle} from 'react-icons/fi'
import {AiOutlineFile} from 'react-icons/ai'
import { postbusiness, postkyc } from '../../Redux/Activate/BusinessAction';
import LottieAnimation from '../../Lotties';
import loader from '../../Assets/loading.json'
import Errormodal from '../Modal/Errormodal';
import LoadingModal from '../Modal/LoadingModal';
// import DragandDropMermat from '../Drag-and-Drop/DragandDropMermat';
const Business = ({next, business, error, loading,kyc,kycload, kycerror}) => {
    const [nameState, setNameState] = useState({});
    const [formState, setFormState] = useState(null)
    const [postState, setPostState] = useState({});
    const[filename, setFilename] = useState('')
    const [file, setFile] = useState(null);
    const[image, setImage] = useState(null)
    const[filename2, setFilename2] = useState('')
    const[image2, setImage2] = useState(null)
    const [mermat, setMermat] = useState("");
    const [bvn, setbvn] = useState("");
    const [dob, setdob] = useState('');
    const [address1, setaddress1] = useState("")
    const [address2, setaddress2] = useState("")
    const [state, setstate] = useState("")
    const [show, setShow] = useState(false)
    const [showkyc, setshowkyc]= useState(false)
    const [websiteLink, setwebsiteLink] = useState("")
    // const [mermat, setmermat] = useState('');
    const [rcNumber, setrcNumber]= useState("");
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showerror, setshowerror] = useState(false)
    // const options = [{name:'name'},{name:'games'}]

    const handlebvn = (e) => {
        const value = e.target.value;
        setbvn(value);
        setNameState({ ...nameState, ...{ bvn } });
        setPostState({ ...postState, ...{ bvn } });
    };
    const handledob = (e) => {
        const value = e.target.value;
        setdob(value);
        setNameState({ ...nameState, ...{ dob } });
        setPostState({ ...postState, ...{ dob } });
    };
    // useEffect(() => {
    //     if (dob !== "" && bvn.length === 11) {
    //         kyc(postState, 
    //             ()=>{ 
    //                 setShow(true);
    //             }, ()=>{ 
    //                 setshowkyc(true);
    //             }
    //         )
    //         // postData(nameState);
    //         // setaccountName(name.data.accountName)
    //     }
        
    // }, [bvn, dob, postState]);
    const handlercnumber = (e) => {
        const value = e.target.value;
        setrcNumber(value);
        setNameState({ ...nameState, ...{ rcNumber } });
    };
    const handlemermat = (e) => {
        const value = e.target.value;
        setMermat(value);
        setNameState({ ...nameState, ...{ mermat } });
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
        setNameState({ ...nameState, ...{ email:address2 } });
    };
    const handleWebsite = (e) => {
        const value = e.target.value;
        setwebsiteLink(value);
        setNameState({ ...nameState, ...{ websiteLink } });
    };
    const updateMermat = (filedata) => {
        setFilename2(filedata);
    };
    const togglemodal = ()=>{
        setshowerror(!showerror)
    }
    const togglemodal2 = ()=>{
        setshowkyc(!showkyc)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('mermat',filename2);
        formData.append('bvn', bvn);
        formData.append('dob',dob);
        formData.append('rcNumber', rcNumber);
        formData.append('state', state);
        formData.append('address1', address1);
        formData.append('businessEmail', address2);
        formData.append('websiteLink', websiteLink);
        try{
            
            await business(formData, ()=>{ 
            next();
            // setPending(true);
            }, ()=>{ 
                setErrorHandler(error)
                setshowerror(true)
                // setPending(false);
            });
        }catch(error){
            // setPending(false)
        }
    };
    return ( 
        <form onSubmit={handleSubmit} method='post'>
            <p className="businessHead">Enter verification details for at least one of the directors</p>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Where is your business located <span>*</span></label>
                    <select 
                        className={styles2.fieldinput}
                        onBlur={handleState}
                        onChange={handleState}
                        required
                    >
                        <optgroup>
                        <option disabled selected>--Select State--</option>
                                    <option value="Abia">Abia</option>
                                    <option value="Adamawa">Adamawa</option>
                                    <option value="Akwa Ibom">Akwa Ibom</option>
                                    <option value="Anambra">Anambra</option>
                                    <option value="Bauchi">Bauchi</option>
                                    <option value="Bayelsa">Bayelsa</option>
                                    <option value="Benue">Benue</option>
                                    <option value="Borno">Borno</option>
                                    <option value="Cross River">Cross River</option>
                                    <option value="Delta">Delta</option>
                                    <option value="Ebonyi">Ebonyi</option>
                                    <option value="Edo">Edo</option>
                                    <option value="Ekiti">Ekiti</option>
                                    <option value="Enugu">Enugu</option>
                                    <option value="FCT">Federal Capital Territory</option>
                                    <option value="Gombe">Gombe</option>
                                    <option value="Imo">Imo</option>
                                    <option value="Jigawa">Jigawa</option>
                                    <option value="Kaduna">Kaduna</option>
                                    <option value="Kano">Kano</option>
                                    <option value="Katsina">Katsina</option>
                                    <option value="Kebbi">Kebbi</option>
                                    <option value="Kogi">Kogi</option>
                                    <option value="Kwara">Kwara</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Nasarawa">Nasarawa</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Ogun">Ogun</option>
                                    <option value="Ondo">Ondo</option>
                                    <option value="Osun">Osun</option>
                                    <option value="Oyo">Oyo</option>
                                    <option value="Plateau">Plateau</option>
                                    <option value="Rivers">Rivers</option>
                                    <option value="Sokoto">Sokoto</option>
                                    <option value="Taraba">Taraba</option>
                                    <option value="Yobe">Yobe</option>
                                    <option value="Zamfara">Zamfara</option>
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
                        required
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
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Email<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter your Email"
                        onBlur={handleAddress2}
                        onChange={handleAddress2}
                        required
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>BVN<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter BNV"
                        maxLength={11}
                        onBlur={handlebvn}
                        onChange={handlebvn}
                        required
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>DOB<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="date"
                        // placeholder="Enter Rc Number"
                        onBlur={handledob}
                        onChange={handledob}
                        required
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Rc Number<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter Rc Number"
                        onBlur={handlercnumber}
                        required
                        onChange={handlercnumber}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
               <p className='addimage'>Mermat/Status Report<span>*</span></p>
               {/* <DragandDropMermat mermat={updateMermat}/> */}
               <div className="files">
                <div className="filedisplay">
                    {filename2!=''?(
                        <p className='select-filename'><span onClick={()=>{setFilename2(""); setImage2(null)}}><FaTimesCircle/>Remove File</span>{filename2.name}</p>
                        ):
                        <p><AiOutlineFile/> No file chosen</p>
                    }
                </div>
                <div className="filechose" onClick={()=>document.querySelector(".upload").click()}>
                    <input type="file" className='upload' hidden required
                        onChange={({target: {files}})=>{
                            files[0] && setFilename2(files[0])
                            if(files){
                                setImage2(URL.createObjectURL(files[0]))
                                // setNameState({ ...nameState, ...{ filename: image } });
                            }
                        }}
                        // onBlur={handlemermat}
                    ></input>
                    <p>Choose File</p>
                </div>
               </div>
               <p className='warning'><FiAlertTriangle/>Please choose the file under 5KB to upload!</p>
            </div>
            {/* <div className={styles.form2}>
               <p className='addimage'>Add image</p>
               <div className="files">
                <div className="filedisplay">
                    {filename!=''?(
                        <p className='select-filename'><span onClick={()=>{setFilename(""); setImage(null)}}><FaTimesCircle/> Remove File</span>{filename}</p>
                        ):
                        <p><AiOutlineFile/> No file chosen</p>
                    }
                </div>
                <div className="filechose" onClick={()=>document.querySelector(".upload").click()}>
                    <input type="file" className='upload' hidden
                        onChange={({target: {files}})=>{
                            files[0] && setFilename(files[0].name)
                            if(files){
                                setImage(URL.createObjectURL(files[0]))
                                // setNameState({ ...nameState, ...{ filename: image } });
                            }
                        }}
                    ></input>
                    <p>Choose File</p>
                </div>
               </div>
               <p className='warning'><FiAlertTriangle/>Please choose the file under 5KB to upload!</p>
            </div> */}
         
            <div>
                {loading ? (
                    <button className={styles3.activateButton} disabled>
                        <LottieAnimation data={loader}/>
                    </button>
                ) : (
                    <button className={styles3.activateButton}><span>Save</span></button>
                )}
            </div>
           
            {/* <button onClick={handleSubmit} className={styles3.activateButton}>
                {loading ? (
                    <FontAwesomeIcon
                        className="spinner"
                        icon={faSpinner}
                    ></FontAwesomeIcon>
                    ): ( 
                    <span>Save</span>
                        )} 
            </button> */}
            {kycload && (<LoadingModal/>)}
            {showkyc&& (<Errormodal error={kycerror} togglemodal={togglemodal2}/>)}
            {showerror && (<Errormodal error={error} togglemodal={togglemodal}/>)}
        </form>
    );
}
const mapStoreToProps = (state) => {
    return {
        error: state.business.error,
        loading: state.business.loading,
        kycload: state.kyc.loading,
        kycerror: state.kyc.error
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        business: (nameState, history, setErrorHandler) => {
            dispatch(postbusiness(nameState, history, setErrorHandler));
        },
        kyc: (nameState, history, errors) => {
            dispatch(postkyc(nameState, history, errors));
        }
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Business);