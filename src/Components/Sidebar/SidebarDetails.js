import {BiHomeAlt} from 'react-icons/bi';
import {FaWallet, FaUser} from 'react-icons/fa';
import {BsChatFill, BsPeople, BsPerson, BsSliders} from "react-icons/bs";
import {IoHome} from 'react-icons/io5';
import {HiOutlineHome} from 'react-icons/hi2';
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
        icon:<BsSliders/>,
        link:"/account"
    },
    {
        title:"Payment",
        icon:<SiContactlesspayment/>,
        link:"/payment"
    },
    {
        title:"Trans History",
        icon:<BsSliders/>,
        link:"/transaction"
    },
    {
        title:"Acct Statement",
        icon:<BsSliders/>,
        link:"/profile"
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
        title:"Documentation",
        icon:<BsPerson/>,
        link:"/profile"
    },
    {
        title:"Settings",
        icon:<FiSettings/>,
        link:"/setting"
    },
    {
        title:"Notification",
        icon:<IoNotificationsOutline/>,
        link:"/profile"
    },
]