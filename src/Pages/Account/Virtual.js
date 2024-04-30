import { useState } from "react";
import SubTable from "../../Components/Table/SubTable";
import styles from '../Account/Main.module.css'
import Paginations from "../../Components/Pagination/Pagination";

const Virtual = () => {
    const [show, setShow] = useState(1);
    const handleSetting = ()=>{
        setShow(1)
    }
    const handleOverview = ()=>{
        setShow(3)
    }
    const handleDocument = ()=>{
        setShow(4)
    }
    const handleKey = ()=>{
        setShow(5)
    }
    return ( 
        <div className="sub-con">
            <div className="settings-top virtual-top">
                <p  onClick={handleSetting} className={show === 1 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>All</p>
                <p  onClick={handleOverview} className={show === 3 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Paid</p>
                <p  onClick={handleDocument} className={show === 4 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Proposed</p>
            </div>
            <div className="settings-body">
                <SubTable/>
            </div>
            <Paginations/>
        </div>
    );
}
 
export default Virtual;