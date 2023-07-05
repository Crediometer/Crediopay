import { FaChevronRight, FaPlus, FaTrash } from "react-icons/fa";
import { connect } from "react-redux";
import {Switch} from "antd";
import './Set.css';
import DirectorModal from "../../Components/Modal/DirectorModal";
import { useState } from "react";
import { putsetting } from "../../Redux/Settings/SettingsAction";
import { getprofileReducer } from "../../Redux/Getprofile/GetprofileReducer";
import { Link } from "react-router-dom";
const Set = ({putsetting, error, loading, getprofile}) => {
    const [modal, setModal] = useState(false);
    const [emailmonthly, setemailmonthly] = useState(getprofile?.emailMonthly)
    const [updateState, setUpdateState] = useState({});
    const [email, setemail] = useState(getprofile?.email)
    const [smsMonthly, setsmsmonthly] = useState(getprofile?.smsMonthly)
    const [sms, setsms] = useState(getprofile?.sms)
    const handleModal = ()=>{
        setModal(!modal)
    }
    const handleemailmonthly = async (checked) => {
        setemailmonthly(checked) // update state with new value
        console.log(emailmonthly)
        // setUpdateState({ ...{emailMonthly: emailmonthly}})
        try {
            putsetting({emailMonthly: emailmonthly})    
        } catch (error) {
            console.error(error);
        }
    };
    const handleemail = async (checked) => {
        setemail(checked) // update state with new value
        // setUpdateState({ ...{email: email}})
        console.log(email)
        try {
            putsetting({email:email})    
        } catch (error) {
            console.error(error);
        }
    };
    const handlesmsmonthly = async (checked) => {
        setsmsmonthly(checked) // update state with new value
        console.log(smsMonthly)
        try {
            putsetting({smsMonthly: smsMonthly})    
        } catch (error) {
            console.error(error);
        }
    };
    const handlesms = async (checked) => {
        setsms(checked) // update state with new value
        console.log(sms)
        try {
            putsetting({sms:sms})    
        } catch (error) {
            console.error(error);
        }
    };
    return ( 
        <div className="set">
            <div className="directors">
                <div className="director-top">
                    <p>Directors/Users </p>
                    <button onClick={handleModal}><FaPlus/>Add</button>
                </div>
                <div className="director-body">
                    <div className="director">
                        <p className="director-name">Test Venture/Rasheed Raji</p>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                    <div className="director">
                        <p className="director-name">Test Venture/Rasheed Raji</p>
                        <div className="delete">
                            <FaTrash/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="set-settings">
                <p className="set-head">Set account notification settings</p>
                <div className="set-body">
                    <div className="set-setting">
                        <div className="set-setting-text">
                            <p className="set-text-head">Email Monthly Notification </p>
                            <p className="set-text-body">Enable monthly email notifications.</p>
                        </div>
                        <div className="switch">
                            <Switch
                                checked={emailmonthly}
                                onChange={handleemailmonthly}
                            />
                        </div>
                    </div>
                    <div className="set-setting">
                        <div className="set-setting-text">
                            <p className="set-text-head">Email Notification </p>
                            <p className="set-text-body">Enable email notifications for account statement.</p>
                        </div>
                        <div className="switch">
                            <Switch
                                checked={email}
                                onChange={handleemail}
                            />
                        </div>
                    </div>
                    <div className="set-setting">
                        <div className="set-setting-text">
                            <p className="set-text-head">SMS Notification </p>
                            <p className="set-text-body">Enable SMS notifications.</p>
                        </div>
                        <div className="switch">
                            <Switch
                                checked={sms}
                                onChange={handlesms}
                            />
                        </div>
                    </div>
                    <div className="set-setting">
                        <div className="set-setting-text">
                            <p className="set-text-head">SMS Monthly Notification </p>
                            <p className="set-text-body">Enable monthly SMS notifications.</p>
                        </div>
                        <div className="switch">
                            <Switch
                                checked={smsMonthly}
                                onChange={handlesmsmonthly}
                            />
                        </div>
                    </div>
                    <Link to="/changepin">
                        <div className="set-setting">
                            <div className="set-setting-text">
                                <p className="set-text-head">Pin</p>
                                <p className="set-text-body">Set your Pin or Change your Pin.</p>
                            </div>
                            <div className="switch">
                                <FaChevronRight/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {modal && (
                <DirectorModal togglemodal={handleModal}/>
            )}
        </div>
    );
}
const mapStoreToProps = (state) => {
    return {
        error: state.setting.error,
        loading: state.setting.loading,
        data: state.setting.data,
        getprofile: state?.getprofile?.data
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        putsetting: (setting) => dispatch(putsetting(setting))
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Set);