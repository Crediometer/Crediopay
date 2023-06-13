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
const DashboardTable = ({fetchrecenttran, recent}) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
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
                            {recent?.data?.data?.map((transaction)=>{
                                return(
                                    <TableRow hover role="checkbox" tabIndex={-1}>
                                        <TableCell className='tablecell-body'>
                                            <div className="recipient" >
                                                {/* <img></img> */}
                                                <div className="recipient-text" >
                                                    <p className="recipient-name" >{transaction.to}</p>
                                                    <p className="recipient-title">Recipient</p>
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
                                            <div className="status-button">
                                                <button>Successful</button>
                                            </div>
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
        </div>
     );
}
const mapStoreToProps = (state) => {
    return {
      recent: state.recenttransaction,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchrecenttran: () => dispatch(fetchrecenttran()),
    };
};
  
export default connect(mapStoreToProps, mapDispatchToProps)(DashboardTable);
