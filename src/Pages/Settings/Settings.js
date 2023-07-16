import { useEffect, useState } from 'react';
import Key from './Key';
import Set from './Set';
import './Settings.css'
import styles from '../Account/Main.module.css'
import Overview from './Overview';
import Document from './Document';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import SetPin from './SetPin/SetPin';
import ChangePin from './SetPin/ChangePin';
import { connect } from 'react-redux';
import { fetchgetprofile } from '../../Redux/Getprofile/GetprofileAction';
import SuccessModal from '../../Components/Modal/SuccessModal';
const Settings = ({fetchgetprofile, pinCode}) => {
    const [show, setShow] = useState(1);
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
    const handleSetting = ()=>{
        setShow(1)
    }
    const handleOverview = ()=>{
        setShow(3)
    }
    const handleDocument = ()=>{
        setShow(4)
    }
    const handleKey = ()=>{
        setShow(5)
    }
    const handlePin = ()=>{
        setShow(6)
    }
    useEffect(() => {
        fetchgetprofile()

    }, []);
    return ( 
        <div className="test">
            <div className="left">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} toggle={toggleSidebar}/>
            </div>
            <div className="right">
                <Navbar toggle={toggleSidebar} mode={sidebar}/>
                <div className="content">
                    <div className="settings">
                        <div className="settings-top">
                            {/* <p onClick={handleOverview} className={show === 3 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Overview</p>
                            <p onClick={handleDocument} className={show === 4 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Documents</p> */}
                            <p  onClick={handleSetting} className={show === 1 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Settings</p>
                            <p  onClick={handleKey} className={show === 5 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Keys</p>
                            <p  onClick={handlePin} className={show === 6 ? `${styles.currentDesc} ${styles.desc}`: styles.desc}>Pins</p>
                        </div>
                        <div className="settings-body">
                            {/* { (show === 3) && <Overview/>}  
                            { (show === 4) && <Document/>}     */}
                            { (show === 1) && <Set/>}
                            { (show === 5) && <Key/>}      
                            { (show === 6) && (
                                <div>
                                    {(pinCode === "") ? (<SetPin/>) : (<ChangePin/>)}
                                </div>
                            )}         
                        </div>
                        
                    </div>
                    </div>
                    {/* <SuccessModal/> */}
          </div>
        </div>
    );
}
const mapStateToProps = state => {
    return{
        pinCode: state.getprofile.data.pinCode
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchgetprofile: () => {
            dispatch(fetchgetprofile());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);