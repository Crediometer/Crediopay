import Paginations from '../../Components/Pagination/Pagination';
import './Main.css';
import { connect } from "react-redux";
import { FormattedNumber, IntlProvider } from "react-intl";
import Stack from '@mui/material/Stack';
import { fetchvault } from '../../Redux/Vault/VaultAction';
import { fetchgetprofile } from '../../Redux/Getprofile/GetprofileAction';
const Main = ({vault, profile}) => {
    const phoneNumber = profile?.phoneNumber
    const newphoneNumber = phoneNumber?.startsWith('+234') ? '0' + phoneNumber.slice(4) : phoneNumber;
    console.log(newphoneNumber)
    return ( 
        <div className="main-con">
            <div className="main-top">
                <p>Showing 0 - 1 Main Account</p>
                {/* <button>+ Add Account</button> */}
            </div>
            <div className="main-body">
                <div className="main-body-inner">
                    <p className='main-account-name'>{vault?.accountName}</p>
                    <p className='main-account-phone'>{vault?.accountNumber}</p>

                    <div className="main-balance-2">
                        <div className="main-ava-balance">
                            <p className='main-ava-text'>Available Balance</p>
                            <IntlProvider>
                                {" "}
                                <h1 className='main-amount'>
                                <FormattedNumber
                                    value={
                                        vault?.accountBalance
                                    }
                                    style="currency"
                                    currency="NGN"
                                />
                                </h1>
                            </IntlProvider>
                        </div>
                        <div className="main-current">
                            <p>Current</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Paginations/> */}
        </div>
    );
}
const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
        vault:state?.vault?.data?.data?.mainAccount,
        profile: state.getprofile.data,
        cid: state?.getprofile?.data?.client?._id,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchgetprofile: () => dispatch(fetchgetprofile()),
        fetchvault: (id) => dispatch(fetchvault(id))
    };
};
export default  connect(mapStoreToProps, mapDispatchToProps)(Main);