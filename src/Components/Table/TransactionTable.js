import * as React from 'react';
import { connect } from "react-redux";
import { fetchtransaction } from '../../Redux/Transaction/TransactionAction';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import LottieAnimation from '../../Lotties';
import empty from "../../Assets/Empty.json";
import './DashboardTable.css';
const TransactionTable = ({fetchtransaction,recent,transaction}) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    React.useEffect(() => {
        fetchtransaction()
    }, []);
    return ( 
        <div className="dashboard-table">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tablecell-head'><p>Account Name</p></TableCell>
                            <TableCell className='tablecell-head'><p>Account Number</p></TableCell>
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
                                    {(recent?.data?.data?.length === 0) ? (
                                         <TableRow>
                                            <TableCell colSpan={5}>
                                            <div className="empty-animate">
                                                <LottieAnimation data={empty}/>
                                                <p>No Data Found</p>
                                            </div>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        <>
                                            {recent?.data?.data?.map((transaction)=>{
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
                                        </>
                                    )}
                                    {/* );
                                })} */}
                            </TableBody>
                      
                    </Table>
                </TableContainer>
        </Paper>
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
        fetchtransaction: () => dispatch(fetchtransaction()),
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(TransactionTable);
