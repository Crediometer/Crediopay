import Textfield from '../Formfield/Textfield';
import styles from '../../Pages/Registration/Registration.module.css';
import './MultiStepProgressBar.css'
import Inputfield from '../Formfield/Inputfield';
import Selectfield from '../Formfield/Selectfield';
import { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
const Personal = () => {
    const[filename, setFilename] = useState('')
    const[image, setImage] = useState(null)
    const options = [{name:'name'},{name:'games'}]
    return ( 
        <form>
            <div className={styles.form2}>
                <Textfield
                    label="What does Text Venture do ? *"
                    placeholder="Enter text"
                />
                <p className='formtext'>You are advise to write a detailed text about your business for example Fresh Foods is a local grocery store committed to providing high-quality, locally-sourced produce, meats, and specialty products. Conveniently located downtown with competitive pricing.</p>
            </div>
            <div className={styles.form2}>
                <Inputfield
                    label="Phone"
                    type="text"
                    placeholder="Enter phone number" 
                />
            </div>
            <div className={styles.form2}>
                <Inputfield
                    label="Business Email"
                    type="text"
                    placeholder="Enter Email" 
                />
            </div>
            <div className={styles.form2}>
                <Inputfield
                    label="Support Email"
                    type="text"
                    placeholder="Enter Email" 
                />
            </div>
            <div className={styles.form2}>
                <Selectfield
                    label="Where is your business located *"
                    options={options}
                />
            </div>
            <div className={styles.form2}>
                <Inputfield
                    label=""
                    type="text"
                    placeholder="Address Line 1" 
                />
            </div>
            <div className={styles.form2}>
                <Inputfield
                    label=""
                    type="text"
                    placeholder="Address Line 2(optional)" 
                />
            </div>
            <div className={styles.form2}>
                <Inputfield
                    label="Link to website"
                    type="text"
                    placeholder="Enter Link" 
                />
            </div>
            <div className={styles.form2}>
                <div className='selectfile' onClick={()=>document.querySelector(".upload").click()}>
                    <input type="file" className='upload' hidden
                        onChange={({target: {files}})=>{
                            files[0] && setFilename(files[0].name)
                            if(files){
                                setImage(URL.createObjectURL(files[0]))
                            }
                        }}
                    ></input>
                    <p>+ Change File</p>
                </div>
                {filename!=''?(
                    <p className='select-filename'><span onClick={()=>{setFilename(""); setImage(null)}}><FaTimesCircle/> Remove File</span>{filename}</p>
                    ):
                    <div></div>
                }
            </div>
            <p className='file-warning'>recommended size is around 200-300 pixels wide and 50-100 pixels high logo should be  in a high-quality file format such as a PNG, SVG or JPG</p>
        </form>
    );
}
 
export default Personal;