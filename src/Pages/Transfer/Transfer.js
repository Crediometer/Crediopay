import { FaPiggyBank } from 'react-icons/fa';
import './Transfer.css'
const Transfer = () => {
    return ( 
        <div className="transfer">
            <p className="transfer-head">Fund Transfer</p>
            <div className="transfer-body">
                <div className="transfer-inner">
                    <div className="transfer-to">
                        <p className='transfer-to-title'>Transfer To :</p>
                        <div className="transfer-to-inner">
                            <div className="to">
                                <FaPiggyBank/>
                                <p>Credio Account </p>
                            </div>
                            <div className="to">
                                <FaPiggyBank/>
                                <p>Credio Account </p>
                            </div>
                        </div>
                    </div>
                    <div className="transfer-cred">
                        <div className="transfer-send">
                            <p>Sending Account </p>
                            <select>
                                <option>Sub Account</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Transfer;