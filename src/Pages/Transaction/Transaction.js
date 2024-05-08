import { IoCopy } from 'react-icons/io5';
import { connect } from "react-redux";
import { FormattedNumber, IntlProvider } from "react-intl";
import { fetchtransaction } from '../../Redux/Transaction/TransactionAction';
import styles from '../Dashboard/Dashboard.module.css'
import './Transaction.css'
import copy from 'copy-to-clipboard'
import { useEffect, useState } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import TransactionTable from '../../Components/Table/TransactionTable';
import {styled} from '@mui/material/styles'
import { makeStyles } from "@mui/styled-engine-sc";
import Pagination from '@mui/material/Pagination';
import DashboardTable from '../../Components/Table/DashboardTable';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import { fetchgetprofile } from '../../Redux/Getprofile/GetprofileAction';
import { fetchvault } from '../../Redux/Vault/VaultAction';
const StyledPagination = styled(Pagination)(({ theme }) => ({
    ul: {
        "& .Mui-selected": {
            backgroundColor: '#B11226',
            color: 'white'
        }   
      }
}));
const Transaction = ({fetchtransaction, profile,fetchgetprofile, fetchvault, cid, transaction}) => {
    const [isActive, setIsActive] = useState(1);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedBox, setSelectedBox] = useState(1);
    const [sidebar, setSidebar] = useState(false);
    const [query, setQuery] = useState("")
    const [money, setmoney] = useState("All")
    const [success, setsuccess] = useState("All")
    const [startdate, setstartdate] = useState(null)
    const [enddate, setenddate] = useState(null)
    const [copied, setCopied] = useState(false)
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
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
    const handlestartdate = (e)=>{
       const value = e.target.value;
       setstartdate(value)
    }
    const handlenddate = (e)=>{
        const value = e.target.value;
        setenddate(value)
     }
    const handleClick = id => {
      // 👇️ toggle isActive state on click
      setIsActive(id);
    };
    const handleCopy = ()=>{
        copy(profile?.accountNumber);
        setCopied(true)
    }
    const handlemode = (e)=>{
        const value = e.target.value
        let num = parseInt(value)
        setmoney(value)
    }
    const handlestatus = (id)=>{
        setsuccess(id)
    }
    useEffect(() => {
        fetchtransaction()
        fetchvault(cid)
        fetchgetprofile()
    }, [cid]);
    useEffect(() => {
        let timeoutId;
    
        if (copied) {
          timeoutId = setTimeout(() => {
            setCopied(false);
          }, 500); // 1 seconds
        }
    
        return () => {
          clearTimeout(timeoutId);
        };
    }, [copied]);
    const myClassName = `${styles.status} ${isActive ? styles.active : ''}`;
    return ( 
        <div className="test">
            <div className="left">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} toggle={toggleSidebar}/>
            </div>
            <div className="right">
                <Navbar toggle={toggleSidebar} mode={sidebar}/>
                <div className="content">
                    <div className="transaction">
                        <div className="transaction-top">
                            <div className={`transaction-top-left ${selectedBox === 3 ? 'selected-box' : ''}`}
                            // onClick={() => handleClick2(3)}
                            >
                                <h1>{profile?.accountName}</h1>
                                <div className="current">
                                    <p>Current</p>
                                </div>
                                <p className='trans-phone'>{profile?.accountNumber}{copied ? (<span className='copied'>Copied</span>): (<span onClick={handleCopy}><IoCopy/></span>)}</p>
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
                                <IntlProvider>
                                    {" "}
                                    <p className="main-balance">
                                    <FormattedNumber
                                        value={
                                            profile?.accountBalance
                                        }
                                        style="currency"
                                        currency="NGN"
                                    />
                                    </p>
                                </IntlProvider>
                            </div>
                            <div className={`transaction-top-right ${selectedBox === 2 ? 'selected-box' : ''}`}
                            // onClick={() => handleClick2(2)}
                            >
                                <div className="trans-center-top">
                                    <p className='available'>Available Balance</p>
                                    <div className="sub">
                                        <p>Main Acc</p>
                                    </div>
                                </div>
                                <IntlProvider>
                                    {" "}
                                    <p className="main-balance">
                                    <FormattedNumber
                                        value={
                                            profile?.accountBalance
                                        }
                                        style="currency"
                                        currency="NGN"
                                    />
                                    </p>
                                </IntlProvider>
                            </div>
                        </div>
                        <p className='transaction-head'>Transactions</p>
                        <div className="transaction-body">
                            <div className='dashboardCategory'>
                                <div className="categoryLeftMobile">
                                    <div className="categoryLeft">
                                        <div className={styles.dropdownButton} onClick={toggleDropdown}>
                                            <p>{selectedOption}</p>
                                            <FaChevronDown/>
                                        </div>
                                        {isDropdownOpen && (
                                            <div className={styles.categoryLeftInner}>
                                                <div className={` ${selectedBox === 2 ? 'selected-box' : ''}`} onClick={()=>{handleClick(); handleOptionClick('All'); handlestatus("All");}}>
                                                    <p>All</p>
                                                </div>
                                                <div className={myClassName} onClick={()=>{handleClick(); handleOptionClick('Successful'); handlestatus("0");}}>
                                                    <p>Successful</p>
                                                </div>
                                                {/* <div className={styles.status} onClick={()=>{handleClick(); handleOptionClick('Pending');}}>
                                                    <p>Pending</p>
                                                </div> */}
                                                <div className={styles.status} onClick={()=>{handleClick(); handleOptionClick('Failed'); handlestatus("1")}}>
                                                    <p>Failed</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.categoryLeftDesktop}>
                                    <div className={styles.categoryLeft}>
                                            <div className={`${styles.status} ${isActive === 1 ? styles.active : ''}`} onClick={()=>{handleClick(1); handleOptionClick('All'); handlestatus('All')}}>
                                                <p>All</p>
                                            </div>
                                            <div className={`${styles.status} ${isActive === 2 ? styles.active : ''}`} onClick={()=>{handleClick(2); handleOptionClick('Successful'); handlestatus("0")}}>
                                                <p>Successful</p>
                                            </div>
                                            {/* <div className={`${styles.status} ${isActive === 3 ? styles.active : ''}`} onClick={()=>{handleClick(3); handleOptionClick('Pending');}}>
                                                <p>Pending</p>
                                            </div> */}
                                            <div className={`${styles.status} ${isActive === 4 ? styles.active : ''}`} onClick={()=>{handleClick(4); handleOptionClick('Failed'); handlestatus("1")}}>
                                                <p>Failed</p>
                                            </div>
                                    </div>
                                </div>
                                <div className='categoryRight'>
                                    <select onChange={handlemode}>
                                        <optgroup>
                                            <option value='All'>All</option>
                                            <option value='1'>Money In</option>
                                            <option value="0">Money Out</option>
                                        </optgroup>
                                    </select>
                                    {/* <input
                                        type='text'
                                        placeholder='Start Date'
                                        className='transferfield'
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => {(e.target.type = "text");}}
                                        onChange={handlestartdate}
                                        required
                                    ></input>
                                    <input
                                        type='text'
                                        placeholder='End Date'
                                        className='transferfield'
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => {(e.target.type = "text");}}
                                        onChange={handlenddate}
                                        required
                                    ></input> */}
                                </div>
                                <div className='categorySearch'>
                                    <FaSearch/>
                                    <input
                                    type='text'
                                    placeholder='find using ID'
                                    onChange={(e)=> setQuery(e.target.value)}
                                    ></input>
                                </div>
                            </div>
                            <div className="transaction-table">
                               
                                {/* <TransactionTable/> */}
                                <DashboardTable search={query} money={money} status={success} start={startdate} end={enddate}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    return {     
      recent: state.recenttransaction,
      transaction: state.transaction,
      cid: state?.getprofile?.data?.client?._id,
      profile: state?.vault?.data?.data?.mainAccount
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchtransaction: () => dispatch(fetchtransaction()),
        fetchgetprofile: () => dispatch(fetchgetprofile()),
        fetchvault: (id) => dispatch(fetchvault(id))
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Transaction);