import Paginations from '../../Components/Pagination/Pagination';
import SubTable from '../../Components/Table/SubTable';
import { connect } from "react-redux";
import './Sub.css'
import { fetchsubaccount } from '../../Redux/Account/SubaccountAction';
import { useEffect } from 'react';
import LottieAnimation from '../../Lotties';
import preloader from '../../Assets/preloader.json'
const Sub = ({cid, fetchsubaccount, subaccount, loading}) => {
    useEffect(() => {
        fetchsubaccount(cid)
    }, [cid]);
    return ( 
        <div className="sub-con">
            <div className="sub-top">
                <p>Showing 0 - 1 Sub Account</p>
            </div>
            <div className="settings-body">
            {loading  ? ( 
                <div className="preloader">
                    <LottieAnimation data={preloader} />
                </div> 
            ):(
                <div className="subtable">
                    <table cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Account Name</th>
                                <th>account Number</th>
                                <th>External  Reference</th>
                                <th>Account Balance </th>
                            </tr>
                        </thead>
                        <tbody>
                            {subaccount?.data?.map((account)=>{
                                return(
                                    <tr>
                                        <td>{account.accountName}</td>
                                        <td>{account.accountNumber}</td>
                                        <td>{account.currencyCode}</td>
                                        <td>{account.accountBalance}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            <Paginations/>
        </div>
    );
}
const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
        cid: state?.getprofile?.data?.id,
        subaccount: state?.subaccount?.data,
        loading: state?.subaccount?.loading
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchsubaccount: (id) => dispatch(fetchsubaccount(id))
    };
};
 
export default connect(mapStoreToProps, mapDispatchToProps)(Sub);