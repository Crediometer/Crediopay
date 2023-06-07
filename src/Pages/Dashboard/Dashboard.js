import React, { useState } from "react";
import styles from './Dashboard.module.css'
import {IoMdEyeOff} from 'react-icons/io'
import { IoCopy } from "react-icons/io5";
import Graph from "../../Components/Graph/Graph";
import DashboardTable from "../../Components/Table/DashboardTable";
import Rightbar from "../../Components/Rightbar/Rightbar";
import { FaChevronDown } from "react-icons/fa";
const Dashboard = () => {
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
    const myClassName = `${styles.status} ${isActive ? styles.active : ''}`;
    return ( 
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
                        <select>
                            <optgroup>
                                <option>From</option>
                            </optgroup>
                        </select>
                        <select>
                            <optgroup>
                                <option>to</option>
                            </optgroup>
                        </select>
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
    );
}
 
export default Dashboard;