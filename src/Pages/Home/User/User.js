import './user.css'
import { PermIdentity, Email, LocationOn, LocalPhone } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const userData = {
    image: '/image/user.jpg',
    username: 'Joel Maharjan',
    title: "Frontend Developer"
}

function User(){
    return(
        <div className='user'>
            <div className='userTitle'>
                <h1 className='userEdit'>Edit User</h1>
                <Link to = "/newUser">
                    <button className='userCreate'>Create </button>
                </Link>
                
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img src = {userData.image} alt='asd' className='userImg' /> 
                        <div className="userShowTitle">
                            <span className='userName'>{userData.username}</span>
                            <span className='userJob'>{userData.title}</span>
                        </div>
                    <div className = "userShowBottom">
                        <h3 className='userDetailTitle'>Account Details:</h3>
                        <div className="userDetails">
                        <PermIdentity /> 
                    <span className = "accountDetails">joelmaharjan</span> 
                        </div>
                        <div className="userDetails">
                        <LocalPhone /> 
                        <span className = "accountDetails">+977 9818621303</span> 
                        </div>
                        <div className="userDetails">
                        <LocationOn /> 
                        <span className = "accountDetails">Buddhanagar, Kathmandu</span> 
                        </div>
                        <div className="userDetails">
                        <Email /> 
                        <span className = "accountDetails">joelmaharjan23@gmail.com</span> 
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className='userUpdate'>
                    <h2 className='userUpdateTitle'>Update User </h2>
                    <form className='userForm'>
                        <div className='userUpdateItem'>
                            <label>Full Name</label>
                            <input type="text" placeholder = "Name" className="userInput"/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Designation</label>
                            <input type="text" placeholder = "Designation" className="userInput"/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Username</label>
                            <input type="text" placeholder = "Username" className="userInput"/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Contact</label>
                            <input type="text" placeholder = "Contact" className="userInput"/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Address</label>
                            <input type="text" placeholder = "Adress" className="userInput"/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Email</label>
                            <input type="text" placeholder = "Email" className="userInput"/>
                        </div>
                        <div className='userUpdateItem'>
                            <input type="file" id='file'/>
                        </div>  
                            <button className='userUpdateBtn'>Update</button>
                    </form>


                </div>
            </div>
            
        </div>
    )
}

export default User;