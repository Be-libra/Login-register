import React,{useState} from 'react';

export default function Update(props) {
    let [name,setName] =useState('')
    const newName=(e)=>{
        setName(e.target.value)
    }
    const onSubmit =()=>{
        fetch('http://localhost:3001/update', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id:props.id,
        name
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

    return (
  <div class="measure">
    <label for="name" class="f6 b db mb2">Name </label>
    <input onChange={newName} id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder={props.name}/>
    <small id="name-desc" class="f6 black-60 db mb2">Update your profile name.</small>
    <div className="lh-copy mt3">
        <input onClick={onSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="update"/>
    </div>
  </div>

);
}