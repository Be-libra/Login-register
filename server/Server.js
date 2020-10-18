const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
// const profile = require('./controllers/profile');
// const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'hello',
    database : 'assignment'
  }
});

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send(db.users) })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.post('/del',(req,res)=>{
    const {id} =req.body
    db.select('email').from('users')
    .where('id','=',id)
    .then(mail=>{
        const {email} = mail[0]
        db('login')
        .where('email','=',email)
        .del()
        .then(count=>{
            if(count){
                db('users').where('id','=',id).del()
                .then(check=>{
                    if(check){
                        res.status(200).json("deleted succesfully")
                    }
                })
            }
            else{
                res.status(400).json("unsuccesful")
            }
        })
    })
})

app.put('/update',(req,res)=>{
    const {name,id} = req.body
     db('users').where('id','=',id)
    .update('name',name)
    .then(count =>{
        return db.select('*').from('users').where('id','=',id)
        .then(user=>{
            res.json(user[0])
        })
        .catch(err => res.status(400).json('something goes wrong'))
    })
    .catch(err => res.status(400).json('unable to update user'))
})
app.listen(3001, ()=> {
  console.log('app is running on port 3001');
})