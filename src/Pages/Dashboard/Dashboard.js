import React, { useState } from "react";
import styles from './Dashboard.module.css'
import {IoMdEyeOff} from 'react-icons/io'
import { IoCopy } from "react-icons/io5";
import Graph from "../../Components/Graph/Graph";
import DashboardTable from "../../Components/Table/DashboardTable";
import Rightbar from "../../Components/Rightbar/Rightbar";
const Dashboard = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      // 👇️ toggle isActive state on click
      setIsActive(!isActive);
    };
    const myClassName = `${styles.status} ${isActive ? styles.active : ''}`;
    return ( 
        <div className={styles.dashboard}>
            <div className={styles.dashboardLeft}>
                <div className={styles.dashboardCategory}>
                    <div className={styles.categoryLeft}>
                        <div className={myClassName} onClick={handleClick}>
                            <p>All</p>
                        </div>
                        <div className={styles.status}>
                            <p>Successful</p>
                        </div>
                        <div className={styles.status}>
                            <p>Pending</p>
                        </div>
                        <div className={styles.status}>
                            <p>Failed</p>
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