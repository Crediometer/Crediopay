import { IoCopy } from 'react-icons/io5';
import styles from '../Dashboard/Dashboard.module.css'
import './AccountStatement.css';
import TransactionTable from '../../Components/Table/TransactionTable';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BsCalendar2Week } from 'react-icons/bs';
const AccountStatement = () => {
    const [filter, setFilter] = useState(false)
    const [isActive, setIsActive] = useState(1);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedBox, setSelectedBox] = useState(1);

    const handlefilter = ()=>{
        setFilter(!filter)
    }
    const handleClick2 = (boxId) => {
      setSelectedBox(boxId);
    };
    const handleClick = id => {
        // 👇️ toggle isActive state on click
        setIsActive(id);
    };
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setDropdownOpen(false);
    };
    return ( 
        <div className="accountstatement">
            <p className="statement-topic">Request statement </p>
            <div className="statement-head">
                <div className="statement-head-left">
                    <div className="statement-date">
                        <BsCalendar2Week/>
                        <input
                            type='text'
                            placeholder='January 2023'
                            className='transferfield'
                            onFocus={(e) => (e.target.type = "month")}
                            onBlur={(e) => {(e.target.type = "text");}}
                            required
                        ></input>
                    </div>
                    <p className='filtershow' onClick={handlefilter}>+ Add Filter</p>
                </div>
                <div className="statement-head-right">
                    <button>Download statement</button>
                </div>
            </div>
            {filter && (
                <div className="statement-sub-head">
                    <div className="statement-sub-head-left">
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
                    <div className="statement-sub-head-center">
                        <div className='statement-filter'>
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
                    </div>
                    <div className="statement-sub-head-right">
                        <div className='categorySearch'>
                            <FaSearch/>
                            <input
                            type='text'
                            placeholder='find using ID'
                            ></input>
                        </div>
                    </div>
                </div>
            )}
            <div className="statement-body">
                <div className="statement-account">
                    <div className="statement-account-left">
                        <h1>Test Ventures</h1>
                        <p className='trans-phone'>09083736822 <span><IoCopy/></span></p>
                    </div>
                    <div className="statement-account-right">
                        <p className='available statement-available'>Available Balance</p>
                        <p className="main-balance">N 68,485.26</p>
                    </div>
                </div>
                <div className="statement-table">
                    <TransactionTable/>
                </div>
            </div>
        </div>
    );
}
 
export default AccountStatement;