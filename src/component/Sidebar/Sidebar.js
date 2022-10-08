import {Home, Timeline, Badge, Message, MailOutline, Feedback, Person, BarChart, Report } from '@mui/icons-material';
import './sidebar.css'
function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Home className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Badge className='sidebarIcon' />
                            Employees
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Quick Menu</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Person className='sidebarIcon'/>
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className='sidebarIcon' />
                            Charts
                        </li>
                        <li className="sidebarListItem">
                            <Report className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Notifications</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Message className='sidebarIcon'/>
                            Message
                        </li>
                        <li className="sidebarListItem">
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className='sidebarIcon' />
                            Feedback
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar;