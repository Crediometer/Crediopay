import sms from '../../sms.png';
import './Document.css'
const Document = () => {
    return ( 
        <div className="documents">
            <div className="document-grid">
                <div className="document">
                    <img src={sms}></img>
                    <p className='document-head'>SMS Deactivation </p>
                    <p className='document-body'>Indemnity </p>
                </div>
            </div>
        </div>
    );
}
 
export default Document;