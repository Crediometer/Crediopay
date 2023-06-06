import { IoCopy } from 'react-icons/io5';
import {BsArrowRight} from 'react-icons/bs'
import './Overview.css';
const Overview = () => {
    return ( 
        <div className="overview">
            <div className="overview-head">
                <div className="overview-left">
                    <p className='overview-left-head'>Test Ventures</p>
                    <div className="current">
                        <p>Current</p>
                    </div>
                    <p className='trans-phone'>09083736822 <span><IoCopy/></span></p>
                </div>
                <div className="overview-center">
                    <p className='overview-available'>Available Balance</p>
                    <p className="overview-main-balance">N 68,485.26</p>
                </div>
                <div className="overview-right">
                    <p className='overview-available'>Proposed Balance</p>
                    <p className="overview-main-balance">N 68,485.26</p>
                </div>
            </div>
            <div className="overview-body">
                <div className="overview-body-top">
                   <p className='overview-showing'>Showing 0 Transaction</p> 
                   <div className='overview-account'><p>View Account Statement</p><span><BsArrowRight/></span></div>
                </div>
                <div className="overview-body-middle">
                   <div className="overview-date">
                     <p>Mon may 10 2023   -   Wed May 31 2023</p>
                   </div>
                   <div className="overview-select">
                    <p>Filter by</p>
                    <select>
                        <optgroup>
                            <option>All</option>
                        </optgroup>
                    </select>
                   </div>
                </div>
                <div className="overview-table">
                    <table cellSpacing="0">
                        <thead>
                        <tr>
                            <th>TXN DATE</th>
                            <th>rEFERENCE ID</th>
                            <th>NARRATION</th>
                            <th>TYPE</th>
                            <th>AMOUNT</th>
                            <th>Balance</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
     );
}
 
export default Overview;