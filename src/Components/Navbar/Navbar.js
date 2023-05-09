import React from "react";
import styles from './Navbar.module.css'
import {IoPersonCircleOutline} from 'react-icons/io5'
import {FaChevronDown} from 'react-icons/fa'
const Navbar = () => {
    return ( 
        <div className={styles.navbar}>
            <div className={styles.navbarinner}>
                <div className={styles.navbarprofile}>
                    <div className={styles.profileicon}>
                        <div className={styles.personicon}><IoPersonCircleOutline/></div> 
                        <div className={styles.chevron}><FaChevronDown/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;