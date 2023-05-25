import { FaTimes } from 'react-icons/fa';
import './DirectorModal.css'
const DirectorModal = ({togglemodal}) => {
    return ( 
        <div className="modal-background">
            <div className="modal">
                <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div>
                <p className='create-payment'>Add Directors/Users</p>
                <div className="director-modal">
                    <form>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="modal-field"
                        >
                        </input>
                        <input
                            type="text"
                            placeholder="Business name"
                            className="modal-field"
                        >
                        </input>
                        <select>
                            <optgroup>
                                <option>-Role-</option>
                            </optgroup>
                        </select>
                        <input type="submit" value="Save" className="modal-submit"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default DirectorModal;