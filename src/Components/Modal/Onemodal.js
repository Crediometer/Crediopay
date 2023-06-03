import { useState } from 'react';
import './Onemodal.css'
import { FaTimes } from 'react-icons/fa';
const Onemodal = ({togglemodal}) => {
    const [show, setShow] = useState(1);
    const handleSetting = ()=>{
        setShow(1)
    }
    const handleOverview = ()=>{
        setShow(2)
    }
    return ( 
        <div className="modal-background">
            <div className="modal">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                <p className='create-payment'>New payment link</p>
                <div className="onemodal-button">
                    <button onClick={handleSetting} className="static">Static</button>
                    <button onClick={handleOverview} className="dynamic">Dynamic</button>
                </div>
                <div className="onetime-modal">
                    {(show === 1) && (
                        <form>
                        <input
                                type="text"
                                placeholder="Enter Amount"
                                className="onemodal-field"
                            >
                            </input>
                            <input
                                type="text"
                                placeholder="-New link-"
                                className="onemodal-field-2"
                            >
                            </input>
                            <input type="submit" value="Create" className="modal-submit"></input>
                        </form>
                    )}
                     {(show === 2) && (
                        <form>
                            {/* <input
                                type="text"
                                placeholder="Enter Amount"
                                className="onemodal-field"
                            >
                            </input> */}
                            <input
                                type="text"
                                placeholder="-New link-"
                                className="onemodal-field-2"
                            >
                            </input>
                            <input type="submit" value="Create" className="modal-submit"></input>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default Onemodal;