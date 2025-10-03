
let parent = document.getElementById("parent")
let count = 0

fetch( "https://jsonplaceholder.typicode.com/users" , { method:"GET"} )
.then( (res)=> res.json() )
.then( (data)=> { data.map( (user , i)=> {

     parent.innerHTML += `
         <div class="child">
            <h1> ${user.name} </h1>
            <h2> ${user.email} </h2>
            <h2> ${user.address.city}</h2>
        </div>
      `})
      
      let a = document.getElementsByClassName("child")

   
      for(i of a){
       
        i.style.backgroundColor = getColor()
      }    
    
    })

  function getColor(){

      let r = Math.floor(Math.random() * 256)
      let g = Math.floor(Math.random() * 256)
      let b = Math.floor(Math.random() * 256)
  
      return `rgb(${r},${g},${b})`

 }

