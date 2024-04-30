import { useState } from 'react';
import PaymentModal from '../../Components/Modal/PaymentModal';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
                <SkeletonTheme baseColor="#BFBFBF" highlightColor="#827f7f">
                    <div className="content">
                        <div className="payment">
                            <div className="payment-top">
                                <p style={{width: "200px"}}>
                                    <Skeleton/>
                                </p>
                                {/* <button className="new-payment" onClick={handleModal}>New Payment</button> */}
                            </div>
                            <div className="payment-body">
                                {/* <IoWarningOutline/> */}
                                <p className="no-payment-head"><Skeleton/></p>
                                <p className="no-payment-body"><Skeleton count={3}></Skeleton></p>
                            </div>
                            {modal && (
                                <PaymentModal togglemodal={handleModal}/>
                            )}
                        </div>
                    </div>
                </SkeletonTheme>
            </div>
        </div>
    );
}
 
export default Payment;