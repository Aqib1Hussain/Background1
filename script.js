var search=document.querySelector("#search");
var list=document.querySelector("#list");

var array=Array.from(list.children);

search.addEventListener("keyup",myFunc)

function myFunc(){
    array.forEach(function(item){
        if(item.innerText.includes(search.value)){
            item.style.display="block"
        }else{
            item.style.display="none";
        }

    }
    )
    
}