import { fetchsumtran } from '../../Redux/Dashboard/DashboardAction';
import { connect } from "react-redux";
import { FormattedNumber, IntlProvider } from "react-intl";
import {MdArrowDropDown, MdArrowDropUp} from 'react-icons/md';
import './TransferRate.css';
const TransferRate = ({fetchsumtran, sum}) => {

    return ( 
        <div className="transfer-rate">
            <div className="money-in-out">
                <div className="money-in">
                    <p className='money-in-text'>Money In<span><MdArrowDropDown/></span></p>
                    <IntlProvider>
                        <p className='money-in-amount'>
                            <FormattedNumber
                                value={
                                    sum?.data?.data?.incomingSum
                                }
                                style="currency"
                                currency="NGN"
                            />
                        </p>
                    </IntlProvider>
                    
                </div>
                <div className="money-out">
                    <p className='money-out-text'>Money out<span><MdArrowDropUp/></span></p>
                    <IntlProvider>
                        <p className='money-out-amount'>
                        <FormattedNumber
                            value={
                                sum?.data?.data?.outgoingSum
                            }
                            style="currency"
                            currency="NGN"
                        />
                        </p>
                    </IntlProvider>
                </div>
            </div>
        </div>
     );
}

const mapStoreToProps = (state) => {
    return {
      sum: state.sumtransaction,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchsumtran: () => dispatch(fetchsumtran()),
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(TransferRate);