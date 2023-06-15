import { IoCopy } from 'react-icons/io5';
import { connect } from "react-redux";
import { fetchtransaction } from '../../Redux/Transaction/TransactionAction';
import styles from '../Dashboard/Dashboard.module.css'
import './Transaction.css'
import { useState } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import TransactionTable from '../../Components/Table/TransactionTable';
import {styled} from '@mui/material/styles'
import { makeStyles } from "@mui/styled-engine-sc";
import Pagination from '@mui/material/Pagination';
const StyledPagination = styled(Pagination)(({ theme }) => ({
    ul: {
        "& .Mui-selected": {
            backgroundColor: '#B11226',
            color: 'white'
        }   
      }
}));
const Transaction = ({fetchtransaction}) => {
    const [isActive, setIsActive] = useState(1);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedBox, setSelectedBox] = useState(1);

    const handleClick2 = (boxId) => {
      setSelectedBox(boxId);
    };
  
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
        <div className="transaction">
            <div className="transaction-top">
                <div className={`transaction-top-left ${selectedBox === 3 ? 'selected-box' : ''}`}
                onClick={() => handleClick2(3)}
                >
                    <h1>Test Ventures</h1>
                    <div className="current">
                        <p>Current</p>
                    </div>
                    <p className='trans-phone'>09083736822 <span><IoCopy/></span></p>
                </div>
                <div className={`transaction-top-center ${selectedBox === 1 ? 'selected-box' : ''}`}
                onClick={() => handleClick2(1)}
                >
                    <div className="trans-center-top">
                        <p className='available'>Available Balance</p>
                        <div className="main">
                            <p>Main Acc</p>
                        </div>
                    </div>
                    <p className="main-balance">N 68,485.26</p>
                </div>
                <div className={`transaction-top-right ${selectedBox === 2 ? 'selected-box' : ''}`}
                   onClick={() => handleClick2(2)}
                >
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
                                    <div className={` ${selectedBox === 2 ? 'selected-box' : ''}`} onClick={()=>{handleClick(); handleOptionClick('All');}}>
                                        <p>All</p>
                                    </div>
                                    <div className={myClassName} onClick={()=>{handleClick(); handleOptionClick('Successful');}}>
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
                    <div className='categoryRight'>
                        <select>
                            <optgroup>
                                <option>Money In</option>
                                <option>Money Out</option>
                            </optgroup>
                        </select>
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
                <div className="main-footer">
                    <div className="main-footer-left">
                        <p>Show results</p>
                        <div className="main-select">
                            <select>
                                <optgroup>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="main-footer-right">
                        <StyledPagination count={1}/>  
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
      recent: state.recenttransaction,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchtransaction: () => dispatch(fetchtransaction()),
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Transaction);