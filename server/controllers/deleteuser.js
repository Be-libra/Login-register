const handleDelete = (req,res,db)=>{
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
}
module.export = {
    handleDelete: handleDelete
  };