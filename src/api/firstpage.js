import request from "../js/cishi.js"
export function lookmorea(num,numall){
   return request({
        methods:"get",
      
        url:"users/save",
        params:{
          num :num,
          numall:numall
        }
      })
}
// .then((res =>((console.log(res,datalistlength,datalist)),datalistlength = res.data.data.length ,datalist = res.data.data,numall = res.data.numvalue
    
//       ))).catch(err=>{
//         console.log(err)
//       })
export function lookmoreab(){
    request({
        // url:"datalistall",
         url:"users/datalistall",
        
        methods:"get"
      })
 }
//  .then(res=>{
//     console.log(res),console.log(res.data.length==datalistlength,two),one = res.data.length,two = datalistlength
//   })