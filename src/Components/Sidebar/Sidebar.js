import React from "react";
import styles from './Sidebar.module.css'
import {BiLogOut} from 'react-icons/bi'
const Sidebar = () => {
    return ( 
        <div className={styles.sidebar}>
            <div className={styles.sidebarheader}>
                <h3 className={styles.businessname}>Test Ventures</h3>
                <p className={styles.businessphone}>09083736822</p>
            </div>
            <div className={styles.sidebarfooter}>
                <h3><span><BiLogOut/></span>Logout</h3>
            </div>
        </div>
    );
}

export default Sidebar