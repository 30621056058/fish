const { verify } = require("jsonwebtoken")
const jwt = require("jsonwebtoken")
const {secrekey} = require('./config')
const basicAuth = require("basic-auth")
class auth{
    constructor(level){
        auth.user = 1
        auth.admin = 2
        this.level = level
    }
    get middleware(){
       
        // console.log('token')
     return  async (req,res,next)=>{
       
       const token =  basicAuth(req)
      console.log(token)
      var errmsg = "token不合法"
       if(!token || token.name  ==  ''){
        res.send(errmsg)
        return
       }
    
       try{
        var decodeed =  jwt.verify(token.name,secrekey)
       }catch(e){
         if(e.name ==="tokenExpiredError"){
          errmsg = "token已过期"
         }
         return
       }
       //1 >2
       console.log(this.level,decodeed.scope)
       if( this.level  >= decodeed.scope  ){
        await next()
       
       }else{
        res.send({
            mes:"权限不够",
            leveve:this.level,
            de:decodeed.scope
        })
        
       }
     
        }
    }
    static  verifytoken(token){
        try{
            jwt.verify(token,secrekey)
            return true
        }catch(e){
            console.log(e)
            return false
        }
    }
}
module.exports = auth