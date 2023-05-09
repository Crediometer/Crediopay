import styles from '../../Pages/Registration/Registration.module.css';
import './MultiStepProgressBar.css'
import Inputfield from '../Formfield/Inputfield';
import Selectfield from '../Formfield/Selectfield';
import { useState } from 'react';
const Verification = () => {
    const options = [{name:'name'},{name:'games'}]
    return ( 
        <form>
            <p className="businessHead">Enter verification details for at least one of the directors</p>
            <div className={styles.form2}>
                <Selectfield
                    label="Bank Account *"
                    options={options}
                />
            </div>
            <div className={styles.form2}>
                <Inputfield
                    label="Business Account Number  *"
                    type="text"
                    placeholder="-Account Number-" 
                />
            </div>
    </form>
    );
}
 
export default Verification;