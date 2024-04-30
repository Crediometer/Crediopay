import React from "react";
import styles from './style.module.css'
const Textfield = ({label, placeholder}) => {
    return ( 
        <div className={styles.field}>
            <label className={styles.fieldlabel}>{label}</label>
            <textarea 
                className={styles.fieldtext}
                placeholder={placeholder}
            >
            </textarea>
        </div>
    );
}
 
export default Textfield;