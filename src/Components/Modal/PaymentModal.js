import { BsCreditCard } from 'react-icons/bs';
import './PaymentModal.css'
import {TbPackages} from 'react-icons/tb'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const PaymentModal = ({togglemodal}) => {
    return (
        <div className="modal-background">
            <div className="modal">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                <p className='create-payment'>Create New Payment</p>
                <div className="modal-inner">
                    <div className="modal-left">
                        <TbPackages/>
                        <p className="payment-method">Product Payment</p>
                        <p className="payment-details">Lorem ipsum dolor sit amet, adip elit, sed do eiusmod tempor</p>
                        <Link to='/product'>
                            <button className='payment-choose'>Choose</button>
                        </Link>
                    </div>
                    <div className="modal-right">
                        <BsCreditCard/>
                        <p className="payment-method">Product Payment</p>
                        <p className="payment-details">Lorem ipsum dolor sit amet, adip elit, sed do eiusmod tempor</p>
                        <button className='payment-choose'>Choose</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PaymentModal;