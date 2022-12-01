import requsest from "../js/headerreq"
export function cishi(searchsubjectvalue){
  return requsest({
    url:"users/search",
    method:"get",
    params:{
        searcha:searchsubjectvalue
    }
  })
 }