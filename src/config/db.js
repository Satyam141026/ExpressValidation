const mongoose=require('mongoose')
const env=require('dotenv')

env.config()
//mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pxfed.mongodb.net/student?retryWrites=true&w=majority`)
mongoose.connect(`mongodb+srv://satyam:satyam123@cluster0.pxfed.mongodb.net/student?retryWrites=true&w=majority`)
.then(()=>{
    console.log('Db connected to database of the mongodb')
})
.catch(()=>{
    console.log('Failed Connection of the db')
})
