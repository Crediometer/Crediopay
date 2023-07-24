import React, { useState } from 'react';
import {connect} from 'react-redux'
import styles from './Registration.module.css';
import { useNavigate } from 'react-router-dom';
import styles2 from '../../Components/Formfield/style.module.css'
import Inputfield from '../../Components/Formfield/Inputfield';
import Selectfield from '../../Components/Formfield/Selectfield';
import Textfield from '../../Components/Formfield/Textfield';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import { postbusinesspartner } from '../../Redux/BusinessPartner/BusinessAction';
import Errormodal from '../../Components/Modal/Errormodal';
import LottieAnimation from '../../Lotties';
import loader from "../../Assets/loading.json";
const options = [{name:'name'},{name:'games'}];

const Registration = ({profile, postbusinesspartner, error, loading}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [sidebar, setSidebar] = useState(false);
    const [postState, setPostState] = useState({})
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("");
    const [role, setRole] = useState("");
    const history = useNavigate();
    const [businessDescription, setBusinessDescription] = useState("")
    const [businessType, setBusinessType] = useState("")
    const [businessIndustry, setBusinessIndustry] = useState("")
    const [WorkerRange, setWorkerRange] = useState("")
    const [showerror, setshowerror] = useState(false)
    const phone = profile?.phoneNumber;
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setPostState({ ...postState, ...{businessType: option} });
    };
    const handleFirstname = (e) => {
        const value = e.target.value;
        console.log(value);
        setFirstName(value);
        setPostState({ ...postState, ...{firstName: firstname} });
    };
    const handleLastname = (e) => {
        const value = e.target.value;
        console.log(value);
        setLastName(value);
        setPostState({ ...postState, ...{lastName: lastname, businessDescription: businessDescription} });
    };
    const handleRole = (e) => {
        const value = e.target.value;
        console.log(value);
        setRole(value);
        setPostState({ ...postState, ...{role: role} });
    };
    const handleBusinessDes = (e) => {
        const value = e.target.value;
        console.log(value);
        setBusinessDescription(value);
        setPostState({ ...postState, ...{businessDescription: businessDescription} });
    };
    const handleBusinessType = (e) => {
        const value = e.target.value;
        console.log(value);
        setBusinessType(value);
        setPostState({ ...postState, ...{businessType: businessType} });
    };
    const handleWorkerRange = (e) => {
        const value = e.target.value;
        console.log(value);
        setWorkerRange(value);
        setPostState({ ...postState, ...{workerRange: WorkerRange} });
    };
    const handleBusinessIndustry = (e) => {
        const value = e.target.value;
        console.log(value);
        setBusinessIndustry(value);
        setPostState({ ...postState, ...{businessIndustry: businessIndustry} });
    };
    const togglemodal = ()=>{
        setshowerror(!showerror)
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(postState)
        postbusinesspartner(
            postState, ()=>{ 
            console.log("now go to dashboard..");
            history(`/dashboard`);
            // setPending(true);
        },  ()=>{ 
            // console.log(errorHandler)
            // console.log("now go to error..", error);
            // setErrorHandler(error)
            setshowerror(true)
            // setPending(false);
        })
    }
    return (
        <div className="test">
            <div className="left">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} toggle={toggleSidebar}/>
            </div>
            <div className="right">
                <Navbar toggle={toggleSidebar} mode={sidebar}/>
                <div className="content">
                    <div className={styles.registration}>
                        <div className={styles.registrationheader}>
                            <h1>You are almost done</h1>
                            <p>Please take a moment to introduce your self and your business</p>
                        </div>
                        <div className={styles.registrationform}>
                            <form onSubmit={handlesubmit}>
                                <div className={styles.formforyou}>
                                    <h2 className={styles.formhead}>About You</h2>
                                    <div className={styles.forminner}>
                                        <div className={styles.form1}>
                                            <div className={styles2.field}>
                                                <label className={styles2.fieldlabel}>First Name</label>
                                                <input 
                                                    type="text"
                                                    placeholder="First name"
                                                    className={styles2.fieldinput}
                                                    onChange={handleFirstname}
                                                    onBlur={handleFirstname}
                                                    required
                                                ></input>
                                            </div>
                                            <div className={styles2.field}>
                                                <label className={styles2.fieldlabel}>Last Name</label>
                                                <input 
                                                    type="text"
                                                    placeholder="Last name"
                                                    className={styles2.fieldinput}
                                                    onChange={handleLastname}
                                                    onBlur={handleLastname}
                                                    required
                                                ></input>
                                            </div>
                                        </div>
                                        <div className={styles.form2}>
                                            <div className={styles2.field}>
                                                <label className={styles2.fieldlabel}>Phone</label>
                                                <input 
                                                    type="text"
                                                    value={profile?.phoneNumber}
                                                    className={styles2.fieldinput}
                                                    disabled
                                                ></input>
                                            </div>
                                        </div>
                                        <div className={styles.form2}>
                                            <div className={styles2.field}>
                                                <label className={styles2.fieldlabel}>What’s your role at Test Ventures Business</label>
                                                <input 
                                                    type="text"
                                                    placeholder="Enter role"
                                                    className={styles2.fieldinput}
                                                    onChange={handleRole}
                                                    onBlur={handleRole}
                                                    required
                                                ></input>
                                            </div>
                                        </div>
                                        {/* <div className={styles.form3}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="yes"
                                                    name='boolean'
                                                />
                                                Yes, i am
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="yes"
                                                    name='boolean'
                                                />
                                                No, I’m not
                                            </label>
                                        </div> */}

                                    </div>
                            
                                </div>
                                <div className={styles.formforyou}>
                                    <h2 className={styles.formhead}>About Your Business</h2>
                                    <div className={styles.forminner}>
                                        <div className={styles.form2}>
                                            <div className={styles2.field}>
                                                <label className={styles2.fieldlabel}>What industry does your business operate ?</label>
                                                <select className={styles2.fieldinput} 
                                                    onChange={handleBusinessIndustry}
                                                    onBlur={handleBusinessIndustry}
                                                    required
                                                >
                                                    <optgroup>
                                                        <option>-options-</option>
                                                        <option>Agriculture and Farming</option>
                                                        <option>Automotive</option>
                                                        <option>Construction</option>
                                                        <option>Consumer Goods and Services</option>
                                                        <option>Education and Training</option>
                                                        <option>Energy and Utilities</option>
                                                        <option>Finance and Banking</option>
                                                        <option>Healthcare and Pharmaceutical</option>
                                                        <option>Hospitality and Tourism</option>
                                                        <option>Information Technology</option>
                                                        <option>Insurance</option>
                                                        <option>Manufacturing</option>
                                                        <option>Media and Entertainment</option>
                                                        <option>Real Estate</option>
                                                        <option>Retail</option>
                                                        <option>Telecommunications</option>
                                                        <option>Transportation and Logistics</option>
                                                        <option>Wholesale Trade</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={styles.form2}>
                                            <label className={styles2.fieldlabel}>Registration status of your business</label>
                                            <div className={styles.formSelect}>
                                                <div className={`${styles.form4} ${selectedOption === 'Registered Business' ? styles.selected : ''}`} onClick={() => handleOptionClick('Registered Business')}>
                                                    <p className={styles.register}>Registered Business</p>
                                                    <p className={styles.registerbody}>Choose this if your business is registered using<br></br> RC number,CAC Document, BVN, Mermat.</p>
                                                </div>
                                                <div className={`${styles.form4} ${selectedOption === 'Starter Business' ? styles.selected : ''}`} onClick={() => handleOptionClick('Starter Business')}>
                                                    <p className={styles.starter}>Starter Business</p>
                                                    <p className={styles.registerbody}>Choose this if your business is not yet registered </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.form2}>
                                            <div className={styles2.field}>
                                                <label className={styles2.fieldlabel}>How Many workers are in Test Ventures</label>
                                                <select className={styles2.fieldinput}
                                                onChange={handleWorkerRange}
                                                onBlur={handleWorkerRange}
                                                required
                                                >
                                                    <optgroup>
                                                        <option>-options-</option>
                                                        <option>0-5</option>
                                                        <option>0-10</option>
                                                        <option>0-100</option>
                                                        <option>0-500</option>
                                                        <option>0-other</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={styles.form2}>
                                            <div className={styles2.field}>
                                                <label className={styles2.fieldlabel}>Description Of business</label>
                                                <textarea 
                                                    className={styles2.fieldtext}
                                                    placeholder="Enter a short detail of what you business do"
                                                    onChange={handleBusinessDes}
                                                    onBlur={handleBusinessDes}
                                                    required
                                                >
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.submitbutton}>
                                    {loading ? (
                                        <button disabled>
                                            <LottieAnimation data={loader}/>
                                        </button>
                                    ) : (
                                        <button>Continue</button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                    {showerror && (<Errormodal error={error} togglemodal={togglemodal}/>)}
          </div>
        </div>
    );
}
const mapStateToProps = state => {
    return{
        loading:state.businessreg.loading,
        error:state?.businessreg?.error,
        profile: state.getprofile.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postbusinesspartner: (postdata, history, error) => {
            dispatch(postbusinesspartner(postdata, history, error));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);