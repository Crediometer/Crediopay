import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@mui/material/Pagination';
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiPagination-ul .Mui-selected': {
        backgroundColor: '#B11226',
        color: "white", // Change to your desired color
      },
      '& .MuiPagination-ul .Mui-selected .MuiButtonBase-root': {
        color: 'white', // Change to your desired color
      },
    },
  }));
const Paginations = () => {
    const classes = useStyles();
    return ( 
        <div className="main-footer">
            <div className="main-footer-left">
                <p>Show results</p>
                <div className="main-select">
                    <select>
                        <optgroup>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className="main-footer-right">
                <Pagination count={1}  classes={{ root: classes.root }} />  
            </div>
        </div>
    );
}
 
export default Paginations;