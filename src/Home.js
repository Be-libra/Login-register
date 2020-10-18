import React from 'react';

export default function Home(props){
    const onDelete =()=>{
        fetch('http://localhost:3001/del', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id:props.id
      })
    })
      .then(response => response.json())
      .then(message => {
            alert(message)
          props.changeRoute('Register')
        
      })
    }


    const routeChange=(e)=>{
        props.changeRoute(e.target.value);
    }
    return(
        <div>
             <div className=" center tc  mt3">
                    <input onClick={routeChange} className="b center ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Logout"/>
            </div>
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                    <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
                    <h1 className="f3 mb2">{props.name}</h1>
                    <h2 className="f5 fw4 gray mt0">{props.email}</h2>
                    <input onClick={onDelete} className="b center ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="delete"/>
                    <input onClick={routeChange} className="b center ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Update"/>
                </div>
            </article>
           
        </div>
    );
}