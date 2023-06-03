import { IoCopy } from 'react-icons/io5';
import styles from '../Dashboard/Dashboard.module.css'
import './Transaction.css'
import { useState } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import TransactionTable from '../../Components/Table/TransactionTable';
import Paginations from '../../Components/Pagination/Pagination';
const Transaction = () => {
    const [isActive, setIsActive] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All');

    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setDropdownOpen(false);
    };
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
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
                <div className='dashboardCategory'>
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
                    </div>
                    <div className='categoryRight'>
                            <select>
                                <optgroup>
                                    <option>Money In</option>
                                    <option>Money Out</option>
                                </optgroup>
                            </select>
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
                    <div className='categorySearch'>
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
                <Paginations/>
            </div>
        </div>
    );
}
 
export default Transaction;