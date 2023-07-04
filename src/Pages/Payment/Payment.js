import { useState } from 'react';
import PaymentModal from '../../Components/Modal/PaymentModal';
import './Payment.css'
import {IoWarningOutline} from 'react-icons/io5'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
const   Payment = () => {
    const [modal, setModal] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
    const handleModal = ()=>{
        setModal(!modal)
    }
    return ( 
        <div className="test">
            <div className="left">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} toggle={toggleSidebar}/>
            </div>
            <div className="right">
                <Navbar toggle={toggleSidebar} mode={sidebar}/>
                <div className="content">
                    <div className="payment">
                        <div className="payment-top">
                            <button className="new-payment" onClick={handleModal}>New Payment</button>
                        </div>
                        <div className="payment-body">
                            <IoWarningOutline/>
                            <p className="no-payment-head">No payment has been made </p>
                            <p className="no-payment-body">No payment has been made to this account, proceed to create a payment  plan and await payment </p>
                        </div>
                        {modal && (
                            <PaymentModal togglemodal={handleModal}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Payment;