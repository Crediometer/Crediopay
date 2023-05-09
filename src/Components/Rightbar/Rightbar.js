import { Link } from "react-router-dom";
import Payment from "../PaymentLinit/Payment";
import TransferRate from "../Rate/TransferRate";
import styles from './Rightbar.module.css'
const Rightbar = () => {
    return ( 
        <div className={styles.rightbar}>
            <TransferRate/>
            <div className={styles.paymentContainer}>
                <Payment/>
            </div>
            <div className={styles.completeProfile}>
                <p>Complete your Profile</p>
                <Link to='/activate'><button>Complete</button></Link>
            </div>
        </div>
    );
}
 
export default Rightbar;