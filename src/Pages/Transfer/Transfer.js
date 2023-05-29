import { FaPiggyBank } from 'react-icons/fa';
import {Switch} from 'antd'
import {BsBank2} from 'react-icons/bs'
import credio from '../../logo.png'
import './Transfer.css'
import Input from '../../Components/Inputfield/Input';
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
                                <div className="to-image">
                                    <img src={credio}></img>
                                </div>
                                <p>Credio Account </p>
                            </div>
                            <div className="to">
                                <div className="to-image">
                                    <BsBank2/>
                                </div>
                                <p>Other Bank</p>
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
                        <div className="transfer-account">
                            <div className="transfer-account-left">
                                <p className='account-left-head'>Test Ventures</p>
                                <p className='account-left-text'>09083736822</p>
                            </div>
                            <div className="transfer-account-right">
                                <div className="transfer-available">
                                    <p className='available-2'>Available Balance</p>
                                    <div className='sub-2'>
                                        <p>Sub Acc</p>
                                    </div>
                                </div>
                                <p className='balance-2'>N 68,485.26</p>
                            </div>
                        </div>
                    </div>
                    <div className="transfer-form">
                        <form>
                            <div className="form-1">
                                <div className="input">
                                    <label>Beneficiary’s  Bank </label>
                                    <input type="text" placeholder="0198604538"></input>
                                </div>
                            </div>
                            <div className="form-1">
                                <div className="input">
                                    <label>Beneficiary’s  Account Number </label>
                                    <input type="text" placeholder="0198604538"></input>
                                </div>
                            </div>
                            <div className="form-1">
                                <div className="input">
                                    <label>Beneficiary’s Name </label>
                                    <input type="text" placeholder="0198604538"></input>
                                </div>
                            </div>
                            <div className="save-ben">
                                <p>save as beneficiary</p>
                                <div className="save-ben-switch">
                                    <Switch/>
                                </div>
                            </div>
                            <div className="form-1">
                                <div className="input">
                                    <label>Amount</label>
                                    <input type="text" placeholder="NGN 5,000"></input>
                                </div>
                            </div>
                            <div className="form-1">
                                <div className="input">
                                    <label>Narration</label>
                                    <input type="text" placeholder="e.g School Fees"></input>
                                </div>
                            </div>
                            <div className="form-button">
                                <button className='reset'>Reset</button><br></br>
                                <button className='transfer-button'>Transfer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Transfer;