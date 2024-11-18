grand = document.getElementById("grand")
parent = document.getElementById("parent")
child = document.getElementById("child")

grand.addEventListener("click", (e)=>{
    
    e.stopPropagation();  
    setTimeout(()=>{
         grand.style.backgroundColor="red"
         console.log("grand is clicked")
    },2000)
   
})

parent.addEventListener("click", (e)=>{
    e.stopPropagation();  
    setTimeout(()=>{
         parent.style.backgroundColor="cyan"
         console.log("parent is clicked")
    },3000)
})

child.addEventListener("click", (e)=>{
    e.stopPropagation();  
    setTimeout(()=>{
         child.style.backgroundColor="lightgreen"
         console.log("child is clicked")
    },5000)
})


grand.addEventListener("click", (e)=>{
    
    e.stopPropagation();  
    
         grand.style.backgroundColor="green"
         console.log("grand is clicked")
       
},true)

parent.addEventListener("click", (e)=>{
    e.stopPropagation();
         parent.style.backgroundColor="cyan"
         console.log("parent is clicked")

},true)

child.addEventListener("click", (e)=>{
    e.stopImmediatePropagation();   
         child.style.backgroundColor="lightgreen"
         console.log("child is clicked")

},true)