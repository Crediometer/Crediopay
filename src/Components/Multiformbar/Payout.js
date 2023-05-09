import { FaCheck } from "react-icons/fa";
import './MultiStepProgressBar.css'
const Payout = () => {
    return ( 
        <div className="payout">
            <div className="payout-icon"><FaCheck/></div>
            <p >Verification is Successful</p>
        </div>
    );
}
 
export default Payout;