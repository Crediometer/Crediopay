import Paginations from '../../Components/Pagination/Pagination';
import './Main.css';
import { connect } from "react-redux";
import { FormattedNumber, IntlProvider } from "react-intl";
import Stack from '@mui/material/Stack';
import { fetchvault } from '../../Redux/Vault/VaultAction';
import { fetchgetprofile } from '../../Redux/Getprofile/GetprofileAction';
import { useEffect } from 'react';
import LottieAnimation from '../../Lotties';
import preloader from '../../Assets/preloader.json'
const Main = ({vault, profile, fetchvault, fetchgetprofile, cid, loading}) => {
    const phoneNumber = profile?.phoneNumber
    const newphoneNumber = phoneNumber?.startsWith('+234') ? '0' + phoneNumber.slice(4) : phoneNumber;
    useEffect(() => {
        fetchvault(cid)
        fetchgetprofile()
    }, [cid]);
    return ( 
        <div>
            {loading  ? ( 
                <div className="preloader">
                    <LottieAnimation data={preloader} />
                </div> 
            ):(
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
            )}
        </div>
    );
}
const mapStoreToProps = (state) => {
    return {
        loading: state.getprofile.loading,
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