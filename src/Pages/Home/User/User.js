import './user.css'
import { PermIdentity, Email, LocationOn, LocalPhone } from '@mui/icons-material';

const userData = {
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg',
    username: 'Joel Maharjan',
    title: "Frontend Developer"
}

function User(){
    return(
        <div className='user'>
            <div className='userTitle'>
                <h1 className='userEdit'>Edit</h1>
                <button className='userCreate'>Create </button>
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
                    
                        <div className='userInfo'>

                        </div>
                    </div>
                </div>
                
                <div className='userUpdate'>update</div>
            </div>
            
        </div>
    )
}

export default User;