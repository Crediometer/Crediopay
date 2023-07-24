import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from './Sidebar.module.css'
import {BiLogOut} from 'react-icons/bi'
import { SidebarDetails } from "./SidebarDetails";
import classNames from 'classnames';
import { Link,NavLink, useLocation } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { fetchgetprofile } from "../../Redux/Getprofile/GetprofileAction";
import { fetchprofile } from "../../Redux/Profile/ProfileAction";
const Sidebar = ({Sidebar,toggle, fetchprofile, fetchgetprofile, profile}) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);
    function handleLinkClick(event, index) {
        event.preventDefault();
        setActiveLink(index);
    }
    let businessname = profile?.businessName
    console.log(businessname)
    const phoneNumber = profile?.phoneNumber
    const newphoneNumber = phoneNumber?.startsWith('+234') ? '0' + phoneNumber.slice(4) : phoneNumber;
    console.log(newphoneNumber)
    // const navLinkStyles = ({isActive}) => {

    // }
    useEffect(() => {
        fetchgetprofile()
    }, []);
    return ( 
        <div className={Sidebar?`${styles.sidebar} ${styles.sidebaropen}`: `${styles.sidebar}`}>
            <div className={styles.sidebarheader}>
                <h3 className={styles.businessname}>{businessname}</h3>
                <p className={styles.businessphone}>{newphoneNumber}</p>
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
                                        className={classNames(styles.navLink, { [styles.active]: location.pathname === val.link })}
                                        onClick={toggle}
                                        // onClick={(event) => handleLinkClick(event, index)}
                                        // className={activeLink === index ? 'active' : ''}
                                    >
                                            {val.icon}
                                        <p className={styles.addressName}>{val.title}</p>
                                    </Link>
                                </li>
                            )
                        })}
                        <li>
                            <a href="http://abbrefy.xyz/15e46d5"
                                className={classNames(styles.navLink, { [styles.active]: location.pathname === 'http://abbrefy.xyz/15e46d5' })}
                                onClick={toggle}
                                target="_blank"
                                // onClick={(event) => handleLinkClick(event, index)}
                                // className={activeLink === index ? 'active' : ''}
                            >
                                <BsPerson/>
                                <p className={styles.addressName}>Documentation</p>
                            </a>
                        </li>
                </nav>
            </section>
            <div className={styles.sidebarfooter}>
                <h3><span><BiLogOut/></span>Logout</h3>
            </div>
        </div>
    );
}

const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
      profile: state.getprofile.data
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchprofile: () => dispatch(fetchprofile()),
        fetchgetprofile: () => dispatch(fetchgetprofile()),
    };
};
 

export default connect(mapStoreToProps, mapDispatchToProps)(Sidebar);