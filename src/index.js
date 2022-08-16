const express=require('express')
const app=express();
const db=require('./config/db')
const {body,validationResult}=require('express-validator')


//midleware
app.use(express.json())

//Route
   // password must be at least 5 chars long
app.post('/api', // username must be an email
body('username').isEmail(), body('password').isLength({ min: 5 }),((req,resp)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        resp.status(400).json({ errors: errors.array() })
    }
    else{
      
        return resp.status(201).json({msg:'Correct Validation',result:req.body});
    }
    
}))






app.listen(process.env.PORT || 5001,()=>{
    console.log('the db is connection succesful the port is hte '+process.env.PORT)

})