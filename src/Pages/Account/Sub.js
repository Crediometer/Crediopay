import Paginations from '../../Components/Pagination/Pagination';
import SubTable from '../../Components/Table/SubTable';
import { connect } from "react-redux";
import './Sub.css'
import { fetchsubaccount } from '../../Redux/Account/SubaccountAction';
import { useEffect, useState } from 'react';
import LottieAnimation from '../../Lotties';
import preloader from '../../Assets/preloader.json'
import {styled} from '@mui/material/styles'
import { makeStyles } from "@mui/styled-engine-sc";
import Pagination from '@mui/material/Pagination';
import ReactPaginate from "react-paginate";
const StyledPagination = styled(Pagination)(({ theme }) => ({
    ul: {
        "& .Mui-selected": {
            backgroundColor: '#B11226',
            color: 'white'
        }   
      }
  }));
const Sub = ({cid, fetchsubaccount, subaccount, loading}) => {
    const [size, setsize] = useState(5);
    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = size
    const pagesVisited = pageNumber * usersPerPage
    // 40
    const displayUsers = subaccount?.data?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((account)=>{
        return(
            <tr>
                <td>{account.accountName}</td>
                <td>{account.accountNumber}</td>
                <td>{account.currencyCode}</td>
                <td>{account.accountBalance}</td>
            </tr>
        )
    })
    const pageCount = Math.ceil(subaccount?.data?.length / usersPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
    const handleSize = (e)=>{
        const value = e.target.value
        let num = parseInt(value)
        setsize(num)
        console.log(size)
    }
    useEffect(() => {
        fetchsubaccount(cid, size)
    }, [cid, size]);
    return ( 
        <div className="sub-con">
            {/* <div className="sub-top">
                <p>Showing 0 - 1 Sub Account</p>
            </div> */}
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
                           {displayUsers}
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            <div className="main-footer">
                <div className="main-footer-left">
                    <p>Show results</p>
                    <div className="main-select">
                        <select onChange={handleSize}>
                            <optgroup>
                                <option value='5'>5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div className="main-footer-right">
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                    {/* <StyledPagination count={1}/>   */}
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    return {
        cid: state?.getprofile?.data?.id,
        subaccount: state?.subaccount?.data,
        loading: state?.subaccount?.loading
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchsubaccount: (id, size) => dispatch(fetchsubaccount(id, size))
    };
};
 
export default connect(mapStoreToProps, mapDispatchToProps)(Sub);