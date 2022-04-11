
 
  

  let PizzaValue=0;

  let PizzaCount=0;

  let Ma9loubValue=0;

  let Ma9loubCount=0;

  let Count=0;

  let PlatValue=0;

  let PlatCount=0;

  let TabounaValue=0;

  let TabounaCount=0;

  let ChapatiValue=0;

  let ChapatiCount=0;

  let TotalValue=0;

  let TotalCount=0;


document.getElementById("heart1").addEventListener("click",function heart (){

  document.getElementById("heart1").style="background-color:red";



})

document.getElementById("heart2").addEventListener("click",function heart (){

document.getElementById("heart2").style="background-color:red";


})

document.getElementById("heart3").addEventListener("click",function heart (){

document.getElementById("heart3").style="background-color:red";


})

document.getElementById("heart4").addEventListener("click",function heart (){

document.getElementById("heart4").style="background-color:red";


})

document.getElementById("heart5").addEventListener("click",function heart (){

document.getElementById("heart5").style="background-color:red";


})

document.getElementById("trash1").addEventListener("click",function trash (){

  document.getElementById("trash1").parentNode.parentNode.parentNode.parentNode.parentNode.remove()

})

document.getElementById("trash2").addEventListener("click",function trash (){

document.getElementById("trash2").parentNode.parentNode.parentNode.parentNode.parentNode.remove()

})

document.getElementById("trash3").addEventListener("click",function trash (){

document.getElementById("trash3").parentNode.parentNode.parentNode.parentNode.parentNode.remove()

})

document.getElementById("trash4").addEventListener("click",function trash (){

document.getElementById("trash4").parentNode.parentNode.parentNode.parentNode.parentNode.remove()

})

document.getElementById("trash5").addEventListener("click",function trash (){

document.getElementById("trash5").parentNode.parentNode.parentNode.parentNode.parentNode.remove()

})


document.getElementById("shop").addEventListener("click",function shop(){

  document.getElementById("TotalCount").innerHTML=`TotalCount: ${TotalCount}`;

  document.getElementById("TotalValue").innerHTML=`TotalValue :${TabounaValue+PizzaValue+Ma9loubValue+ChapatiValue+PlatValue}`;




 
 

})

document.getElementById("info").addEventListener("click",function info (){

    document.getElementById("Count").innerHTML=document.querySelectorAll(".card").length



  
})

document.getElementById("addPizza").addEventListener("click",function addPizza (){



  if(PizzaCount <2){

    Count=Count+1
  }

  TotalCount=TotalCount+1;

  PizzaCount=PizzaCount+1;

  PizzaValue=PizzaCount*10000;

  document.getElementById("addPizza").parentNode.parentNode.nextElementSibling.childNodes[1].childNodes[1].value=PizzaCount

  
  return {"PizzaCount":`${PizzaCount} UNIT`,"PizzaValue":`${PizzaValue} DT`}

})

document.getElementById("delPizza").addEventListener("click",function delPizza(){


  
  if( PizzaCount >0){

      PizzaCount=PizzaCount-1;
      TotalCount=TotalCount-1;
      PizzaValue=PizzaValue-10000;
    }
    

    document.getElementById("delPizza").parentNode.parentNode.previousElementSibling.childNodes[1].childNodes[1].value=PizzaCount

    console.log(document.getElementById("delPizza").parentNode.parentNode.nextElementSibling.childNodes[1].childNodes[1])

    return {"PizzaCount":`${PizzaCount} UNIT`,"PizzaValue":`${PizzaValue} DT`}

})


   
document.getElementById("addMa9loub").addEventListener("click",function addMa9loub (){

    

  Ma9loubCount=Ma9loubCount+1;

  TotalCount=TotalCount+1;


  Ma9loubValue=Ma9loubCount*5000;


  if(Ma9loubCount<2){

    Count=Count+1
  }


  document.getElementById("addMa9loub").parentNode.parentNode.nextElementSibling.childNodes[1].childNodes[1].value=Ma9loubCount

  return {"Ma9loubCount":`${Ma9loubCount} UNIT`,"Ma9loubValue":`${Ma9loubValue} DT`}
    

})

  
document.getElementById("delMa9loub").addEventListener("click",function delMa9loub (){

  if( Ma9loubCount >0 ){

    Ma9loubCount=Ma9loubCount-1;
    TotalCount=TotalCount-1;
    Ma9loubValue=Ma9loubValue-5000;

  }




  document.getElementById("delMa9loub").parentNode.parentNode.previousElementSibling.childNodes[1].childNodes[1].value=Ma9loubCount

  
  return {"Ma9loubCount":`${Ma9loubCount} UNIT`,"Ma9loubValue":`${Ma9loubValue} DT`}


})

document.getElementById("addPlat").addEventListener("click",function addPlat (){

  
  PlatCount=PlatCount+1;

  TotalCount=TotalCount+1;

  PlatValue=PlatCount*8000;


  if(PlatCount<2){

    count=count+1
  }


  document.getElementById("addPlat").parentNode.parentNode.nextElementSibling.childNodes[1].childNodes[1].value=PlatCount


  return {"PlatCount":`${PlatCount} UNIT`,"PlatValue":`${PlatValue} DT`}
  
})
    

document.getElementById("delPlat").addEventListener("click",function delPlat (){

  
  if( PlatCount>0 ){

    PlatCount=PlatCount-1;

    TotalCount=TotalCount-1;

    PlatValue=PlatValue-8000;

  } 


  document.getElementById("delPlat").parentNode.parentNode.previousElementSibling.childNodes[1].childNodes[1].value=PlatCount


  return {"PlatCount":`${PlatCount} UNIT`,"PlatValue":`${PlatValue} DT`}

})


document.getElementById("addTabouna").addEventListener("click",function addTabouna (){


  TabounaCount=TabounaCount+1;

  TotalCount=TotalCount+1;

  TabounaValue=TabounaValue+2500;


  if(TabounaCount<2){

    Count=count+1
  }



  document.getElementById("addTabouna").parentNode.parentNode.nextElementSibling.childNodes[1].childNodes[1].value=TabounaCount

  return {"TabounaCount":`${TabounaCount} UNIT`,"TabounaValue":`${TabounaValue} DT`}

})



document.getElementById("delTabouna").addEventListener("click",function delTabouna (){
  
      

  if(TabounaCount>0){

    TabounaCount=TabounaCount-1;

    TotalCount=TotalCount-1;

    TabounaValue=TabounaValue-2500;

  }

  

  document.getElementById("delTabouna").parentNode.parentNode.previousElementSibling.childNodes[1].childNodes[1].value=TabounaCount



  return {"TabounaCount":`${TabounaCount} UNIT`,"TabounaValue":`${TabounaValue} DT`}

})


document.getElementById("addChapati").addEventListener("click",function addChapati(){
          
  ChapatiCount=ChapatiCount+1;

  TotalCount=TotalCount+1;

  ChapatiValue=ChapatiCount*2500;

  if(ChapatiCount<2){

    count=count+1
  }

  document.getElementById("addChapati").parentNode.parentNode.nextElementSibling.childNodes[1].childNodes[1].value=ChapatiCount

  return {"ChapatiCount":`${ChapatiCount} UNIT`,"ChapatiValue":`${ChapatiValue} DT`}




})

document.getElementById("delChapati").addEventListener("click",function delChapati (){


  if (ChapatiCount>0){

    ChapatiCount=ChapatiCount-1;

    TotalCount=TotalCount-1;

    ChapatiValue=ChapatiValue-2500;

  }
  


  document.getElementById("delChapati").parentNode.parentNode.previousElementSibling.childNodes[1].childNodes[1].value=ChapatiCount



  return {"ChapatiCount":`${ChapatiCount} UNIT`,"ChapatiValue":`${ChapatiValue} DT`}

})




