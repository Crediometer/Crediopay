import Textfield from '../Formfield/Textfield';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSpinner, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from '../../Pages/Registration/Registration.module.css';
import styles2 from '../Formfield/style.module.css' 
import styles3 from '../../Pages/Activate/Activate.module.css'
import './MultiStepProgressBar.css'
import Inputfield from '../Formfield/Inputfield';
import Selectfield from '../Formfield/Selectfield';
import { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import {FiAlertTriangle} from 'react-icons/fi'
import {AiOutlineFile} from 'react-icons/ai'
const Business = ({next}) => {
    const [nameState, setNameState] = useState({});
    const[filename, setFilename] = useState('')
    const[image, setImage] = useState(null)
    const[filename2, setFilename2] = useState('')
    const[image2, setImage2] = useState(null)
    const [mermat, setMermat] = useState("");
    const [bvn, setbvn] = useState("");
    const [dob, setdob] = useState('');
    const [rcNumber, setrcNumber]= useState("");
    // const options = [{name:'name'},{name:'games'}]

    const handlebvn = (e) => {
        const value = e.target.value;
        setbvn(value);
        setNameState({ ...nameState, ...{ bvn } });
    };
    const handledob = (e) => {
        const value = e.target.value;
        setdob(value);
        setNameState({ ...nameState, ...{ dob } });
    };
    const handlercnumber = (e) => {
        const value = e.target.value;
        setrcNumber(value);
        setNameState({ ...nameState, ...{ rcNumber } });
    };
    return ( 
        <form>
            <p className="businessHead">Enter verification details for at least one of the directors</p>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>BVN</label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter BNV"
                        onBlur={handlebvn}
                        onChange={handlebvn}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>DOB</label>
                    <input 
                        className={styles2.fieldinput}
                        type="date"
                        // placeholder="Enter Rc Number"
                        onBlur={handledob}
                        onChange={handledob}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Rc Number</label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter Rc Number"
                        onBlur={handlercnumber}
                        onChange={handlercnumber}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
               <p className='addimage'>Mermat</p>
               <div className="files">
                <div className="filedisplay">
                    {filename2!=''?(
                        <p className='select-filename'><span onClick={()=>{setFilename2(""); setImage2(null)}}><FaTimesCircle/> Remove File</span>{filename2}</p>
                        ):
                        <p><AiOutlineFile/> No file chosen</p>
                    }
                </div>
                <div className="filechose" onClick={()=>document.querySelector(".upload").click()}>
                    <input type="file" className='upload' hidden
                        onChange={({target: {files}})=>{
                            files[0] && setFilename2(files[0].name)
                            if(files){
                                setImage2(URL.createObjectURL(files[0]))
                            }
                        }}
                    ></input>
                    <p>Choose File</p>
                </div>
               </div>
               <p className='warning'><FiAlertTriangle/>Please choose the file under 5KB to upload!</p>
            </div>
            <div className={styles.form2}>
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
                            }
                        }}
                    ></input>
                    <p>Choose File</p>
                </div>
               </div>
               <p className='warning'><FiAlertTriangle/>Please choose the file under 5KB to upload!</p>
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
        </form>
    );
}
 
export default Business;