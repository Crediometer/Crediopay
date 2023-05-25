import {BiHomeAlt} from 'react-icons/bi';
import {FaWallet, FaUser} from 'react-icons/fa';
import {BsChatFill} from "react-icons/bs";
import {IoHome} from 'react-icons/io5'

export const SidebarDetails = [
    {
        title:"Dashboard",
        icon:<IoHome/>,
        link:"/dashboard"
    },
    {
        title:"Account",
        icon:<FaWallet/>,
        link:"/account"
    },
    {
        title:"Payment",
        icon:<BsChatFill/>,
        link:"/payment"
    },
    {
        title:"Transactions",
        icon:<FaUser/>,
        link:"/transaction"
    },
    {
        title:"Account Statement",
        icon:<FaUser/>,
        link:"/profile"
    },
    {
        title:"Transfer",
        icon:<FaUser/>,
        link:"/transfer"
    },
    {
        title:"Zelle",
        icon:<FaUser/>,
        link:"/zelle"
    },
    {
        title:"Documentation",
        icon:<FaUser/>,
        link:"/profile"
    },
    {
        title:"Settings",
        icon:<FaUser/>,
        link:"/setting"
    },
    {
        title:"Notification",
        icon:<FaUser/>,
        link:"/profile"
    },
]