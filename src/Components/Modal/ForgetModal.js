import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import wrong from '../../Assets/Errorr.json'
const ForgetModal = ({error, togglemodal}) => {
    return ( 
        <div className="modal-background">
            <div className="modal modals">
                {/* <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div> */}
                <div className="onetime-modal">
                    {/* <div className="animation">
                        <LottieAnimation data={wrong}/>
                    </div> */}
                    <p className="create-payment">To perform "forget password", Please do this on the Credio mobile app</p>
                    <button className="modal-submit" onClick={togglemodal}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default ForgetModal;