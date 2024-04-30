import LottieAnimation from '../../Lotties';
import preloader from '../../Assets/preloader.json'
const LoadingModal = () => {
    return ( 
        <div className="modal-background">
            <div className="modal">
                <div className="onetime-modal">
                    <div className="animation">
                        <LottieAnimation data={preloader}/>
                    </div>
                    {/* <p className="create-payment">{error}</p>
                    <button className="modal-submit" onClick={togglemodal}>
                        Retry
                    </button> */}
                </div>
            </div>
        </div>
    );
}
 
export default LoadingModal;