import requsest from "../js/cishi.js"
export function cishi(a){
  return requsest({
    url:"/users",
    method:"get",
    params:{
      data:a
    }
  })
     }
  
