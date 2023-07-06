import { useState } from "react";

import { Link } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Navbar from "../../../Components/Navbar/Navbar";

const Forgototp = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="test">
            <div className="left">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} toggle={toggleSidebar}/>
            </div>
            <div className="right">
                <Navbar toggle={toggleSidebar} mode={sidebar}/>
                <div className="content">
                    <div className="otp phone">
                        <div className="phone-header">
                            <p className="phone-header-head">OTP</p>
                            <p className="phone-header-text">Please Enter the OTP sent to your phone number</p>
                        </div>
                        <div className="phone-body">
                            <form className="phone-form">
                                <div className="form-change">
                                    <div className="input input-2">
                                        <input type="text" placeholder="OTP" 
                                        // onBlur={handleNumber}
                                        // onChange={handleNumber}
                                        required
                                        ></input>
                                    </div>
                                </div>
                                <div className="phone-button">
                                    <Link to='/forgotnew'>
                                        <button className='phone-button-inner'>Submit</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                 </div>
             </div>
         </div>
    );
}
 
export default Forgototp;