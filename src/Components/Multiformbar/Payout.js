import { FaCheck } from "react-icons/fa";
import './MultiStepProgressBar.css';
import styles3 from '../../Pages/Activate/Activate.module.css'
import { Link } from "react-router-dom";
const Payout = () => {
    return ( 
        <div className="payout">
            <div className="payout-icon"><FaCheck/></div>
            <p >Verification is Successful</p>
            <Link to="/dashboard">
                <button className={styles3.activateButton}>
                    OK
                </button>
            </Link>
        </div>
    );
}
 
export default Payout;