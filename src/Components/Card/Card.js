import {RiEyeCloseLine, RiEyeLine} from 'react-icons/ri';
import { FormattedNumber, IntlProvider } from "react-intl";
import './Card.css';
import { useState } from 'react';
const Card = ({balance}) => {
    const [show, setshow] = useState(false)
    const handleShow = ()=>{
        setshow(!show)
    }
    return ( 
        <div className="card">
            <div className="card-details">
                <div className="card-details-left">
                    <p className='card-header'>Total Balance <span onClick={handleShow}>{show?(<RiEyeLine />):<RiEyeCloseLine/>}</span></p>
                    <IntlProvider>
                        {" "}
                        <p className='card-balance'>
                            {show ? (
                                <FormattedNumber
                                    value={ balance}
                                    style="currency"
                                    currency="NGN"
                                />
                            ) : (
                                "XXXXXX"
                            )}
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