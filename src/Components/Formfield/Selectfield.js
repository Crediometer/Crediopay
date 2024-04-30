import React from "react";
import styles from './style.module.css'

const Selectfield = ({label, options}) => {
    return ( 
        <div className={styles.field}>
            <label className={styles.fieldlabel}>{label}</label>
            <select className={styles.fieldinput}>
                <optgroup>
                    <option>-options-</option>
                    {options.map((option)=>{
                        <option>{option.name}</option>
                    })}
                </optgroup>
            </select>
        </div>
    );
}
 
export default Selectfield;