import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Card from "../../Components/Card/Card";
import './Vas.css';
import { connect } from "react-redux";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { HiWifi } from "react-icons/hi2";
import { RiWifiFill } from "react-icons/ri";
import games from '../../Assets/icon-park-solid_game-ps.svg'
import Airtime from "./Airtime";
import Data from "./Data";
import Cable from "./Cable";
import Electricity from "./Electricity";
import preloader from '../../Assets/preloader.json'
import { fetchvascategory, fetchvasservices } from "../../Redux/Vas/VasAction";
import { fetchvault } from "../../Redux/Vault/VaultAction";
import { fetchgetprofile } from "../../Redux/Getprofile/GetprofileAction";
import LottieAnimation from "../../Lotties";
const Vas = ({
    fetchvasservices,
    fetchgetprofile,
    fetchvascategory,
    fetchvault,
    cid,
    vault,
    loading,
    data
}) => {
    const [show, setShow] = useState(null);
    const [sidebar, setSidebar] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    // const [style, setStyle] = useState(getStyle());
    // const [style2, setStyle2] = useState(getStyle2());
    // const [style3, setStyle3] = useState(getStyle3());
    const toggleSidebar = () => {
      setSidebar((prevState) => !prevState);
    };
    const handleAirtime = (id)=>{
        setShow(1)
        setIsClicked(true);
        fetchvascategory(id)
    }
    const handleData = (id)=>{
        setShow(2)
        setIsClicked(true);
        fetchvascategory(id)
    }
    const handleCable = (id)=>{
        setShow(3)
        setIsClicked(true);
        fetchvascategory(id)
    }
    const handleElectricity = (id)=>{
        setShow(4)
        setIsClicked(true);
        fetchvascategory(id)
    }
    const getStyle = () => {
        if (window.innerWidth < 1000) {
            return{
                justifyContent: isClicked && 'center',
                display: isClicked && 'none',
            }
        } else {
            return {
                background: isClicked && 'transparent',
                justifyContent: isClicked && 'space-between',
                alignItems: isClicked && 'center',
            };
          }
        

    };
    const getStyle3 = () => {
        if (window.innerWidth < 1000) {
            return{
                justifyContent: isClicked && 'center',
            }
        } else {
            return {
                background: isClicked && 'transparent',
                justifyContent: isClicked && 'space-between',
                alignItems: isClicked && 'center',
            };
          }
        

    };
    const getStyle2 = () => {
        if (window.innerWidth < 1000) {
            return{
                width: isClicked && '100%',
            }
        } else {
            return {
                width: isClicked && '45%',
            };
        }
    };
    useEffect(() => {
            getStyle();
            getStyle2();
            getStyle();
    
        window.addEventListener('resize', getStyle);
        window.addEventListener('resize', getStyle2);
        window.addEventListener('resize', getStyle3);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', getStyle)
            window.removeEventListener('resize', getStyle2)
            window.removeEventListener('resize', getStyle3)
        };
    }, []);
    
    useEffect(() => {
        fetchvault(cid)
        fetchgetprofile()
        fetchvasservices()
    }, [cid]);
    return ( 
        <div className="test">
            <div className="left">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} toggle={toggleSidebar}/>
            </div>
            <div className="right">
                <Navbar toggle={toggleSidebar} mode={sidebar}/>
                <div className="content">
                {loading  ?( 
                <div className="preloader">
                    <LottieAnimation data={preloader} />
                </div> 
                ):(
                    <div className="vas-outer" style={getStyle3()}>
                        <div className="vas" style={getStyle()}>
                            <Card balance={vault?.accountBalance}/>
                            <h1 className="vas-services">Service</h1>
                            <div className="services">
                                {data?.map((service)=>{
                                    return(
                                        <div className="service" onClick={()=>{
                                            {(service._id === "61efab78b5ce7eaad3b405d0") && (handleElectricity(service._id))}
                                            {(service._id === "61efaba1da92348f9dde5f6c") && (handleAirtime(service._id))} 
                                            {(service._id === "61efabb2da92348f9dde5f6e") && (handleData(service._id))}
                                            {(service._id === "61efabbeda92348f9dde5f70") && (handleCable(service._id))}
                                        }}>
                                            <div className="service-icon phone-icon">
                                                {(service._id === "61efab78b5ce7eaad3b405d0") && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                                        <path d="M9.01953 3.49121V17.218H12.7632V28.449L21.4984 13.4743H16.5069L21.4984 3.49121H9.01953Z" fill="#F79E1B"/>
                                                    </svg>
                                                )} 
                                                {(service._id === "61efaba1da92348f9dde5f6c") && (<FaPhoneAlt/>)}
                                                {(service._id === "61efabb2da92348f9dde5f6e") && (<RiWifiFill/>)}
                                                {(service._id === "61efabbeda92348f9dde5f70") && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                        <path d="M31.655 4.53217C31.9011 4.49941 32.1501 4.56574 32.3472 4.71656C32.5444 4.86739 32.6736 5.09037 32.7063 5.33644C32.7391 5.5825 32.6728 5.83151 32.522 6.02868C32.3711 6.22584 32.1482 6.35502 31.9021 6.38778L22.1074 7.69307V12.3227C22.1074 13.1264 21.8741 13.8764 21.471 14.5065H24.2912C25.5323 14.5065 26.7226 14.9996 27.6002 15.8772C28.4778 16.7547 28.9708 17.945 28.9708 19.1861V23.8657H6.50883V19.1861C6.50883 17.945 7.00185 16.7547 7.87944 15.8772C8.75703 14.9996 9.9473 14.5065 11.1884 14.5065H18.0518C18.631 14.5065 19.1864 14.2765 19.596 13.8669C20.0055 13.4574 20.2356 12.9019 20.2356 12.3227V7.94265L3.82587 10.1314C3.5798 10.1644 3.33073 10.0982 3.13345 9.94749C2.93616 9.79678 2.80683 9.57387 2.7739 9.3278C2.74097 9.08173 2.80714 8.83266 2.95785 8.63538C3.10856 8.4381 3.33147 8.30876 3.57754 8.27583L20.2368 6.0546V5.45935C20.2368 5.21113 20.3354 4.97308 20.511 4.79756C20.6865 4.62204 20.9245 4.52344 21.1727 4.52344C21.421 4.52344 21.659 4.62204 21.8345 4.79756C22.0101 4.97308 22.1087 5.21113 22.1087 5.45935V5.80502L31.655 4.53217ZM28.972 25.7375V28.5453C28.972 28.996 28.8832 29.4424 28.7107 29.8588C28.5382 30.2752 28.2853 30.6536 27.9665 30.9723C27.6477 31.291 27.2692 31.5437 26.8527 31.7161C26.4362 31.8885 25.9899 31.9771 25.5391 31.977H9.94052C9.03038 31.977 8.15751 31.6154 7.51395 30.9718C6.87038 30.3283 6.50883 29.4554 6.50883 28.5453V25.7375H28.972Z" fill="black"/>
                                                    </svg>
                                                )}
                                            </div>
                                            <p>{service.identifier}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="vas-content" style={getStyle2()}>
                            { (show === 1) &&  <Airtime/>}
                            { (show === 2) &&  <Data/>}
                            { (show === 3) &&  <Cable/>}
                            { (show === 4) &&  <Electricity/>}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    
    return {
        loading: state.vas.loading,
        data: state?.vas?.data?.data,
        cid: state?.getprofile?.data?.client?._id,
        vault:state?.vault?.data?.data?.mainAccount
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchvasservices: () => dispatch(fetchvasservices()),
        fetchgetprofile: () => dispatch(fetchgetprofile()),
        fetchvascategory: (id) => dispatch(fetchvascategory(id)),
        fetchvault: (id) => dispatch(fetchvault(id))
    };
}; 
export default connect(mapStoreToProps, mapDispatchToProps)(Vas);