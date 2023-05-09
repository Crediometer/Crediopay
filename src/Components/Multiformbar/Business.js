import Textfield from '../Formfield/Textfield';
import styles from '../../Pages/Registration/Registration.module.css';
import './MultiStepProgressBar.css'
import Inputfield from '../Formfield/Inputfield';
import Selectfield from '../Formfield/Selectfield';
import { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import {FiAlertTriangle} from 'react-icons/fi'
import {AiOutlineFile} from 'react-icons/ai'
const Business = () => {
    const[filename, setFilename] = useState('')
    const[image, setImage] = useState(null)
    const[filename2, setFilename2] = useState('')
    const[image2, setImage2] = useState(null)
    const options = [{name:'name'},{name:'games'}]
    return ( 
        <form>
            <p className="businessHead">Enter verification details for at least one of the directors</p>
            <div className={styles.form2}>
                <Inputfield
                    label="BVN"
                    type="text"
                    placeholder="Enter BVN" 
                />
            </div>
            <div className={styles.form2}>
                <Inputfield
                    label="Rc Number"
                    type="text"
                    placeholder="Enter Rc Number" 
                />
            </div>
            <div className={styles.form2}>
                <Inputfield
                    label="Mermat"
                    type="text"
                    placeholder="Enter Mermat" 
                />
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
            <p className="businessHead businessHead-2">Details of second director (optional)</p>
            <div className={styles.form2}>
                <Inputfield
                    label="BVN"
                    type="text"
                    placeholder="Enter BVN" 
                />
            </div>
            <div className={styles.form2}>
                <Inputfield
                    label="Rc Number"
                    type="text"
                    placeholder="Enter Rc Number" 
                />
            </div>
            <div className={styles.form2}>
                <Inputfield
                    label="Mermat"
                    type="text"
                    placeholder="Enter Mermat" 
                />
            </div>
            <div className={styles.form2}>
               <p className='addimage'>Add image</p>
               <div className="files">
                <div className="filedisplay">
                    {filename2!=''?(
                        <p className='select-filename'><span onClick={()=>{setFilename2(""); setImage2(null)}}><FaTimesCircle/> Remove File</span>{filename}</p>
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
        </form>
    );
}
 
export default Business;