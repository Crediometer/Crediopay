import { IoCopy } from 'react-icons/io5';
import { connect } from "react-redux";
import styles from '../Dashboard/Dashboard.module.css'
import MoonLoader from "react-spinners/MoonLoader";
import { FormattedNumber, IntlProvider } from "react-intl";
import './AccountStatement.css';
import copy from 'copy-to-clipboard'
import TransactionTable from '../../Components/Table/TransactionTable';
import { useState } from 'react';
import { FaFileExcel, FaFilePdf, FaSearch } from 'react-icons/fa';
import { BsCalendar2Week } from 'react-icons/bs';
import { fetchstatement } from '../../Redux/Statement/StatementAction';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import DashboardTable from '../../Components/Table/DashboardTable';
const AccountStatement = ({fetchstatement, profile}) => {
    const [loader, setLoader] = useState(false)
    const [filter, setFilter] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [isActive, setIsActive] = useState(1);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedBox, setSelectedBox] = useState(1);
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };

    const handlefilter = ()=>{
        setFilter(!filter)
    }
    const handleDropdown = () =>{
        setDropdown(!dropdown)
    }
    const handlepdf = () =>{
        fetchstatement('pdf',()=>{
            setLoader(false)
        })
        setLoader(true)
    }
    const handleexcel = () =>{
        fetchstatement('excel', ()=>{
            setLoader(false)
        })
        setLoader(true)
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
    const handleCopy = ()=>{
        copy(profile?.accountNumber);
    }
    return ( 
        <div className="test">
            <div className="left">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} toggle={toggleSidebar}/>
            </div>
            <div className="right">
                <Navbar toggle={toggleSidebar} mode={sidebar}/>
                <div className="content">
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
                                <button onClick={handleDropdown}>Download statement</button>
                            </div>
                            {dropdown && (
                                <div className="download-dropdown">
                                    {(!loader) ? (
                                        <div>
                                            <div className="file-type" onClick={handlepdf}>
                                                <FaFilePdf/>
                                                <p>PDF</p>
                                            </div>
                                            <div className="file-type" onClick={handleexcel}>
                                                <FaFileExcel/>
                                                <p>Excel</p>
                                            </div>
                                        </div>
                                    ): (
                                        <MoonLoader
                                            color={"#B11226"}
                                            loading={loader}
                                            size={50}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                    )}
                                
                                </div>
                            )}
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
                                    <h1>{profile?.accountName}</h1>
                                    <p className='trans-phone statement-trans-phone'>{profile?.accountNumber} <span onClick={handleCopy}><IoCopy/></span></p>
                                </div>
                                <div className="statement-account-right">
                                    <p className='available statement-available'>Available Balance</p>
                                    <IntlProvider>
                                        {" "}
                                        <p className="main-balance statement-main-balance">
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
                            <div className="statement-table">
                                {/* <TransactionTable/> */}
                                <DashboardTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
      statement: state.statement,
      profile: state?.vault?.data?.data?.mainAccount
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchstatement: (type, loader) => dispatch(fetchstatement(type, loader)),
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(AccountStatement);