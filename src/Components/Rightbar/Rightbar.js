import { Link } from "react-router-dom";
import Payment from "../PaymentLinit/Payment";
import TransferRate from "../Rate/TransferRate";
import styles from './Rightbar.module.css';
import { connect } from "react-redux";
const Rightbar = ({personal, business}) => {
    return ( 
        <div className={styles.rightbar}>
            <TransferRate/>
            <div className={styles.paymentContainer}>
                <Payment/>
            </div>
            {(business?.length === 0 || !personal)?(
                <div className={styles.completeProfile}>
                    <p>Complete your Profile</p>
                    <Link to='/activate'><button>Complete</button></Link>
                </div>
            ):(
                <div></div>
            )
            }
        </div>
    );
}

const mapStoreToProps = (state) => {
    return {
        personal: state?.getprofile?.data?.personalInfo,
        business: state?.getprofile?.data?.businessInformation
    };
};
export default connect(mapStoreToProps, )(Rightbar);