<template>
    <div>
      <Header></Header>
      <el-main>
        <el-dialog
  title="提示"
  :visible.sync="Submit_paper"
  width="30%"
  :before-close="handleClose">
  <span>确定要交卷吗,还剩下{{subject}}题没有答</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="quexiaojiaojuan">取 消</el-button>
    <el-button type="primary" @click="querenjiaojuan">确 定</el-button>
  </span>
</el-dialog>
        <el-dialog 
  title="item.title"
  :visible.sync="dialogVisible"
  width="30%"
  :modal='false'
  :before-close="handleClose">
 <div class="select_test_inside" v-for="items in subjectone" :key="items.id">
            <el-checkbox  :checked="Boolean(items.checked1) " :label='items.answer1' @change="changea(items.answer1)" ></el-checkbox>
             <el-checkbox  :checked="Boolean(items.checked2)" :label='items.answer2' @change="changea(items.answer2)"></el-checkbox>
              <el-checkbox :checked="Boolean(items.checked3)" :label='items.answer3' @change="changea(items.answer3)"></el-checkbox> 
               <el-checkbox :checked="Boolean(items.checked4)" :label='items.answer4' @change="changea(items.answer4)"></el-checkbox> 
        </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="Confirm_submission">确定提交</el-button>
  </span>
</el-dialog>
      <div class="testcontent">
       
        <el-empty v-if="empty" description="没有题库,待完善">
  <el-button type="primary" @click="createtest">您可以自己创建，也可以等人</el-button>
  <el-dialog
  title="填写5道题"
  
  :visible.sync="createtestvalue"
  width="70%"
  :before-close="createtestClose">
     <el-carousel :interval="4000" type="card" height="400px" ref="carousel" :autoplay="false">
    <el-carousel-item  v-for="item in carouselitem" :key="item.id">
      <div class="all" >
        <div>一共可以创建5道题,第{{item.id}}题</div>
          <el-input v-model="item.id" placeholder="id">
          <template slot="prepend">id</template>
        </el-input>
        <el-input v-model="item.title" placeholder="title">
          <template slot="prepend">题目</template>
        </el-input>
        <el-input v-model="item.answer1" placeholder="answer1">
           <template slot="prepend">答案1</template>
        </el-input>
        <el-input v-model="item.answer2" placeholder="answer2">
           <template slot="prepend">答案2</template>
        </el-input>
        <el-input v-model="item.answer3" placeholder="answer3">
           <template slot="prepend">答案3</template>
        </el-input>
        <el-input v-model="item.answer4" placeholder="answer4">
           <template slot="prepend">答案4</template>
        </el-input>
        <button @click="add(item)">完成</button>
      </div>
      
    </el-carousel-item>
  </el-carousel>
  <span slot="footer" class="dialog-footer">
    <el-button @click="createtestout">取 消</el-button>
    <el-button type="primary" @click="createtestsure">确 定</el-button>
  </span>
</el-dialog>
</el-empty>
        <div class="testcontent-inside" v-if="emptyno">
          
            <el-carousel trigger="click"  :autoplay='false' height="551px" :initial-index='index' @change="changeItem" >
      <el-carousel-item v-for="item in subjectall" :key="item.id" >
        <div class="testall">
      <div class="testcontent-inside-header">
        <div class="testcontent-inside-header-inside">
            <div class="testcontent-inside-header-inside-title">{{item.title}}</div>
            <div>  <el-button type="text" @click="answerorsubject">答案或题目有问题</el-button></div>
        </div>
      </div>
      <div class="select_test">
        <div class="select_test_inside">
            <el-checkbox  v-model="item.checked1" :label='item.answer1' @change="selcet_remove(item)"></el-checkbox>
             <el-checkbox  v-model="item.checked2" :label='item.answer2' @change="selcet_remove(item)"></el-checkbox>
              <el-checkbox  v-model="item.checked3" :label='item.answer3' @change="selcet_remove(item)"></el-checkbox>
              <div class="selcet_button">
               <el-checkbox  v-model="item.checked4" :label='item.answer4' @change="selcet_remove(item)"></el-checkbox>
               <button @click="Submit_papers" >交卷</button>
               </div>
        </div>
      </div>
      </div>
      </el-carousel-item>
    </el-carousel>
        </div>
      </div>
      </el-main>
      <floor></floor>
    </div>
</template>

<script>
import floor from '../components/floor.vue';
import {paperlist,answersubject,submiterror} from '../api/testpaper'
export default {
  components: { floor },
    name: 'WorkspaceJsonTestpapercontent',
      beforeRouteLeave(to,from,next){
      if(to!=''){
       if(from!=''){
        console.log(1)
       }
      }
     this.$confirm(`您已经答${this.$store.state.subjectid}道题`, '提示', {
      confirmButtonText: '继续答题',
      cancelButtonText: '不答题',
      type: 'warning'
    }).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
      window.sessionStorage.setItem("subjectid",0)
      next()//放行
    })
  
},
    data() {
        return {
          num:1,
            carouselitem:[
              {
        id:"1",
        title:""
      }
      ],
               labelPosition: 'right',
          testindex:0,
          items:{
             id:"1",
              title:"",
              answerone:"",
              answertwo:"",
              answerthree:""
          },
          testall:[
            {
              id:"1",
              title:"sadad",
              answerone:"asdsad",
              answertwo:"asdsad",
              answerthree:"asdsad"
            }
            ],
          

          autoplay:false,
          createtestvalue:false,
          empty:false,
          emptyno:true,
            subjectone:"",
            subjectall:"",
            index:0,
            subject:0,
            dialogVisible: false,
                outsidechecked1:false,
                outsidechecked2:false,
                outsidechecked3:false,
                outsidechecked4:false,
                Submit_paper:false,
                errorvalue:true,
               answer1error:"",
               answer2error:"",
               answer3error:"",
               answer4error:"",
               selcetvalueone:"",
               subjectold:"",
               btnnum:0,
            //    selceterror:"",
        };
    },
   
    mounted() {
    console.log(window.location.hash)
  
window.addEventListener("beforeunload", function (e) {
     //不是所有浏览器都支持提示信息的修改
     var confirmationMessage = "请先保存您编辑的内容,否则您修改的信息会丢失。";
     e.returnValue = confirmationMessage;
     
     return confirmationMessage;
    
})

         console.log(this.carouselitem,"item")
      answersubject(this.index).then(res=>{
          this.subjectone = {data:res}
          console.log(res)
      })
        paperlist(this.$route.query.title).then(res=>{
            this.subjectall = res.data,this.subject = res.data.length,this.subjectold = res.data.length
            if(this.subjectall =='' || this.subjectall == null){
              this.empty = true,
              this.emptyno = false
            }else{
              this.empty = false,
              this.emptyno = true
            }
        }).catch(err=>{
            console.log(err)
        })
    },

    methods: {
       changevalue(){
            this.$refs.carousel.next()
       },
         add(item){
        // let objectvalue = Object.values(item)
        console.log(item)
        item.titlepaper = this.$route.query.title
          console.log(item)
        // if(objectvalue.length == 6){
      this.num++
        // console.log(this.carouselitem,"itemaa")
    //  this.carouselitem.push({item})
       
        // console.log(this.carouselitem[0],"item")
       
        // console.log(this.carouselitem[1].item,this.carouselitem[2].item,this.carouselitem[3].item,this.carouselitem[4].item)

          // alert("您已经填完了5道题,是否提交")
          
          this.btnnum +=1
          if(this.btnnum<=2){
           this.$http({
                url:"subject/inserttest",
                method:"get",
                params:{
                  value1:item,
                  // value2:this.carouselitem[2].item,
                  // value3:this.carouselitem[3].item,
                  // value4:this.carouselitem[4].item,
                }
              }).then(res=>{
                console.log(res),this.$message.success("上传成功"),this.carouselitem =[{id:"",title:"",answer1:"",answer2:"",answer3:"",answer4:"",}]
              }).catch(err=>{
                console.log(err)
              })
          }else{
            return this.$message.error("不能再上传了")
          }
              
       
        // }else{
          // return alert("请填写完")
        // }  
    },
      Complete(){
        console.log(this.testindex)
        this.testall[0].id = '0'
        this.testindex+=1
        console.log(this.testall)
        this.testall.length+=1
      },
      setActiveItem(){
        console.log(1)
      },
      createtestout(){
        this.createtestvalue = false
      },
      createtestsure(){
         this.createtestvalue = false
         this.$message.success("创建成功")
      },
        createtestClose(done) {
        this.$confirm('确认关闭？')
          .then(res => {
            done(res);
          })
          .catch(err => {console.log(err)});
      },
        createtest(){
          this.createtestvalue = true
        },
        selcet_remove(item){
            let num=0;
           console.log(item)
           console.log(this.subjectall[this.index])
           console.log(item === this.subjectall)
           if(window.sessionStorage.getItem("subjectid")!=''){
             if(window.sessionStorage.getItem("subjectid")!=this.subjectall[this.index].id){
                    console.log(num)
                    num+=1
                     window.sessionStorage.setItem('subjectid',item.id)
                     this.$store.dispatch("subject",item.id)
             }else{
                window.sessionStorage.setItem('subjectid',item.id)
             }
           }else{
             window.sessionStorage.setItem('subjectid',item.id)
           }
            
        },
        changea(value){
            console.log(value)
            this.selcetvalueone += value+"/"
            console.log(this.selcetvalueone)
            // console.log( this.selcetvalueone.split("")    )
            let a =[this.selcetvalueone.split("/") ] 
            // console.log(a)
            // console.log(a)
            let arrall = a[0].slice(0,4)
            // console.log(arrall[0])
            this.answer1error =  arrall[0]   ,
            this.answer2error= arrall[1]  ,
            this.answer3error =  arrall[2] ,
            this.answer4error =  arrall[3] 
          
        },
        answerorsubject(){
         
          console.log(11)
           answersubject(this.index).then(res=>{
          this.subjectone = res.data
          console.log(this.subjectone),
           this.dialogVisible = true
      })
        },
        changeItem(index){
            console.log(index)
            this.index = index
                answersubject(this.index).then(res=>{
               this.subjectone = {data:res}
               console.log(this.subjectone)
            }).catch(err=>{
                console.log(err)
            })
        },
    //    setActiveItem(index){
    //     console.log(index)
    //    },
        querenjiaojuan(){
            this.Submit_paper = false
             window.sessionStorage.setItem("subjectid",0)
        },
        quexiaojiaojuan(){
            this.Submit_paper = false,
            this.subject = this.subjectold
        },
        Submit_papers(){
            this.Submit_paper = true
            console.log(window.sessionStorage.getItem("subjectid"))
            this.subject = this.subject - this.$store.state.subjectid
           
        },
        Confirm_submission(){
              this.dialogVisible = false
                submiterror(this.errorvalue,this.answer1error,this.answer2error,this.answer3error,this.answer4error,this.subjectone[0].id).then(res=>{
                    console.log(res)
                }).catch(err=>{console.log(err)})
        },
        cancel(){
            this.dialogVisible = false
           
        },
         handleClose(done) {
        this.$confirm('确认关闭？')
          .then(res => {
            console.log(res)
            done();
          })
          .catch(err => {console.log(err)});
      }
    },
};
</script>

<style lang="css" scoped>
.all{
  height: 100%;
    display: grid;
    align-items: center;
    justify-content: space-around;
}
.createtest{
  height: 100%;
}
.createtest-inside{
  display: grid;
    height: 100%;
    align-items: center;
    justify-content: space-around;
}
.testcontent-inside-header-inside-title{
    width: 700px;
    overflow-wrap: break-word;
}
.testcontent-inside-header-inside{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center ;
}
.selcet_button{
    display: flex;
    justify-content: space-between;
}
.testcontent-inside-header{
    height: 50px;
    border-bottom: 1px solid;
    display: flex;
    align-items: center;
}
.select_test_inside{
    display: flex;
    flex-direction: column; 
    text-align: left;
    height: 200px;
    justify-content: space-between;
    padding: 30px 0px;
}
.testall{
    padding: 0px 100px;
    text-align: left;
      position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  } 

  .el-carousel__item:nth-child(2n) {
     background-color: #d3dce6;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
 
</style>