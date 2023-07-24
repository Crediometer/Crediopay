import {BiBookmarkAltMinus, BiHomeAlt} from 'react-icons/bi';
import {FaWallet, FaUser} from 'react-icons/fa';

import {BsChatFill, BsCreditCard2Back, BsPeople, BsPerson, BsSliders} from "react-icons/bs";
import {IoHome} from 'react-icons/io5';
import {HiOutlineHome,HiArrowsRightLeft} from 'react-icons/hi2';
import {SiContactlesspayment} from 'react-icons/si';
import {FiSettings} from 'react-icons/fi';
import {IoNotificationsOutline} from 'react-icons/io5' 
export const SidebarDetails = [
    {
        title:"Dashboard",
        icon:<HiOutlineHome/>,
        link:"/dashboard"
    },
    {
        title:"Account",
        icon:<BsPerson/>,
        link:"/account"
    },
    {
        title:"Payment",
        icon:<SiContactlesspayment/>,
        link:"/payment"
    },
    {
        title:"Trans History",
        icon:<HiArrowsRightLeft/>,
        link:"/transaction"
    },
    {
        title:"Acct Statement",
        icon:<BiBookmarkAltMinus/>,
        link:"/statement"
    },
    {
        title:"Transfer Form",
        icon:<SiContactlesspayment/>,
        link:"/transfer"
    },
    {
        title:"Zelle",
        icon:<BsPeople/>,
        link:"/zelle"
    },
    {
        title:"vas",
        icon:<BsCreditCard2Back/>,
        link:"/vas"
    },
    {
        title:"Settings",
        icon:<FiSettings/>,
        link:"/setting"
    }

]