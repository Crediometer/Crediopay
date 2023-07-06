import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Phone.css';
import { Link } from "react-router-dom";
const Phone = () => {
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
                    <div className="phone">
                        <div className="phone-header">
                            <p className="phone-header-head">Phone Number</p>
                            <p className="phone-header-text">Please Enter your phone number</p>
                        </div>
                        <div className="phone-body">
                            <form className="phone-form">
                                <div className="form-change">
                                    <div className="input input-2">
                                        <input type="text" placeholder="Phone Number" 
                                        // onBlur={handleNumber}
                                        // onChange={handleNumber}
                                        required
                                        ></input>
                                    </div>
                                </div>
                                <div className="phone-button">
                                    <Link to="/forgototp">
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
 
export default Phone;