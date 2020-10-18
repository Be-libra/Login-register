import React,{useState} from 'react';

export default function Register(props){
    let [email,setEmail] = useState('')
    let [name,setName] = useState('')
    let [password,setPassword] = useState('')
    const onEmailChange = (e)=>{
        setEmail(e.target.value)
    }
    const onPasswordChange = (e)=>{
        setPassword(e.target.value)
    }
    const onNameChange = (e)=>{
        setName(e.target.value)
    }
    const onSignup =()=>{
        fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password,
        name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          props.loadUser(user)
          props.changeRoute('Login')
        }
      })
    }

    return(
            <div>
                <h2 className='tc'>New User Get Registered</h2>
                <article className=" center tc pa4 black-80">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
                            <input onChange={onEmailChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" for="email-address">Name</label>
                            <input onChange={onNameChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="UserName"  id="Name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" for="password">Password</label>
                            <input onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="mt3"><input onClick={onSignup} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"/></div>
                </article>
            </div>


    );
}