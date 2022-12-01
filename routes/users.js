const { query } = require('express');
var express = require('express');
var router = express.Router();
const mysql = require('mysql')
var connection = require('../db/sql.js');
const {search, options} = require('./index.js');
const multer  = require('multer');
const formidable = require('formidable');
const fs  =require('fs')
var moment = require('moment');


// const upload = multer({ dest: 'uploads/' })



/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  res.cookie("bb", "123456789", {domain:'localhost',maxAge: 600000, path:'/', httpOnly: true});
  console.log(11)
});

router.get("/all", function (req, res) {
  var sha =  req.query.sha
  console.log(sha,'all')
  if(sha!='' && sha!=undefined && sha!=null){
    connection.query('select * from datalist  where  title like ' + "'" + sha + "%'",function(err,data){
      res.send(data)
    })
  }else{
    var query = "select * from datalist  limit 2"
    connection.query(query, function (err, data) {
      // res.send(data)
      // console.log(data)
      connection.query("select * from datalist",function(err,all){
        res.send({
          length:all.length,
          data
        })
      })
    })
  }
  
})

router.get("/datalist_status",function(req,res){
  let value = req.query.status
  let sql = "select * from datalist where status =?"
  connection.query(sql,value,function(err,data){
    if(err) throw err
    res.send(data)
  })
})

router.get("/datalistall",function(req,res){
  connection.query("select * from datalist",function(err,data){
    res.send(data)
  })
})

router.get("/fenyeall", function (req, res) {
  var sql;
  if(req.query.btnvalue=="最新"){
    var sql = "select * from datalist ORDER BY time desc limit 2 OFFSET  ?"
  
  }else if(req.query.btnvalue=="精选"){
    var sql = "SELECT * from datalist ORDER BY views+collection+yudao+Leavingmessage DESC  limit 2 offset ?"
  }
  else if(req.query.btnvalue = "最热"){
    var sql = "select * from datalist ORDER BY views desc limit 2 offset ?"
   
  }else if(req.query.btnvalue = "收藏最多"){
    var sql = "select * from datalist ORDER BY collection desc limit 2 offset ?"
  }else{
    var sql = "select * from datalist ORDER BY collection desc limit 2 offset ?"
  }
  
  data = req.query.num
  if(data == 1){
    data = 0
   }else{
    data = data*2 -2
    // 2 10-5 5  3 15-5 10
   }
  //  if data =1 data=0
  connection.query(sql,data, function (err, result,fields) {
    res.send(result)
    console.log(data)
  })
})
// 2c47GAzhwB5xM4cw
router.get("/save", function (req, res) {
  let num 
  

  sql = "select * from datalist"
  connection.query(sql,function(err,data){
    console.log(data.length)
    num = data.length
  })
  b = req.query.num
  console.log(b)

  let a = 'select * from datalist  limit ' + b
  connection.query(a, function (err, data) {
   
    if (data == null) {
      console.log(err, "cuwu1")

    } else {
      
      if(data.length >=num){
        res.send({
          data,
          alter:"已经没有信息了",
          numvalue:num
        })
      }else{
        res.send({
          data,
          alter:"还有信息",
          numvalue:num
        })
      }
    }
  })
})


router.get("/shaixuan", function (req, res) {
  let shaixuan = req.query.shaixuan
  let a = "select * from datalist where tag =" + "'" + shaixuan + "'"
  console.log(a)
  connection.query(a, function (err, data) {
    if (data != null) {
      res.send(data)
    } else {
      res.send(err)
    }
  })
})

router.get("/search", function (req, res) {
 var searcha = req.query.searcha
  // console.log(search)
  let a = 'select * from datalist  where  title like ' + "'" +"%"+ searcha + "%'"
  
  // let a = "select * from datalist "
  // console.log(a)
  connection.query(a, function (err, data) {
    // res.send(data)
    // console.log(a)
    if (err) {
      console.log(err, "cuwu1")

    } else {
      console.log(a)
      res.send(data)
    }
  })
})



router.get("/searchuser", function (req, res) {
  let sql = "select * from users where username = ?"
  let value = req.query.value
  console.log(value)
  res.cookie("vv", "123456789", {domain:'localhost',maxAge: 600000, path:'/users/searchuser', httpOnly: true});
  connection.query(sql,value, function (err, data) {
    if (err) {
      res.send(err)
      console.log(err)
    } else {
      res.send(data)
    }

  })
})

router.get("/checksearchuser", function (req, res) {
    sql="select * from users where name = ? and password=?"
    data = [req.query.username,req.query.pass]
    res.cookie("username", req.query.username, {domain:'localhost',maxAge: 604800000, path:'/', secure:true});
    console.log(data)
  connection.query(sql,data, function (err, data) {
    if (err) {
      res.send(err),
      console.log(err)
    } else {
      res.send(data),
      console.log(data)
    }

  })
})

router.get("/searchpapervalue", function (req, res) {
  sql ="select * from paper where  paper_tag_one  =  ?"
  data = req.query.paper_tag
  console.log(data)
  connection.query(sql,data,function (err, data) {
    if (data != null) {
      res.send(data)
      // console.log(result)
    } else {
      res.send(err)
    }

  })
})

router.get("/choose", function (req, res) {
  sql ="select * from paper WHERE paper.` useroroffical` =  ?"
  data = req.query.useroroffical
  console.log(data)
  connection.query(sql,data,function (err, data) {  
    if (err) {
      res.send(err)
      // console.log(result)
    } else {
      res.send(data)
    }

  })
})
//积分

'UPDATE users AS u1,user_copy as u2 SET u1.score = u2.score WHERE u1.id = u2.id'
router.get("/monthupdate", function (req, res) {
  sql ="UPDATE users AS u1,user_copy as u2 SET u1.score = u2.score WHERE u1.id = u2.id "
  connection.query(sql,function (err, data) {
   if(err){
    console.log(err)
   }else{
    res.send(data)
   }

  })
})

router.get("/olduserall", function (req, res) {
  sql ="select * from user_copy ORDER BY score desc limit 2 "
 
  connection.query(sql,function (err, data) {
   if(err){
    console.log(err)
   }else{
    res.send(data)
   }

  })
})

router.get("/olduserall", function (req, res) {
  sql ="select * from user_copy ORDER BY score desc limit 2 "
 
  connection.query(sql,function (err, data) {
   if(err){
    console.log(err)
   }else{
    res.send(data)
   }

  })
})

router.get("/newuserall", function (req, res) {
  sql ="select * from users ORDER BY score desc limit 2 "
  res.cookie("nn", "123456789", {domain:'localhost',maxAge: 600000, path:'/', httpOnly: true,secure:true});
  connection.query(sql,function (err, data) {
   if(err){
    console.log(err)
   }else{
    res.send(data)
   }

  })
})

router.get("/updateuser", function (req, res) {
  sql ="update users set score = ? "
  value =req.query.score
 
  connection.query(sql,function (err, data) {
   if(err){
    console.log(err)
   }else{
    res.send(data)
   }

  })
})
//积分
router.get("/searchpapervaluetag", function (req, res) {
  sql ="select * from paper where  paper_tag_one = ?"
  data = req.query.tag
  connection.query(sql,data,function (err, data) {
    if (data != null) {
      res.send(data)
      // console.log(result)
    } else {
      res.send(err)
    }

  })
})



router.get("/searchpapervaluesubjecttype", function (req, res) {
  sql ="select * from datalist where  subjecttype = ?"
  data = req.query.subjecttype
  console.log(data)
  connection.query(sql,data,function (err, data,fields) {
    if (data != null) {
      res.send(data)
      // console.log(result)
    } else {
      res.send(err)
    }

  })
})

router.get("/searchpapervaluedifflcult", function (req, res) {
  sql ="select * from datalist where  difflcult = ?"
  data = req.query.difflcult
  console.log(data)
  connection.query(sql,data,function (err, data,fields) {
    if (data != null) {
      res.send(data)
      // console.log(result)
    } else {
      res.send(err)
    }

  })
})

router.get("/update", function (req, res) {
  let id = req.query.id
  let updata = req.query.updata
  let score = req.query.score
  let sex = req.query.sex
  let introduction = req.query.introduction
  let interest = req.query.interest
  let state = req.query.state
  let email = req.query.email
  let Registration_time =  moment(Date.now()).format('YYYY-MM-DD ')
  let img = req.query.img
  let tag = req.query.tag
  let sql = 'update users set name=?,score=?,sex=?,introduction=?,interest=?,state=?,email=?,Registration_time=?,img=?,tag=? where id=?'
  let data = [updata,score,sex,introduction,interest,state,email,Registration_time,img,tag,id]  
  connection.query(sql, data, function (err, result, fields) {
    if (err) throw err;
    console.log(result)
    if (result.affectedRows == 1) console.log("更新成功")
    res.send("更新成功")
  })
})
//testpaper
router.get("/papersearch",function(req,res){
  // let sql = "select * from paperall"
  // let data = [1] 
  connection.query("select * from paper ORDER BY paper_data desc limit 5",function(err,result,fields){
    if (err) console.log(err);
   console.log("查询成功",result)
   res.send(result)
      // return
  })
})

router.get("/thenewpaper",function(req,res){
  let font = req.query.font
  var sql;
  // let data = req.query.num
  // if(data == 1){
  //   data =0
  // }else{
  //   data =  data *5 -5
  // }
  if(font =="最新"){
    var sql = "select * from paper  ORDER BY 	paper.paper_data desc limit 5 "
  }else{
    var sql = "select * from paper  ORDER BY 	paper.looknum desc limit 5 "
  }
  connection.query(sql,function(err,data){
    if(err){
      console.log(err),
      res.send(err)
    }else{
      res.send(data)
    }
  })
})


router.get("/papersearchall",function(req,res){
  // let sql = "select * from paperall"
  // let data = [1] 
  connection.query("select * from paper ",function(err,result,fields){
    if (err) console.log(err);
   console.log("查询成功",result)
   res.send(result)
      // return
  })
})

router.get("/papersearchsome",function(req,res){
  let sql = "select * from paper  limit 5 offset ?"
 
     let data = req.query.num
     if(data == 1){
      data = 0
     }else{
      data = data*5 -5
      // 2 10-5 5  3 15-5 10
     }
    //  if data =1 data=0
  connection.query(sql,data,function(err,result,fields){
    if (err) console.log(err);
   console.log("查询成功",result)
   res.send(result)
      // return
  })
})

router.get("/officialpapersearch",function(req,res){
  let sql = "select * from paper limit 5 offset ?"
  let data = req.query.num
  if(data <=1){
   data = 0
  }else{
   data = data*5 -5
   // 2 10-5 5  3 15-5 10
  }
  connection.query(sql,data,function(err,result,fields){
    if(err) console.log(err)
     res.send(result)
 
  })
})

router.get("/userpapersearch",function(req,res){
  let sql = "select * from userpaper limit 5 offset ?"
  let data = req.query.num
  if(data <=1){
   data = 0
  }else{
   data = data*5 -5
   // 2 10-5 5  3 15-5 10
  }
  connection.query(sql,data,function(err,result,fields){
    if(err) console.log(err)
     res.send(result)
  })
})  

router.get("/papergroup",function(req,res){
  let sql = "SELECT * from paper  ORDER BY time ASC LIMIT 5 OFFSET ?;"
  let data = req.query.num
  if(data <=1){
   data = 0
  }else{
   data = data*5 -5
   // 2 10-5 5  3 15-5 10
  }
  connection.query(sql,data,function(err,result,fields){
    if(err) console.log(err)
     res.send(result)
  })
})  

// router.post("/file", upload.single("file"), function(req,res){
//   // res.json({
// 	// 	file: req.file
// 	// })
//   res.send(req.body)
//   console.log(req.file)
// })
// const formidable = require('formidable');
router.post('/filenew',function(req,res){
  if(req.method == "POST"){
    console.log(11)
  }
  const abs = 'E:/面试专用项目/audition/uploads/'

const jpg ='.jpg'
const address = '/src/assets'
  let form = new IncomingForm()
  form.keepExtensions = true
  form.uploadDir = "E:/面试专用项目/interview/src/assets"
  console.log(222)
  form.parse(req, (err, fileds ,files) => {
    if(err){
      res.send(err)
    }else{
      res.send(fileds)
      console.log(files.file.filepath)
    }
  })
  // res.send(res)
})

router.get("/updateimg",function(req,res){
  // var sql ="update cishi set img=? where id=1"
  // data = req.query.imageUrl
  var  sql = "select * from cishi "
  // console.log(data)
  connection.query(sql,function(err,data){
    if(err){
      console.log(err)
    }else{
      res.send("ok")
    }
  })
})
router.get("/toux",function(req,res){
 sql = "select img from cishi "
  connection.query(sql,function(err,data){
    if(err){
      console.log(err)
    }else{
      res.send(data)
    }
  })
})

router.get('/a',function(req,res){
  let b = req.s
  console.log(b)
})

router.get("/setcookie",function(req,res){
  console.log(req.query.cookiesvalue)
  // console.log(req.query.cookiesvalue)
  if(req.query.cookiesvalue == undefined){
      console.log("未收到")
      res.send("没有收到参数")
  }else{
  res.cookie("keyname",req.query.cookiesvalue,{
    maxAge: 24 * 60 * 60 * 1000,
    signed:true
  })    
sql = 'update users set cookie = ? where id=1'
data = 1234
  console.log(data)
  connection.query(sql,data,function(err,date){
        if(err){
            console.log(err)
            res.send("服务器错误")
            return
        }else if(data == null || undefined || []){
            console.log("空")
            res.send("空")
        }else{
            console.log(data)
            res.send(data)
        }
  })
  }
  
 
//   res.send("成功")
  
})

router.get("/getcookie",function(req,res){
  res.send(req.cookies)
})
// const upload = multer({dest:"img"})
// router.post('/file',upload.single("file"),(req, res) => {
//   console.log(req.file)
//   res.send('ok')
// });

router.get("/savesubject",function(req,res){
  var time = moment(Date.now()).format('YYYY-MM-DD ')
  console.log(time)
  data = [req.query.title,req.query.tag,req.query.subjecttype,req.query.difflcult,time,req.query.username,req.query.img]
  sql = "insert into datalist (title,tag,subjecttype,difflcult,time,username,img) values(?,?,?,?,?,?,?)"
 
  connection.query(sql,data,function(err,data){
      if(err){
          console.log(err),
          res.send("服务器错误")
      }else{
          console.log(data)
          res.send("上传成功")
      }
  })
})

router.get("/uploadsubject",function(req,res){
  sql = "select * from datalist where username=?"
  date = req.query.username
  if(date!="" || date!=undefined || date!=null){
    connection.query(sql,date,function(err,data){
      if(err){
        console.log(err)
        res.send("服务器错误",500)
      }else{
        res.send(data)
      }
    })
  }else{
    res.send("服务器错误")
  }
  
})


router.get('/changesubject',function(req,res){
  sql="update datalist set title=?,subjecttype=?,tag=?,difflcult=?",
  date = [req.query.title,req.query.subjecttype,req.query.tag,req.query.difflcult]
  connection.query(sql,date,function(err,data){
    if(err){
      console.log(err),
      res.send("服务器错误")
    }else{
      res.send(data)
    }
  })
})

router.get('/seevalue',function(req,res){
  sql="select * from datalist where username =? and issee=?",
  // console.log(sql)
  date = [req.query.username,req.query.see]
  connection.query(sql,date,function(err,data){
    console.log(sql)
    if(err){
      console.log(err),
      res.send("服务器错误")
    }else{
      res.send(data)
    }
  })
})

router.get('/updateseevalue',function(req,res){
  sql="update datalist set issee=? ,views = ?  where title=?",
  date = [req.query.see,req.query.views, req.query.title]
  connection.query(sql,date,function(err,data){
    if(err){
      console.log(err),
      res.send("服务器错误")
    }else{
      res.send("浏览成功")
    }
  })
})

router.get('/selecttitle',function(req,res){
  sql="select * from datalist where title=?",
  date = req.query.title
  connection.query(sql,date,function(err,data){
    if(err){
      console.log(err),
      res.send({
        status:"500",
        title:"参数错误"
      })
    }else{
      res.send(
        data
      )
    }
  }) 
})

router.get('/addseevalue',function(req,res){
  //alter table `user` auto_increment = 1;
  sql="insert into Browserecords (title,tag,subjecttype,difflcult,time,seevalue,collection,Leavingamessage,clock,username) values(?,?,?,?,?,?,?,?,?,?)",
  date =   date = [req.query.title,req.query.subjecttype,req.query.tag,req.query.difflcult,req.query.seevalue,req.query.collection,req.query.Leavingamessage,req.query.clock,req.query.username,]
  connection.query(sql,date,function(err,data){
    if(err){
      console.log(err),
      res.send("服务器错误")
    }else{
      res.send(data)
    }
  })
})

router.post('/pictureupload',function(req,res){
  if(req.method == "POST"){
    console.log('POST')
  }
  // E:\面试专用项目\interview\src\assets\img
const abs = 'E:/面试专用项目/audition/uploads/'

const jpg ='.jpg'
const address = '/src/assets'
  const form = formidable();
  form.keepExtensions = true 

form.uploadDir = "E:/面试专用项目/interview/src/assets",

  form.parse(req, (err, fileds ,files) => {

    sql = 'update cishi set img=? where id=1'
    data = files.file.originalFilename
    connection.query(sql,data,function(err,data){
        if(err){
            console.log(err)
        }else{
         var oldPath = files.file.filepath
          var newpath = abs+files.file.newFilename+jpg
          fs.rename(oldPath,newpath,function(err){
            if(err){
              console.log(err)
            }else{
              // console.log(files.file.originalFilename)
              res.send(files.file.originalFilename)
              // console.log(address+files.file.newFilename+jpg)
            }
          })
        }
    })
  })
  // res.send(res)
})

router.post('/pictureuploado',function(req,res){
  if(req.method == "POST"){
    console.log('POST')
  }
  // E:\面试专用项目\interview\src\assets\img
// const abs = 'E:/面试专用项目/audition/uploads/'
const abs = 'E:/面试专用项目/interview/src/assets/img/'
const jpg ='.jpg'
const address = '/src/assets'
  const form = formidable();
  form.keepExtensions = true 

form.uploadDir = "E:/面试专用项目/interview/src/assets/img/",

  form.parse(req, (err, fileds ,files) => {
console.log(files)
    // sql = 'update comment set picture=? where id=1'
    // sql = "insert into comment(picture) values(?)"
    sql = 'select * from comment_table'
    connection.query(sql,function(err,data){
        if(err){
            console.log(err)
        }else{
         var oldPath = files.file.filepath
          var newpath = abs+files.file.originalFilename
          fs.rename(oldPath,newpath,function(err){
            if(err){
              console.log(err)
            }else{

              res.send(files.file.originalFilename)
            }
          })
        }
    })
  })
  // res.send(res)
})

router.get("/setcomment",function(err,data){
  //alter table `user` auto_increment = 1;
  sql = "insert into comment_table (reply_id,username,head_portrait,reply_time,reply_content) values(?,?,?,?,?)"
  data = [req.query.reply_id,req.query.username,req.query.head_portrait,req.query.reply_time,req.query.reply_content]
  connection.query(sql,data,function(err,data){
    if(err){
      console.log(err);
      res.send("服务器错误")
    }else{
      res.send("success")
    }
  })
})
//发布评论
router.get("/comment",function(req,res){
  // time字段
  sqlfirst = "ALTER TABLE `comment_table` AUTO_INCREMENT =1;"
  connection.query(sqlfirst,function(err,data){
      if(err) throw err;

  })
  var time = moment(Date.now()).format('YYYY-MM-DD HH:mm ')
  //alter table `user` auto_increment = 1;
  sql = "insert into comment_table(comment_title,comment_content_main,head_portrait_main,mainuser,Grade_main,comment_time_main,comment_img,father_title) values(?,?,?,?,?,?,?,?)"
  date = [req.query.title,req.query.content,req.query.toux,req.query.username,req.query.tag,time,req.query.img,req.query.father_title]
  connection.query(sql,date,function(err,data){
    if(err){
      console.log(err)
    }else{
      console.log("成功")
    sqltow = "select * from comment_table ORDER BY id desc "
  connection.query(sqltow,function(err,data){
    if(err){
      console.log(err)
    }else{
      console.log(data)
      res.send(data)
    }
  })
    }
  })
})

router.get("/comment_mount",function(req,res){
  sqltow = "select * from comment ORDER BY id desc "
  connection.query(sqltow,function(err,data){
    if(err){
      console.log(err)
    }else{
      console.log(data)
      res.send(data)
    }
  })
})

// router.get("/huifucishi",function(req,res){

//   var time = moment(Date.now()).format('YYYY-MM-DD ')
//   //alter table `user` auto_increment = 1;
//   sql = "insert into reply(toux,username,textvalues,time) values(?,?,?,?)"
//   date = [req.query.textvalues,req.query.toux,req.query.username,time]
//   connection.query(sql,date,function(err,data){
//     if(err){
//       console.log(err)
//     }else{
//       console.log(data)
//       sqltow = "select * from comment ORDER BY id desc "
//   connection.query(sqltow,function(err,data){
//     if(err){
//       console.log(err)
//     }else{
//       console.log(data)
//       a.father = data
//       // res.send(data)
//       sqltow = "select * from reply ORDER BY id desc "
//       connection.query(sqltow,function(err,data){
//         if(err){
//           console.log(err)
//         }else{
//           console.log(data)
//           a.children = data
//           // res.send(data)
//           res.send(a)
//         }
//       })
//     }
//   })
  
//     }
//   })
// })
//1.将数据分组查询
//2.判断相同的放进相同的对象里面
router.get('/ab',function(req,res){
  // let a =[{
  //   father:{
  //     children:{}
  //   },
    
  // }]
  // sql = "selcet * from comment"
  // connection.query(sql,function(err,data){
  //   if(err){
  //     console.log(err)
  //   }else{
  //    for(var i=0;i<=data.length;i++){
  //     console.log(data[i])
  //     if(data[i] == data[i]){
  //       a.push()
  //     }
  //    }
  //   }
  // })
  // sql = "SELECT maintitle,GROUP_CONCAT(textvalues) from reply GROUP BY maintitle"
  sql  ="SELECT maintitle,GROUP_CONCAT(textvalues) from reply GROUP BY maintitle"
  connection.query(sql,function(err,date){
   if(err){
    console.log(err)
    res.send("请稍后重试")
   }else{
    // res.send(date)
    
   }
  })
})

router.get("/collection",function(req,res){
  var sql = "update  datalist set iscollection=?,iscollectionusername=? ,collection =?where title = ? "
  var data = [req.query.iscollection,req.query.iscollectionusername,req.query.collection, req.query.title]
  connection.query(sql,data,function(err,data){
    if(err){
      console.log(err,"err")
    }else{
      // console.log(data)
      res.send({
        data:data.changedRows
        // success:"success"
      })
    }
  })
})

router.get("/yudaoadd",function(req,res){
  sql = "update datalist set yudao=yudao+1 where title = ?"
  data = [req.query.title]
  connection.query(sql,data,function(err,data){
    if(err){
      console.log(err,"err")
    }else{
      // console.log(data)
      res.send({
        data:data.changedRows
        // success:"success"
      })
    }
  })
})

router.get("/similar",function(req,res){
  sql = "SELECT * from datalist where tag =?"
  data = [req.query.tag]
  connection.query(sql,data,function(err,data){
    if(err){
      console.log(err,"err")
    }else{
      console.log(data)
      res.send(data)
    }
  })
})


router.get("/cishia",function(req,res){
  
  var dataa =[{
    father:'',
    child:"",
    
  }]
  
  var sql = "SELECT child.id,child.huif,child.fathername,child.name,child.img,child.tag,child.huifcontent,child.huiftitle,child.time from child LEFT JOIN  father on father.father_title = child.huiftitle "
  // data =req.query.title
  connection.query(sql,function(err,data){
   dataa[0].child = data 
    dataa[0].father = data
 res.send(dataa)
  })
  // var sql  ="SELECT * from child where huiftitle = ? and fathername = ?"
  // var data = [req.query.huiftitle,req.query.fathername]
  // connection.query(sql,data,function(err,data){
  //   cishi.child.push(data)
  //   res.send(cishi)
  // })
})


router.get("/test",function(req,res){
 var date = req.query.value
  let father = [
    { }
  ]
  sql = "SELECT * FROM comment_table where father_title = ? ORDER BY id  desc "
  
  // 1.SELECT * FROM comment_table
  connection.query(sql,date,function(err,data){
    if(err){
      console.log(err,"err")
    }else{   
      let father = data
      
      sql = "SELECT * from reply_table where child_title  = ? ORDER BY id desc"
      connection.query(sql,date,(err,data)=>{
        if(data){
          // for(let i = 0;i<father.length;i++){
          //   for(let j = 0;j<data.length;j++){
          //     // console.log(father[i].id,data[j].reply_id)
          //     if(father[i].id == data[j].reply_id){
          //       father[i].replylist =[]
          //       father[i].replylist[j] = data[j]
          //       // console.log(father[i].replylist[i])
          //     }
          //   }
          // }
          for(let i=0;i<father.length;i++){
            // console.log(i+"child")
            father[i].replylist = {}
            for(let j =0; j<data.length;j++){
                if(father[i].id == data[j].reply_id){
                    father[i].replylist[j] = data[j]
                }
            }
        }
          //res.send(father)
          // console.log(111)
          res.send(father)
        }else{
          console.log(err)
        }
      })

    }
  })
})

router.get("/hot",function(req,res){
  sql = "select * from comment_table order by thumbs_up_main desc",
  connection.query(sql,function(err,data){
    res.send(data)
  })
})

router.get("/innovate",function(req,res){
 var sql;
  if(req.query.value == 1){
    sql = "select * from datalist ORDER BY time desc  limit 2  "
  }else if(req.query.value == 2){
    sql = "select * from datalist ORDER BY views desc  limit 2  "
  }else if(req.query.value == 3){
    sql = "select * from datalist ORDER BY collection desc  limit 2  "
  }else{
    sql = "select * from datalist ORDER BY yudao desc  limit 2 "
  }
  connection.query(sql,(err,data)=>{
    if(err){
      console.log(err)
      res.send("错误，稍后重试")
    }else{
      var sqla = "select * from datalist"
      connection.query(sqla,(err,dataa)=>{
        if(err){
          console.log(err)
        }else{
          res.send({
             length:dataa.length,
            data
          })
        }
      })
    
    }
   
  })
 
})
//回复新增
router.get("/reply_table",function(req,res){
  var time = moment(Date.now()).format('YYYY-MM-DD ')
  // alter table `user` auto_increment = 1;
  information = [req.query.reply_id,req.query.username,req.query.head_portrait,time,req.query.reply_content,req.query.child_title]
  sql = "insert into reply_table (reply_id,username,head_portrait,reply_time,reply_content,child_title) values(?,?,?,?,?,?)"
  connection.query(sql,information,function(err,data){
    if(err){
      throw err
    }else{
      res.send(data)
    }
  })
})

router.get("/register",function(req,res){
  // alter table `user` auto_increment = 1;
  let sql = "insert into users (username,password,Registration_time) values(?,?,?)"
  var time = moment(Date.now()).format('YYYY-MM-DD ')
  let data = [req.query.username,req.query.password,time]
  connection.query(sql,data,function(err,data){
    if(err){
      console.log(err)
      res.send("错误")
    }else{
      res.send(data)
    }
  })

})
module.exports = router;