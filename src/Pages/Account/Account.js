import { IoWarningOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Account = () => {
    return ( 
        <div className="payment">
              <div className="payment-top">
                <Link to="/accountpage"><button className="new-payment">Create Account</button></Link>
            </div>
            <div className="payment-body">
                <IoWarningOutline/>
                <p className="no-payment-body">You are yet to create an account </p>
            </div>
        </div>
    );
}
 
export default Account;