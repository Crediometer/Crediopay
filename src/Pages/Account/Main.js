import Paginations from '../../Components/Pagination/Pagination';
import './Main.css';
import { connect } from "react-redux";
import Stack from '@mui/material/Stack';
import { fetchvault } from '../../Redux/Vault/VaultAction';
import { fetchgetprofile } from '../../Redux/Getprofile/GetprofileAction';
const Main = ({vault}) => {
    // useEffect(() => {
    //     fetchvault(cid)
    //     fetchgetprofile()
    // }, [clientid]);
    return ( 
        <div className="main-con">
            <div className="main-top">
                <p>Showing 0 - 1 Main Account</p>
                {/* <button>+ Add Account</button> */}
            </div>
            <div className="main-body">
                <div className="main-body-inner">
                    <p className='main-account-name'>{vault?.accountName}</p>
                    <p className='main-account-phone'>09083736822</p>

                    <div className="main-balance-2">
                        <div className="main-ava-balance">
                            <p className='main-ava-text'>Available Balance</p>
                            <h1 className='main-amount'>N 68,485.26</h1>
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