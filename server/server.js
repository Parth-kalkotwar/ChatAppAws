const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/UserModel');



const app = express();

mongoose.connect('mongodb://localhost:27017/chatAppDb',{ useUnifiedTopology: true,useNewUrlParser: true });
//mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());

if(process.env.NODE_ENV !== 'production') {
    app.use(cors())
}

app.get('/',(req,res) => {
    res.send('ok')
})

app.post('/api/register',(req,res) => {
    //console.log(req.body);
    const newUser = new User({ email: req.body.email,password: req.body.password});
    newUser.save().then(() => console.log('User Added'));
    res.json({status:"ok"})
})

app.post('/api/login',async (req,res) => {
    console.log(req.body);
    const {email,password} = req.body;
    const user = await User.findOne({email,password}).lean();
    //console.log(user)
    if(!user) {
        res.json({status:'error', error:'Not Found'});
    }
    res.json({status:'ok',data:user})
})

app.listen(1337)