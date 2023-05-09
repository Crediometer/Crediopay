import styles from './Payment.module.css'
const Payment = () => {
    const circleWidth = 180
    const percentage = 35
    const radius = 85
    const dashArray = radius * Math.PI * 2
    const dashOffset = dashArray - (dashArray * percentage) / 100; 
    return ( 
        <div className={styles.Payment}>
            <p className={styles.paymentHead}>Payment Limit </p>
            <div className={styles.paymentCircle}>
                <p className={styles.paymentAmount}>NGN 1,000,000</p>
                <p className={styles.paymentLimit}>Limit (you can’t get payed over one million with this account)</p>
                <div className={styles.paymentCircleInner}>
                    <svg
                    width={circleWidth}
                    height={circleWidth}
                    viewBox={`0 0 ${circleWidth} ${circleWidth}`}
                    >
                    <circle
                        cx={circleWidth / 2}
                        cy={circleWidth / 2}
                        strokeWidth="10px"
                        r={radius}
                        className={styles.circleBackground}
                    />
                    <circle
                        cx={circleWidth / 2}
                        cy={circleWidth / 2}
                        strokeWidth="10px"
                        r={radius}
                        className={styles.circleProgress}
                        style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset
                        }}
                        transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                    />
                        <text 
                            x='50%' 
                            y="50%" 
                            dy='0.3em' 
                            textAnchor='middle'
                            className={styles.circleText}
                        >
                            NGN378,032
                        </text>
                    </svg>
                </div>
                <div className={styles.circleLabel}>
                    <div className={styles.paid}>
                        <div></div>
                        <p>Paid Transaction</p>
                    </div>
                    <div className={styles.limit}>
                        <div></div>
                        <p>Limit</p>
                    </div>
                    <div className={styles.amount}>
                        <div></div>
                        <p>Amount</p>
                    </div>
                </div>
            </div>
            <button className={styles.paymentButton}>Upgrade Business</button>
        </div>
    );
}
 
export default Payment;