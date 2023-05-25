import { IoCopy } from 'react-icons/io5';
import styles from '../Dashboard/Dashboard.module.css'
import './Transaction.css'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import TransactionTable from '../../Components/Table/TransactionTable';
const Transaction = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      // 👇️ toggle isActive state on click
      setIsActive(!isActive);
    };
    const myClassName = `${styles.status} ${isActive ? styles.active : ''}`;
    return ( 
        <div className="transaction">
            <div className="transaction-top">
                <div className="transaction-top-left">
                    <h1>Test Ventures</h1>
                    <div className="current">
                        <p>Current</p>
                    </div>
                    <p className='trans-phone'>09083736822 <span><IoCopy/></span></p>
                </div>
                <div className="transaction-top-center">
                    <div className="trans-center-top">
                        <p className='available'>Available Balance</p>
                        <div className="main">
                            <p>Main Acc</p>
                        </div>
                    </div>
                    <p className="main-balance">N 68,485.26</p>
                </div>
                <div className="transaction-top-right">
                    <div className="trans-center-top">
                        <p className='available'>Available Balance</p>
                        <div className="sub">
                            <p>Sub Acc</p>
                        </div>
                    </div>
                    <p className="main-balance">N 68,485.26</p>
                </div>
            </div>
            <p className='transaction-head'>Transactions</p>
            <div className="transaction-body">
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
                    <div className={styles.money}>
                        <select>
                            <optgroup>
                                <option>Money In</option>
                                <option>Money Out</option>
                            </optgroup>
                        </select>
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
                    <div className={styles.categorySearch}>
                        <FaSearch/>
                        <input
                        type='text'
                        placeholder='find using ID'
                        ></input>
                    </div>
                </div>
                <div className="transaction-table">
                    <TransactionTable/>
                </div>
            </div>
        </div>
    );
}
 
export default Transaction;