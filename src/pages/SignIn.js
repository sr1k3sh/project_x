import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './../firebase/Firebase';
import {signInWithGoogle} from './../firebase/Firebase'
const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const onChangehanlder=(e)=>{
        const {name,value}= e.currentTarget;
        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
          setPassword(value);
        }
    }
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
          setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
    return (
        <div className="flex-column align-center justify-center">
            <div>Sign in</div>
            <div className="flex-coumn">
                {error!=null && <div>{error}</div>}
                    <form>
                        <div className="flex-row justify-space-around">
                            <label className="width-50">username</label><input className="width-50" type='email' name="userEmail" value={email} placeholder="sr1k3sh@gmail.com" onChange={(e)=>onChangehanlder(e)}></input>
                        </div>
                        <div className="flex-row justify-space-around">
                            <label className="width-50">password</label><input className="width-50" type='password' name="userPassword" value={password} placeholder="******" onChange={(e)=>onChangehanlder(e)}></input>
                        </div>
                        <button onClick={(e)=>{signInWithEmailAndPasswordHandler(e,email,password)}}>sumbit</button>
                    </form>
                    <div>dont have account? <Link to='/sign-up'>Sign up</Link></div>
                    <Link to="/password-reset">Forget password</Link>  
            </div>
            <button onClick={signInWithGoogle}>sign in with google</button>
        </div>
    );
}

export default SignIn;