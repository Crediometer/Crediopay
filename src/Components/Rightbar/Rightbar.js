import { Link } from "react-router-dom";
import Payment from "../PaymentLinit/Payment";
import TransferRate from "../Rate/TransferRate";
import styles from './Rightbar.module.css';
import { connect } from "react-redux";
const Rightbar = ({personal, business, tierlevel}) => {
    return ( 
        <div className={styles.rightbar}>
            <TransferRate/>
            <div className={styles.paymentContainer}>
                <Payment/>
            </div>
            {(!business) ? (
                <div className={styles.completeProfile}>
                    <p>Complete your Profile</p>
                    {/* <Link to={(tierlevel > 2) ? "/activate" : '/verification'}><button>Complete</button></Link> */}
                    <Link to="/activate"><button>Complete</button></Link>
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
        tierlevel:state?.getprofile?.data?.tierLevel,
        personal: state?.getprofile?.data?.personalInfo,
        business: state?.getprofile?.data?.businessInformation
    };
};
export default connect(mapStoreToProps, )(Rightbar);