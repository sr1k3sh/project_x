import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { auth } from './../firebase/Firebase';
import { useHistory } from 'react-router-dom';
import Home from './Home';
const ProfilePage = () => {
    const history = useHistory();
    const user = useContext(UserContext);
    if(user!==null && typeof user!='undefined'){
        const {photoURL, displayName, email} = user;
        return (
            <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
              <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
                <div
                  style={{
                    background: `url(${photoURL||'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'}})  no-repeat center center`,
                    backgroundSize: "cover",
                    height: "200px",
                    width: "200px",
                    borderRadius:'50%',
                    overflow:'hidden'
                  }}
                  className="border border-blue-300"
                >
                    <img width="100%" height="100%" src={photoURL||"https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"} alt="profile-pic"></img>
                </div>
                <div className = "md:pl-4">
                <h2 className = "text-2xl font-semibold">{displayName}</h2>
                <h3 className = "italic">{email}</h3>
                </div>
              </div>
              
              <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick={()=>{auth.signOut()}}>Sign out</button>
            </div>
          );
    }
    else{
        console.log('check')
        return(
        //    <Home></Home>
            <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
                <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
                    <div
                    style={{
                        background: `url('https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
                        backgroundSize: "cover",
                        height: "200px",
                        width: "200px"
                    }}
                    className="border border-blue-300"
                    ></div>
                    <div className = "md:pl-4">
                    <h2 className = "text-2xl font-semibold"></h2>
                    <h3 className = "italic">Signin page</h3>
                    </div>
                </div>
                <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick={history.push('/sign-in')}>Sign signin</button>
            </div>
        )
    }
}

export default ProfilePage;