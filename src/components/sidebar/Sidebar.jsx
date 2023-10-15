import './sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to="/" className="link">
                        <li className='sidebarListItem active'>
                            <LineStyleIcon className='sidebarIcon'/>
                            Home
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <TimelineIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <TrendingUpIcon className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className='sidebarList'>
                    <Link to="/users" className="link">
                        <li className='sidebarListItem'>
                            <PermIdentityOutlinedIcon className='sidebarIcon'/>
                            User
                        </li>
                    </Link>
                    <Link to="/products" className='link'>
                        <li className='sidebarListItem'>
                            <ProductionQuantityLimitsOutlinedIcon className='sidebarIcon'/>
                            Product
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <PaidOutlinedIcon className='sidebarIcon'/>
                        Transaction
                    </li>
                    <li className='sidebarListItem'>
                        <BarChartOutlinedIcon className='sidebarIcon'/>
                        Report
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Notification</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <MailOutlinedIcon className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className='sidebarListItem'>
                        <FeedbackIcon className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className='sidebarListItem'>
                        <MessageOutlinedIcon className='sidebarIcon'/>
                        Message
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <WorkOutlineIcon className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className='sidebarListItem'>
                        <TimelineIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <ReportIcon className='sidebarIcon'/>
                        Report
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
