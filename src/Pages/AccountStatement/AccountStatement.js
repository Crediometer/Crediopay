import { IoCopy } from 'react-icons/io5';
import { connect } from "react-redux";
import styles from '../Dashboard/Dashboard.module.css'
import MoonLoader from "react-spinners/MoonLoader";
import { FormattedNumber, IntlProvider } from "react-intl";
import './AccountStatement.css';
import copy from 'copy-to-clipboard'
import TransactionTable from '../../Components/Table/TransactionTable';
import { useEffect, useState } from 'react';
import { FaChevronDown, FaFileExcel, FaFilePdf, FaSearch } from 'react-icons/fa';
import { BsCalendar2Week } from 'react-icons/bs';
import { fetchstatement } from '../../Redux/Statement/StatementAction';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import DashboardTable from '../../Components/Table/DashboardTable';
import { fetchvault } from '../../Redux/Vault/VaultAction';
import { fetchgetprofile } from '../../Redux/Getprofile/GetprofileAction';

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
}
const AccountStatement = ({fetchstatement, profile, cid, fetchgetprofile, fetchvault}) => {
    const [loader, setLoader] = useState(false)
    const [filter, setFilter] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [isActive, setIsActive] = useState(1);
    const [startDate, setstartdate] = useState(getDate())
    const [endDate, setenddate] =useState('')
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpen2, setDropdownOpen2] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedBox, setSelectedBox] = useState(1);
    const [sidebar, setSidebar] = useState(false);
    const [query, setQuery] = useState("")
    const [money, setmoney] = useState("All")
    const [success, setsuccess] = useState("All")
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const handlefilter = ()=>{
        setFilter(!filter)
    }
    const handleDropdown = () =>{
        setDropdown(!dropdown)
    }
    const handlestartdate = (e)=>{
        const value = e.target.value
       
        setstartdate(value)
    }
    const handlestatus = (id)=>{
        setsuccess(id)
    }
    const handlemode = (e)=>{
        const value = e.target.value
    
        let num = parseInt(value)
        setmoney(value)
    }
    const handleenddate = (e)=>{
        const value = e.target.value
        setenddate(value)
    }
    const handlepdf = () =>{
        fetchstatement('pdf',startDate, endDate,()=>{
            setLoader(false)
        })
        setLoader(true)
    }
    const handleexcel = () =>{
        fetchstatement('excel',startDate, endDate, ()=>{
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
    const myClassName = `${styles.status} ${isActive ? styles.active : ''}`;
    useEffect(() => {
        fetchvault(cid)
        fetchgetprofile()
    }, [cid]);
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
                                    <input
                                        type='text'
                                        placeholder='Start Date'
                                        className='transferfield'
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => {(e.target.type = "text");}}
                                        onChange={handlestartdate}
                                        required
                                    ></input>
                                </div>
                                <div className="statement-date">
                                    <input
                                        type='text'
                                        placeholder='End Date'
                                        className='transferfield'
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => {(e.target.type = "text");}}
                                        onChange={handleenddate}
                                        required
                                    ></input>
                                </div>
                                <p className='filtershow' onClick={handlefilter}>{filter ? "- Add Filter": "+ Add Filter"}</p>
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
                                <div className={styles.categoryLeftMobile}>
                                    <div className={styles.categoryLeft}>
                                        <div className={styles.dropdownButton} onClick={toggleDropdown}>
                                            <p>{selectedOption}</p>
                                            <FaChevronDown/>
                                        </div>
                                        {isDropdownOpen && (
                                            <div className={styles.categoryLeftInner}>
                                                <div className={` ${selectedBox === 2 ? 'selected-box' : ''}`} onClick={()=>{handleClick(); handleOptionClick('All'); handlestatus("All")}}>
                                                    <p>All</p>
                                                </div>
                                                <div className={myClassName} onClick={()=>{handleClick(); handleOptionClick('Successful'); handlestatus(0)}}>
                                                    <p>Successful</p>
                                                </div>
                                                <div className={styles.status} onClick={()=>{handleClick(); handleOptionClick('Failed'); handlestatus("1")}}>
                                                    <p>Failed</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.categoryLeftDesktop}>
                                    <div className={styles.categoryLeft}>
                                            <div className={`${styles.status} ${isActive === 1 ? styles.active : ''}`} onClick={()=>{handleClick(1); handleOptionClick('All'); handlestatus("All")}}>
                                                <p>All</p>
                                            </div>
                                            <div className={`${styles.status} ${isActive === 2 ? styles.active : ''}`} onClick={()=>{handleClick(2); handleOptionClick('Successful');  handlestatus("0")}}>
                                                <p>Successful</p>
                                            </div>
                                            <div className={`${styles.status} ${isActive === 4 ? styles.active : ''}`} onClick={()=>{handleClick(4); handleOptionClick('Failed');  handlestatus("1")}}>
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
                                <DashboardTable search={query} money={money} status={success}/>
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
        cid: state?.getprofile?.data?.client?._id,
        statement: state.statement,
        profile: state?.vault?.data?.data?.mainAccount
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchgetprofile: () => dispatch(fetchgetprofile()),
        fetchvault: (id) => dispatch(fetchvault(id)),
        fetchstatement: (type,endDate, startDate, loader) => dispatch(fetchstatement(type,endDate, startDate, loader)),
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(AccountStatement);