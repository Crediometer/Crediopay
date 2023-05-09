import React from "react";
import styles from './style.module.css'
const Inputfield = ({label, type, placeholder}) => {
    return ( 
        <div className={styles.field}>
            <label className={styles.fieldlabel}>{label}</label>
            <input 
                className={styles.fieldinput}
                type={type}
                placeholder={placeholder}
            >
            </input>
        </div>
    );
}
 
export default Inputfield;