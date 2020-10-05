const jwt = require('jsonwebtoken')
const models = require('../models/index')
const User = models.User;
const bcrypt = require('bcrypt')

exports.Login = (data) => {
    return new Promise((resolve, reject) =>{
        User.findOne({
            where:{
                email: data.email
            }
        }).then(emailFound=>{
            if(!emailFound){
                return reject({success: false, message: 'There was no account found with that email!'})
            }

            if(bcrypt.compareSync(data.password, emailFound.Password)){
                emailFound.Online = true
                emailFound.update()
                let token = jwt.sign(emailFound.Email, 'k33p3m0ut#')
                return resolve({user: emailFound, token: token})
            }else{
                return reject({success: false, message: 'Password was incorrect. Please try again!'})
            }

        }).catch(err=>{
            console.log(err)
            return reject({success: false, message: 'There was an internal problem!'})
        })
    })
}
