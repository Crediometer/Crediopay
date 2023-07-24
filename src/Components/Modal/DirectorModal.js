import { FaTimes } from 'react-icons/fa';
import './DirectorModal.css'
import {connect} from 'react-redux'
import { postdirector } from '../../Redux/Director/DirectorAction';
import { useState } from 'react';
import loader from "../../Assets/loading.json";
import LottieAnimation from '../../Lotties';
import Errormodal from './Errormodal';
import SuccessModal from './SuccessModal';
const DirectorModal = ({togglemodal, postdirector, loading, error, success}) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [postState, setPostState] = useState({})
    const [showerror, setshowerror] = useState(false)
    const [showsuccess, setshowsuccess] = useState(false)
    const handleemail =(e)=>{
        const value = e.target.value;
        console.log(value);
        setEmail(value);
        setPostState({ ...postState, ...{email: email} });
    }
    const handleName =(e)=>{
        const value = e.target.value;
        console.log(value);
        setName(value);
        setPostState({ ...postState, ...{name: name} });
    }
    const handleRole =(e)=>{
        const value = e.target.value;
        console.log(value);
        setRole(value);
        setPostState({ ...postState, ...{role: role} });
    }
    const toggleerror =()=>{
        setshowerror(!showerror)
    }
    const togglesuccess =()=>{
        setshowsuccess(!showsuccess)
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(postState)
        postdirector(
            postState, ()=>{ 
            // setPending(true);
            setshowsuccess(true)
            setRole("")
            setName("")
            setEmail("")
        },  ()=>{ 
            // console.log(errorHandler)
            // console.log("now go to error..", error);
            // setErrorHandler(error)
            setshowerror(true)
            // setPending(false);
        }
        )
    }
    return ( 
        <div className="modal-background">
            <div className="modal">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                <p className='create-payment'>Add Directors/Users</p>
                <div className="director-modal">
                    <form onSubmit={handlesubmit}>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="modal-field"
                            onChange={handleemail}
                            onBlur={handleemail}
                            value={email}
                            required
                        >
                        </input>
                        <input
                            type="text"
                            placeholder="Director name"
                            className="modal-field"
                            onChange={handleName}
                            onBlur={handleName}
                            value={name}
                            required
                        >
                        </input>
                        <select
                            onChange={handleRole}
                            onBlur={handleRole}
                            value={role}
                            required
                        >
                            <optgroup>
                                <option>-Role-</option>
                                <option>Founder/Entrepreneur</option>
                                <option>CEO (Chief Executive Officer)</option>
                                <option>CTO (Chief Technology Officer)</option>
                                <option>CFO (Chief Financial Officer)</option>
                                <option>COO (Chief Operating Officer)</option>
                                <option>CMO (Chief Marketing Officer)</option>
                                <option>HR Manager (Human Resources Manager)</option>
                                <option>Sales Manager</option>
                                <option>Product Manager</option>
                                <option>Project Manager</option>
                                <option>Operations Manager"</option>
                                <option>UX/UI Designer</option>
                                <option>Software Engineer/Developer</option>
                                <option>Data Analyst</option>
                                <option>Customer Support Specialist</option>
                                <option>Content Writer/Copywriter</option>
                                <option>Graphic Designer</option>
                                <option>Operations Associate</option>
                                <option>Quality Assurance (QA) Tester</option>
                                <option>Business Development Manager</option>
                            </optgroup>
                        </select>
                        {loading ? (
                            <button className='modal-submit' disabled>
                                <LottieAnimation data={loader}/>
                            </button>
                        ) : (
                            <button className='modal-submit'><span>Save</span></button>
                        )}
                    </form>
                </div>
            </div>
            {showerror && (<Errormodal error={error} togglemodal={toggleerror}/>)}
            {showsuccess && (<SuccessModal message={success} togglemodal={togglesuccess}/>)}
        </div>
    );
}

const mapStateToProps = state => {
    return{
        error: state?.director.error,
        loading: state.director.loading,
        success: state?.director.data.message,
        // success:state?.changepin?.data?.message,
        // profile: state.getprofile.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postdirector: (postdata, history, errors) => {
            dispatch(postdirector(postdata, history, errors));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectorModal);