import React, { useEffect, useState } from "react";
import '../../index.css'
import { connect } from "react-redux";
import { fetchanalytics, 
    fetchrecenttran,
    fetchsumtran
} from "../../Redux/Dashboard/DashboardAction";
import { fetchprofile } from "../../Redux/Profile/ProfileAction";
import styles from './Dashboard.module.css'
import {IoMdEyeOff} from 'react-icons/io'
import { IoCopy } from "react-icons/io5";
import LottieAnimation from '../../Lotties';
import preloader from '../../Assets/preloader.json'
import Graph from "../../Components/Graph/Graph";
import DashboardTable from "../../Components/Table/DashboardTable";
import Rightbar from "../../Components/Rightbar/Rightbar";
import { FaChevronDown } from "react-icons/fa";
import { fetchgetprofile } from "../../Redux/Getprofile/GetprofileAction";
const Dashboard = ({fetchanalytics, fetchrecenttran, fetchsumtran, fetchprofile, analytics, fetchgetprofile}) => {
    const [isActive, setIsActive] = useState(1);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All');

    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setDropdownOpen(false);
    };
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const handleClick = id => {
      // 👇️ toggle isActive state on click
      setIsActive(id);
    };
    useEffect(() => {
        
        fetchanalytics()
        fetchrecenttran()
        fetchsumtran()
        fetchgetprofile()
        fetchprofile()
    }, []);
    const myClassName = `${styles.status} ${isActive ? styles.active : ''}`;
    return ( 
        <div>
            {analytics.loading ?( 
                <div className="preloader">
                    <LottieAnimation lotti={preloader} height={150} width={150} />
                </div> 
            ):(
                <div className={styles.dashboard}>
                    <div className={styles.dashboardLeft}>
                        <div className={styles.dashboardCategory}>
                            <div className={styles.categoryLeftMobile}>
                                <div className={styles.categoryLeft}>
                                    <div className={styles.dropdownButton} onClick={toggleDropdown}>
                                        <p>{selectedOption}</p>
                                        <FaChevronDown/>
                                    </div>
                                    {isDropdownOpen && (
                                        <div className={styles.categoryLeftInner}>
                                            <div className={myClassName} onClick={()=>{handleClick(); handleOptionClick('All');}}>
                                                <p>All</p>
                                            </div>
                                            <div className={styles.status} onClick={()=>{handleClick(); handleOptionClick('Successful');}}>
                                                <p>Successful</p>
                                            </div>
                                            <div className={styles.status} onClick={()=>{handleClick(); handleOptionClick('Pending');}}>
                                                <p>Pending</p>
                                            </div>
                                            <div className={styles.status} onClick={()=>{handleClick(); handleOptionClick('Failed');}}>
                                                <p>Failed</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.categoryLeftDesktop}>
                                <div className={styles.categoryLeft}>
                                        <div className={`${styles.status} ${isActive === 1 ? styles.active : ''}`} onClick={()=>{handleClick(1); handleOptionClick('All');}}>
                                            <p>All</p>
                                        </div>
                                        <div className={`${styles.status} ${isActive === 2 ? styles.active : ''}`} onClick={()=>{handleClick(2); handleOptionClick('Successful');}}>
                                            <p>Successful</p>
                                        </div>
                                        <div className={`${styles.status} ${isActive === 3 ? styles.active : ''}`} onClick={()=>{handleClick(3); handleOptionClick('Pending');}}>
                                            <p>Pending</p>
                                        </div>
                                        <div className={`${styles.status} ${isActive === 4 ? styles.active : ''}`} onClick={()=>{handleClick(4); handleOptionClick('Failed');}}>
                                            <p>Failed</p>
                                        </div>
                                </div>
                            </div>
                            <div className={styles.categoryRight}>
                                <input
                                    type='text'
                                    placeholder='Start Date'
                                    className='transferfield'
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => {(e.target.type = "text");}}
                                    required
                                ></input>
                                <input
                                    type='text'
                                    placeholder='End Date'
                                    className='transferfield'
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => {(e.target.type = "text");}}
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className={styles.dashboardBalance}>
                            <div>
                                <p className={styles.balance}>Balance</p>
                                <div className={styles.balanceContainer}>
                                    <p>NGN 0,000.000</p>
                                </div>
                            </div>
                            <div className={styles.balanceIcon}>
                                <IoMdEyeOff/>
                                <IoCopy/>
                            </div>
                        </div>
                        <div className={styles.graphContainer}>
                            <p className={styles.businessAnalytics}>Business Analytics</p>
                            <div className={styles.graphInner}>
                                <Graph/>
                            </div>
                        </div>
                        <div className={styles.tableContainer}>
                            <DashboardTable/>
                        </div>
                    </div>
                    <div className={styles.dashboardRight}>
                        <Rightbar/>
                    </div>
                </div>
            ) }
            </div>
    );
}
const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
      analytics: state.dashboard,
      recent: state.recenttransaction,
      sum: state.sumtransaction,
      profile: state.profile
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchprofile: () => dispatch(fetchprofile()),
        fetchanalytics: () => dispatch(fetchanalytics()),
        fetchrecenttran: () => dispatch(fetchrecenttran()),
        fetchsumtran: () => dispatch(fetchsumtran()),
        fetchgetprofile: () => dispatch(fetchgetprofile()),
    };
};
 
export default connect(mapStoreToProps, mapDispatchToProps)(Dashboard);