// import { withStyles } from '@mui/material/styles';
import {styled} from '@mui/material/styles'
import { makeStyles } from "@mui/styled-engine-sc";
import Pagination from '@mui/material/Pagination';
const StyledPagination = styled(Pagination)(({ theme }) => ({
    ul: {
        "& .Mui-selected": {
            backgroundColor: '#B11226',
            color: 'white'
        }   
      }
  }));
  
const Paginations = () => {
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
                <StyledPagination count={1}/>  
            </div>
        </div>
    );
}
 
export default Paginations;