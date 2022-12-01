const { query } = require('express');
var express = require('express');
const { token } = require('morgan');
var router = express.Router();
const mysql = require('mysql')
var connection = require('../db/sql.js');
const users = require('../username')
const {gener} = require('../utli')
const auth = require("../class");
const { JsonWebTokenError } = require('jsonwebtoken');
const {secrekey} = require('../config')
var tokennum = 1
router.get("/selected",function(req,res){
    var sql  = 'SELECT * from datalist ORDER BY views+collection+yudao+Leavingmessage DESC  limit 2 ';
    var value;
    connection.query(sql,value,function(err,data){
        if(err){
            throw err
        }else{
            res.send(data)
        }
    })
})

router.get("/updatescore",function(req,res){
    var sql  = 'UPDATE user_copy set score =score+1 where username = ? ';
    var value = req.query.username;
    connection.query(sql,value,function(err,data){
        if(err){
            throw err
        }else{
            res.send(data)
        }
    })
})

//subject_paper
router.get("/selectsubjectall",function(req,res){
    var sql  = 'select * from subject_paper where paper_title =?';
    var vlaue = req.query.value
    connection.query(sql,vlaue,function(err,data){
        if(err){
            throw err
        }else{
            res.send(data)
        }
    })
})

router.get("/subjectone",function(req,res){
    var sql  = 'select * from subject_paper where id=?';
    var num = req.query.num
    num+1
   
    connection.query(sql,num,function(err,data){
        if(err){
            throw err
        }else{
            res.send(data)
        }
    })
})

router.get("/submiterror",function(req,res){
    var sql  = 'update  subject_paper set error=?,answer1error=?,answer2error=?,answer3error=?,answer4error=? where id=?';
    var errorvalue = [req.query.errorvalue,req.query.answer1error,req.query.answer2error,req.query.answer3error,req.query.answer4error,req.query.id]
    connection.query(sql,errorvalue,function(err,data){
        if(err){
            throw err
        }else{
            res.send(data)
        }
    })
})


router.post("/a",function(req,res){
    // res.send(req.body)
    let {username,pass} = req.body
    console.log(username,pass)
  const token =  verify(username,parseInt(pass))
  if(!token){
    res.send({
        errcode:10001,
        msg:"用户名不正确"
    })
  }else{
    tokennum = 3
    res.send({
        token:token
      })
  }
  
})

function verify(username,pass){
 const index =  users.findIndex(user=>{
    return user.username == username && user.pass == pass
 })
const user = users[index]
console.log(index)
console.log(user)
if(!user){
    return false
}else{
    
    const token =  gener(users.id,auth.admin)

    return token
}
 

}

router.post("/verify",function(req,res){
    const token = req.body.token
    console.log(token)
    const isvaild =  auth.verifytoken(token)
    res.send(isvaild)
})

router.post('/getconetent',function(req,res){
    // res.send("获取文章")
    console.log(1)
})
const jwt = require("jsonwebtoken")
router.post('/addcontent',(req,res)=>{
    const headers = req.headers;
    const token  =  headers['authorization'].split(' ')[1];
    
    console.log(token)
    jwt.verify(token,secrekey,(err,payload)=>{
        if(err) res.sendStatus(403);
        res.json({mesages:"成功",payload})
    })
});

router.post("/addvalue",new auth(tokennum).middleware,(req,res)=>{
    res.send("新增成功")
})
module.exports = router