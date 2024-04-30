import {RiEyeCloseLine} from 'react-icons/ri';
import { FormattedNumber, IntlProvider } from "react-intl";
import './Card.css';
const Card = ({balance}) => {
    return ( 
        <div className="card">
            <div className="card-details">
                <div className="card-details-left">
                    <p className='card-header'>Total Balance <span><RiEyeCloseLine/></span></p>
                    <IntlProvider>
                        {" "}
                        <p className='card-balance'>
                        <FormattedNumber
                            value={
                                balance
                            }
                            style="currency"
                            currency="NGN"
                        />
                        </p>
                    </IntlProvider>
                </div>
                <div className="card-details-right">
                    <p className='card-fund'>Fund</p>
                </div>
            </div>
            <div className="card-name">
                <p>Test Venture</p>
            </div>
        </div>
     );
}
 
export default Card;