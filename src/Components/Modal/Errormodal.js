import { FaTimes } from 'react-icons/fa';
const Errormodal = ({error, togglemodal}) => {
    return ( 
        <div className="modal-background">
            <div className="modal">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                <div className="onetime-modal">
                    <p className="create-payment">{error}</p>
                    <button className="modal-submit" onClick={togglemodal}>
                        Retry
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Errormodal;