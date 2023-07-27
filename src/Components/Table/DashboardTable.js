import * as React from 'react';
import { connect } from "react-redux";
import { fetchrecenttran } from '../../Redux/Dashboard/DashboardAction';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './DashboardTable.css';
import {styled} from '@mui/material/styles'
import { makeStyles } from "@mui/styled-engine-sc";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { fetchtransaction } from '../../Redux/Transaction/TransactionAction';
const StyledPagination = styled(Pagination)(({ theme }) => ({
    ul: {
        "& .Mui-selected": {
            backgroundColor: '#B11226',
            color: 'white'
        }   
      }
}));
const DashboardTable = ({fetchrecenttran, recent, search, money, status, transaction, fetchtransaction,start, end}) => {
    const [page, setPage] = React.useState(0);
    const [page2, setPage2] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [filteredData, setFilteredData] = React.useState([]);
    const inputNumber = transaction?.data?.data?.totalTransactions;
    const [intervals, setIntervals] = React.useState([]);
    const [select, setselect] = React.useState("");
    console.log(inputNumber)
    // const handleInputChange = (event) => {
    //   const { value } = event.target;
    //   setInputNumber(value);
    //   calculateIntervals(value);
    // };
  
    const calculateIntervals = () => {
      if (!isNaN(inputNumber) && inputNumber !== '') {
        const parsedNumber = parseInt(inputNumber, 10);
        const intervalsArray = [];
  
        for (let i = 0; i <= parsedNumber; i += 5) {
          intervalsArray.push(i);
          console.log(intervalsArray)
          setIntervals(intervalsArray);
        }
  
        console.log(intervals)
      } else {
        setIntervals([]);
      }
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleChange = (event, value) => {
        setPage2(value);
        console.log(value)
        fetchtransaction(page2,select)
    };
    const handleselect = (e) => {
        const value = e.target.value;
        setselect(value);
        console.log(value)
        fetchtransaction(page2, select)
    };
    React.useEffect(() => {
        fetchrecenttran()
        fetchtransaction(page2)
        calculateIntervals()
    }, [transaction?.data?.data?.totalTransactions]);
    return ( 
        <div className="dashboard-table">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tablecell-head'><p>Recipient</p></TableCell>
                            <TableCell className='tablecell-head'><p>Date</p></TableCell>
                            <TableCell className='tablecell-head'><p>Transaction Id</p></TableCell>
                            <TableCell className='tablecell-head'><p>Amount</p></TableCell>
                            <TableCell className='tablecell-head'><p>Status</p></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return ( */}
                            {transaction?.data?.data?.transactions.filter(transactions =>{
                                if (transactions.mode == money ) {
                                    return (
                                        transactions?.narration?.toLowerCase().includes(search) || 
                                        transactions?.referenceData?.creditAccountName?.toLowerCase().includes(search)
                                    );
                                } else if (money == 'All' && status == 'All') {
                                    return (
                                        transactions?.narration?.toLowerCase().includes(search) || 
                                        transactions?.referenceData?.creditAccountName?.toLowerCase().includes(search)
                                    );
                                }else if (transactions.status == status){
                                    return (
                                        transactions?.narration?.toLowerCase().includes(search) || 
                                        transactions?.referenceData?.creditAccountName?.toLowerCase().includes(search)
                                    );
                                }}).sort((a, b) => new Date(a.start) - new Date(b.end))
                            .map((transaction)=>{
                                return(
                                    <TableRow hover role="checkbox" tabIndex={-1}>
                                        <TableCell className='tablecell-body'>
                                            <div className="recipient" >
                                                {/* <img></img> */}
                                                <div className="recipient-text" >
                                                {(transaction.status === 0)?(
                                                    <div>
                                                        <p className="recipient-name" >{transaction.referenceData.creditAccountName}</p>
                                                    </div>
                                                ):(
                                                    <div>
                                                        <p className="recipient-name" >{transaction.narration}</p>
                                                    </div>
                                                )}
                                                {(transaction.mode === 0)?(
                                                    <p className="recipient-title">Outgoing</p>
                                                ):(
                                                    <p className="recipient-title">Incoming</p>
                                                )}
                                                    {/* <p className="recipient-name" >{transaction.to}</p> */}
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className='tablecell-body'>
                                            <div className="transaction-data" >
                                                <p className="date">{transaction.createdAt.slice(0, 10)}</p>
                                                <p className="time">{transaction.createdAt.slice(11, 16)}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell className='tablecell-body' >
                                            <p className='transaction-text'>{transaction._id}</p>
                                        </TableCell>
                                        <TableCell className='tablecell-body' >
                                            <p className='transaction-text'>N{transaction.amount}</p>
                                        </TableCell>
                                        <TableCell className='tablecell-body'>
                                            {(transaction.status === 0)?(
                                                <div className="status-button">
                                                    <button>Successful</button>
                                                </div>
                                            ):(
                                                <div className="status-button-red">
                                                    <button>Failed</button>
                                                </div>
                                            )}
                                            
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                            {/* );
                        })} */}
                    </TableBody>
                    </Table>
                </TableContainer>
        </Paper>
        <div className="main-footer">
            <div className="main-footer-left">
                {/* <p>Show results</p>
                <div className="main-select">
                    <select onChange={handleselect}>
                        <optgroup>
                            {intervals.map((interval)=>{
                                return(
                                    <option value={interval}>{interval}</option>
                                )
                            })}
                        </optgroup>
                    </select>
                </div> */}
            </div>
            <div className="main-footer-right">
               <Stack spacing={2}>
                    {/* <Typography>Page: {page2}</Typography>  */}
                    <StyledPagination count={transaction?.data?.data?.totalPages} page={page2} onChange={handleChange}/>  
                </Stack>
            </div>
        </div>
        </div>
     );
}
const mapStoreToProps = (state) => {
    return {
      recent: state.recenttransaction,
      transaction: state.transaction
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchrecenttran: () => dispatch(fetchrecenttran()),
        fetchtransaction: (page, select) => dispatch(fetchtransaction(page, select)),
    };
};
  
export default connect(mapStoreToProps, mapDispatchToProps)(DashboardTable);
