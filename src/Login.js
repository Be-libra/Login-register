import React,{useState} from 'react';


export default function Login(props){
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    const onEmailChange = (e)=>{
        setEmail(e.target.value)
    }
    const onPasswordChange = (e)=>{
        setPassword(e.target.value)
    }
    const routeChange=()=>{
        props.changeRoute('Register')
    }
    const onLogin =()=>{
        fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password    
        })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          props.loadUser(user)
          props.changeRoute('home')
        }
      })
    }
    return(
        <div>
            <main className="pa4 tc black-80">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0"/>
                    <legend className="f4 tc fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input onChange={onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="password">Password</label>
                        <input onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    <div className="">
                    <input onClick={onLogin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    <input onClick={routeChange} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Register"/>
                    </div>
            </main>
        </div>
    );
}