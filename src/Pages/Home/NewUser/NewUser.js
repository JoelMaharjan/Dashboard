import './newuser.css'
function NewUser(){
    return(
        <div className='newUser'>
            <h1>New User</h1>
            <form className='newUserForm'>
                <div className='newUserItems'>
                    <label>Full Name</label>
                    <input type='text' placeholder='Name' />        
                </div>
                <div className='newUserItems'>
                    <label>Username</label>
                    <input type='text' placeholder='Username' />        
                </div>
                <div className='newUserItems'>
                    <label>Contact</label>
                    <input type='text' placeholder='+977' />        
                </div>
                <div className='newUserItems'>
                    <label>Address</label>
                    <input type='text' placeholder='Address' />        
                </div>
                <div className='newUserItems'>
                    <label>Email</label>
                    <input type='text' placeholder='Email' />        
                </div>
                <div className='newUserItems'>
                    <label>Gender</label>
                    <div className='userGender'>
                        <input type='radio' id='male' value='male'/>
                        <label for='male'>Male</label> 
                        <input type='radio' id='female' value='female'/>
                        <label for='female'>Female</label>   
                        <input type='radio' id='others' value='others'/>
                        <label for='others'>Others</label>    
                    </div> 
                </div>
                    <button className='userbtn'>Create </button>
            </form>
        </div>
    )
}

export default NewUser;
