import "./Notification.css";
import { connect } from "react-redux";
// import "../../Component/Form/PersonalForm.css"
import { Link } from "react-router-dom";
import { BiArrowBack, BiSearch } from "react-icons/bi";
// import image from "../../image/profile-image.jpg";
import {MdOutlineDeleteOutline} from 'react-icons/md'
import { fetchnotification, putnotification } from "../../Redux/Notification/NotificationAction";
import { useEffect, useState } from "react";
import { Switch } from "antd";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaCheck } from "react-icons/fa";
const Notification = ({fetchnotification, notification, putnotification}) => {
    const [open, setOpen]= useState(false)
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
    const handleMark = (read, id) =>{
        putnotification({read: read}, id)
        console.log(id)
    }
    useEffect(() => {
        fetchnotification();
    }, []);
    return ( 
        <div className="test">
            <div className="left">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} toggle={toggleSidebar}/>
            </div>
            <div className="right">
                <Navbar toggle={toggleSidebar} mode={sidebar}/>
                <div className="content">
                    <div className="notification">
                        <div className="body notification-body">
                            <div className="notification-outer">
                                <div className="notification-top">
                                    <p className="notification-header">Notifications</p>
                                    <div className="do-not-disturb">
                                        <p>Do not disturb</p>
                                        <div className="switch">
                                            <Switch/>
                                        </div>
                                    </div>
                                </div>
                                <div className="back notification-back">
                                    <Link to='/dashboard'>
                                        <BiArrowBack/>
                                    </Link>
                                    <p className="title">Inbox</p>
                                </div>
                                <div className="notification-inner">
                                    <div className="notification-center">
                                        <div className="notification-nav">
                                            <div className="all">
                                                <p className="all-number">13</p>
                                                <p className="all-text">All</p>
                                            </div>
                                            <div className="today">
                                                <p className="today-number">4</p>
                                                <p className="today-text">Today</p>
                                            </div>
                                            <div className="clear-all">
                                                <p className="clear-number"><MdOutlineDeleteOutline/></p>
                                                <p className="clear-text">Clear All</p>
                                            </div>
                                        </div>
                                        <div className="notification-messages">
                                            <div className="messages">
                                                <p className="message-date">Today</p>
                                                {notification.data.map((message)=>{
                                                    return(
                                                        <div className="messages-inner">
                                                            {/* <img src={image} className="message-image"></img> */}
                                                            <div className="message-container">
                                                                <div className="message-text">
                                                                    <p className="message-title">{message.message}</p>
                                                                    <p className="message-content">Hi mosunmoluwa your 20k weekly  Dutse market ajo plan is successful! login into your app to view your plan or get intouch with us ifyour need further information</p>
                                                                </div>
                                                                <div className="message-date-delete">
                                                                    <p className="date-time">{message.createdAt.slice(11, 16)} <span>May 15</span></p>
                                                                    <div className="delete">
                                                                        {open && <div className="delete-buttons">
                                                                            <button className="yes">Yes</button>
                                                                            <button className="no" onClick={()=>{setOpen(false)}}>No</button>
                                                                        </div>}
                                                                        <span className="message-tick" onClick={handleMark(true, message._id)}><FaCheck/></span>
                                                                        <span onClick={()=>{setOpen(true)}}><MdOutlineDeleteOutline/></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
      notification: state.notification,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchnotification: () => dispatch(fetchnotification()),
        putnotification: (readstate, id) => dispatch(putnotification(readstate, id))
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Notification);