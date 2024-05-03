import Paginations from '../../Components/Pagination/Pagination';
import SubTable from '../../Components/Table/SubTable';
import { connect } from "react-redux";
import './Sub.css'
import { fetchsubaccount } from '../../Redux/Account/SubaccountAction';
import { useEffect, useState } from 'react';
import LottieAnimation from '../../Lotties';
import preloader from '../../Assets/preloader.json'
import empty from '../../Assets/Empty.json'
import {styled} from '@mui/material/styles'
import { makeStyles } from "@mui/styled-engine-sc";
import Pagination from '@mui/material/Pagination';
import ReactPaginate from "react-paginate";
import { Stack } from '@mui/material';
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
    const [page2, setPage2] = useState(1);
    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = size
    const pagesVisited = pageNumber * usersPerPage
    const inputNumber = subaccount?.data?.totalSubaccount;
    const [intervals, setIntervals] = useState([]);
    // 40

    const calculateIntervals = () => {
        if (!isNaN(inputNumber) && inputNumber !== '') {
          const parsedNumber = parseInt(inputNumber, 10);
          const intervalsArray = [];
    
          for (let i = 0; i <= parsedNumber; i += 5) {
            intervalsArray.push(i);
            setIntervals(intervalsArray);
          }
    
        } else {
          setIntervals([]);
        }
    };
    const displayUsers = subaccount?.data?.results?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((account)=>{
        return(
            <tr>
                <td>{account.accountName}</td>
                <td>{account.accountNumber}</td>
                <td>{account.externalReference}</td>
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
    }
    const handleChange = (event, value) => {
        setPage2(value);
    };
    useEffect(() => {
        fetchsubaccount(cid, size, page2)
        calculateIntervals()
    }, [cid, size, page2, subaccount?.data?.totalSubaccount]);
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
                            {(subaccount?.data?.results?.length === 0 ) ? (
                                 <div className="empty-animate">
                                    <LottieAnimation data={empty}/>
                                    <p>No Data Found</p>
                                </div>
                            ) : (
                                <>
                                    {displayUsers}
                                </>
                            )}
                           
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
                            {intervals.map((interval)=>{
                                return(
                                    <option value={interval}>{interval}</option>
                                )
                            })}
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div className="main-footer-right">
                    {/* <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    /> */}
                     <Stack spacing={2}>
                        {/* <Typography>Page: {page2}</Typography>  */}
                        <StyledPagination count={subaccount?.data?.totalPages} page={page2} onChange={handleChange}/>  
                    </Stack>
                    {/* <StyledPagination count={1}/>   */}
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    return {
        cid: state?.getprofile?.data?.client?._id,
        subaccount: state?.subaccount?.data,
        loading: state?.subaccount?.loading
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchsubaccount: (id, size, page) => dispatch(fetchsubaccount(id, size, page))
    };
};
 
export default connect(mapStoreToProps, mapDispatchToProps)(Sub);