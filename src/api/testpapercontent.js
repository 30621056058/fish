import requsest from "../js/cishi.js"
export function addtest(value){
    return requsest({
      url:"/subject/selectsubjectall",
      method:"get",
      params:{
          value
      }
    })
       }