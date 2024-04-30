import { useState } from 'react';
import Onemodal from '../../Components/Modal/Onemodal';
import './Onetime.css'
const Onetime = () => {
    const [modal, setModal] = useState(false);
    const handleModal = ()=>{
        setModal(!modal)
    }
    return ( 
        <div className="onetime">
            <p className="onetime-head">One -time payment link </p>
            <p className="onetime-body">The one time payment link allows you to send a link to customers this link would be inactive in 48hours </p>
            <div className="onetime-button">
                <button onClick={handleModal}>New Payment Link</button>
            </div>
            {modal && (
                <Onemodal togglemodal={handleModal}/>
            )}
        </div>
    );
}
 
export default Onetime;