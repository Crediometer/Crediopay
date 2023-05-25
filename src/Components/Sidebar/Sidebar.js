import React, { useState } from "react";
import styles from './Sidebar.module.css'
import {BiLogOut} from 'react-icons/bi'
import { SidebarDetails } from "./SidebarDetails";
import { Link } from "react-router-dom";
const Sidebar = () => {
    
    const [activeLink, setActiveLink] = useState(null);
    function handleLinkClick(event, index) {
        event.preventDefault();
        setActiveLink(index);
    }

    return ( 
        <div className={styles.sidebar}>
            <div className={styles.sidebarheader}>
                <h3 className={styles.businessname}>Test Ventures</h3>
                <p className={styles.businessphone}>09083736822</p>
            </div>
            <section className={styles.links}>
                <nav>
                    {SidebarDetails.map((val, index)=>{
                            return(
                                <li 
                                    key={index}
                                    // onClick={closeSidebar} 
                                    // id={window.location.pathname == val.link ? 'active' : ''}
                                    // onClick={()=> {
                                    // window.location.pathname = val.link
                                    // }}
                                    >

                                    <Link to={val.link}
                                        // onClick={(event) => handleLinkClick(event, index)}
                                        className={activeLink === index ? 'active' : ''}
                                    >
                                        <div className={styles.sideicon}>
                                            <div className={styles.sideiconInner}>
                                                {val.icon}
                                            </div>
                                        </div>
                                        <p className={styles.addressName}>{val.title}</p>
                                    </Link>
                                </li>
                            )
                        })}
                </nav>
            </section>
            <div className={styles.sidebarfooter}>
                <h3><span><BiLogOut/></span>Logout</h3>
            </div>
        </div>
    );
}

export default Sidebar