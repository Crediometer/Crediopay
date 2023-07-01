import { useEffect, useState } from 'react';
import MultiStepProgressbar from '../../Components/Multiformbar/MultiStepProgressbar';
import styles from './Activate.module.css'
import Personal from '../../Components/Multiformbar/Personal';
import Business from '../../Components/Multiformbar/Business';
import Verification from '../../Components/Multiformbar/Verification';
import Payout from '../../Components/Multiformbar/Payout';
const Activate = () => {
    const [index, setIndex] = useState(1)

    const nextButton = () => {
        window.scrollTo(0, 0);
        if (index < 4){
            setIndex(prevIndex => prevIndex + 1)
        }
    }
    return ( 
        <div className={styles.activate}>
            <p className={styles.activateHead}>Activate Your Business</p>
            <p className={styles.activateBody}>To activate your business to start sending and receiving money<br></br> you would nedd to prove the following document needed  </p>
            <div className={styles.activateProgress}>
                <MultiStepProgressbar step={index}/>
            </div>
            <div className={styles.activateFormOuter}>
                <div className={styles.activateForm}>
                    {index===1 && (<Personal next={nextButton}/>)}
                    {index===2 && (<Business/>)}
                    {/* {index===3 && (<Verification/>)} */}
                    {index===4 && (<Payout/>)}
                </div>
                {/* <button onClick={nextButton} className={styles.activateButton}>Save</button> */}
            </div>
        </div>
    );
}
 
export default Activate;