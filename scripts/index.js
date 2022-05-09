  
import {navbar }from "../components/navbar.js";
   let na=document.getElementById("nav")
   na.innerHTML=navbar();
  
 let search_food=async(e)=>{
   
   try{
    let value= document.getElementById("search").value; 
    console.log(value)
    let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
        let res=  await fetch(url)    
        let data=await res.json();
       
        append(data)
   }catch(err){
       console.log(err);
   }
        
}
let ids;
function debounce(func,delay){
    if(ids){
        clearTimeout(ids);
    }
      ids=setTimeout(function(){
        func();
    },delay);
}

document.getElementById("search").addEventListener("keypress",function(){debounce(search_food,3000)});

let append= (data)=>{
    let v= document.getElementById("container");
    v.innerHTML="";
    v.style.display="grid";
    v.style.gridTemplateColumns="repeat(4,1fr)"
    v.style.gap="2%";
    console.log(data);
    data.meals.forEach(({strMealThumb,strMeal})=> {
  

   let div=document.createElement("div");
      v.style.height="350px";
   let img=document.createElement("img");
   img.style.height="65%";
   img.style.width="100%";
  img.src=strMealThumb;
   console.log(img);
   let p=document.createElement("h1");
p.innerText=strMeal;
   div.append(img,p);
   v.append(div);
});
}


