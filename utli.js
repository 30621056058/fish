const jwt = require("jsonwebtoken")
const {secrekey,expiresIn} = require('./config')
function gener(uid,scope){
const token =  jwt.sign(
    {
        uid,
        scope
    },
    secrekey,
    {
        expiresIn
    }
    
)
return token
}
module.exports = {
    gener
}