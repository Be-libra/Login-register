const handleUpdate =(req,res,db)=>{
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
}
module.exports={
    handleUpdate:handleUpdate
}