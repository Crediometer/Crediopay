import './Main.css'
const Main = () => {
    return ( 
        <div className="main-con">
            <div className="main-top">
                <p>Showing 0 - 1 Main Account</p>
                <button>+ Add Account</button>
            </div>
            <div className="main-body">
                <div className="main-body-inner">
                    <p className='main-account-name'>Test Ventures</p>
                    <p className='main-account-phone'>09083736822</p>

                    <div className="main-balance">
                        <div className="main-ava-balance">
                            <p className='main-ava-text'>Available Balance</p>
                            <h1 className='main-amount'>N 68,485.26</h1>
                        </div>
                        <div className="main-current">
                            <p>Current</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Main;