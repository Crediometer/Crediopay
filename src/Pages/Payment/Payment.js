import { useState } from 'react';
import PaymentModal from '../../Components/Modal/PaymentModal';
import './Payment.css'
import {IoWarningOutline} from 'react-icons/io5'
const   Payment = () => {
    const [modal, setModal] = useState(false);
    const handleModal = ()=>{
        setModal(!modal)
    }
    return ( 
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
    );
}
 
export default Payment;