// var timer;
// export function xy(){

//      timer =  setInterval(function(){
//         console.log(document.documentElement.scrollTop || document.body.scrollTop)
//     },1000)

//     }
// export   function clear(){
//         clearInterval(timer)
//     }

   export function closewindow(){
    window.addEventListener("beforeunload",function(event){
        event.returnValue = "111";
     })
   } 
