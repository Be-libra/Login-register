import React,{useState} from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Update from './Update'



function App() {
  let [route,setRoute] = useState('Login')
  let [isSignIn,setIsSignIn] = useState(false)
  let [userId,setUserId] = useState(0)
  let [userName,SetName] = useState('')
  let [email,setEmail] = useState('')



  const loadUser =(user)=>{
    setUserId(user.id)
    SetName( user.name)
    setEmail(user.email)
  }

  const changeRoute =(route)=>{
    setRoute(route)

  }
  const checkSignin =()=>{
    if(userId!==0){
      setIsSignIn(true);
      
    }
    return isSignIn
  }


    if(route==='Login'){
      return < Login loadUser={loadUser} changeRoute={changeRoute} />
    }
    else if(route === 'Register'){
      return <Register loadUser={loadUser} changeRoute={changeRoute} />
    }
    else if(route === 'Logout'){
      return (< Login loadUser={loadUser} changeRoute={changeRoute} />);
    }
    else if(route==='Update'){
      return <Update loadUser={loadUser} id={userId} name={userName} changeRoute={changeRoute}  />
    }
    else if(checkSignin){
      return <Home email={email} name={userName} changeRoute={changeRoute} id={userId} />
    }
 
 }

export default App;
