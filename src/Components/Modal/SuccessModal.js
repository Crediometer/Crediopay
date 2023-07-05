import { FaCheck, FaSadTear, FaSmile } from "react-icons/fa";
import LottieAnimation from "../../Lotties";
import success from "../../Assets/SuccessTick.json"
import { Link } from "react-router-dom";
const SuccessModal = (props) => {
    return ( 
        <div className="successmodal">
            <div className="modal-background">
                <div className="modal">
                    <div className="animation">
                        <LottieAnimation data={success} />
                    </div>
                    <p className="modal-information">{props.message}</p> 
                    <Link to={props.link}>
                        <button className="modal-close">OK</button>   
                    </Link>        
                </div>
            </div>
        </div>
    );
}
 
export default SuccessModal;