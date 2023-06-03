import React from "react";
import styles from './Navbar.module.css'
import {IoPersonCircleOutline} from 'react-icons/io5'
import {FaChevronDown} from 'react-icons/fa'
import {HiOutlineBars3BottomLeft} from 'react-icons/hi2'
import {IoNotificationsOutline} from 'react-icons/io5' 
const Navbar = ({toggle}) => {
    return ( 
        <div className={styles.navbar}>
            <div className={styles.navbarinner}>
                <div className={styles.navbarBar} onClick={toggle}>
                    <HiOutlineBars3BottomLeft/>
                </div>
                <div className={styles.navbarprofile}>
                    <div className={styles.profileicon}>
                        <div className={styles.chevron}><IoNotificationsOutline/></div>
                        <div className={styles.personicon}><IoPersonCircleOutline/></div> 
                        <div className={styles.chevron}><FaChevronDown/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;