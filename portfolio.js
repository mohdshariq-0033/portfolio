
let hamburger=document.querySelector(".header #hamburger");
let displayMenu=document.querySelector(".header #navList ul");
let anchor=document.querySelectorAll(".header ul li .anchor");
// let ancho=document.querySelector(".header ul li #ancho ");
// let anch=document.querySelector(".header ul li #anch ");
// let anc=document.querySelector(".header ul li #anc ");
// let an=document.querySelector(".header ul li #an ");
let header=document.querySelector(".header");


hamburger.addEventListener("click",()=>{
hamburger.classList.toggle("active");
displayMenu.classList.toggle("active");
});

anchor[0].style.color="brown";
anchor[0].style.fontSize="20px";

anchor[0].addEventListener("click",()=>{ 
hamburger.classList.toggle("active");
displayMenu.classList.toggle("active");
// anchor[0].style.color="brown";
// anchor[1].style.color="rgb(20,155,31)";  
// anchor[4].style.color="rgb(20,155,31)";  
// anchor[2].style.color="rgb(20,155,31)";  
// anchor[3].style.color="rgb(20,155,31)";    

// anchor[0].style.fontSize="20px";
// anchor[1].style.fontSize="15px";  
// anchor[4].style.fontSize="15px";  
// anchor[2].style.fontSize="15px";  
// anchor[3].style.fontSize="15px";    

});
// anchor[0].addEventListener("mousemove",()=>{ 
//     anchor[0].style.color="brown";
// anchor[1].style.color="rgb(20,155,31)";  
// anchor[4].style.color="rgb(20,155,31)";  
// anchor[2].style.color="rgb(20,155,31)";  
// anchor[3].style.color="rgb(20,155,31)";    

// });
// anchor[0].addEventListener("mouseout",()=>{ 
//     anchor[0].style.color="rgb(20,155,31)";
// anchor[1].style.color="rgb(20,155,31)";  
// anchor[4].style.color="rgb(20,155,31)";  
// anchor[2].style.color="rgb(20,155,31)";  
// anchor[3].style.color="rgb(20,155,31)";    

// });



anchor[1].addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    displayMenu.classList.toggle("active");
//     anchor[1].style.color="brown";
//     anchor[0].style.color="rgb(20,155,31)";  
//     anchor[3].style.color="rgb(20,155,31)";  
//     anchor[4].style.color="rgb(20,155,31)";  
//     anchor[2].style.color="rgb(20,155,31)"; 
    
//     anchor[0].style.fontSize="15px";
// anchor[1].style.fontSize="20px";  
// anchor[4].style.fontSize="15px";  
// anchor[2].style.fontSize="15px";  
// anchor[3].style.fontSize="15px";    

    });

    anchor[2].addEventListener("click",()=>{
        hamburger.classList.toggle("active");
        displayMenu.classList.toggle("active");
//         anchor[2].style.color="brown";
//         anchor[4].style.color="rgb(20,155,31)";  
//         anchor[1].style.color="rgb(20,155,31)";  
//         anchor[0].style.color="rgb(20,155,31)";  
//         anchor[3].style.color="rgb(20,155,31)";  
        
//         anchor[0].style.fontSize="15px";
// anchor[1].style.fontSize="15px";  
// anchor[4].style.fontSize="15px";  
// anchor[2].style.fontSize="20px";  
// anchor[3].style.fontSize="15px";    

        });

        anchor[3].addEventListener("click",()=>{
            hamburger.classList.toggle("active");
            displayMenu.classList.toggle("active");  
//             anchor[3].style.color="brown"; 
//             anchor[4].style.color="rgb(20,155,31)";  
//             anchor[1].style.color="rgb(20,155,31)";  
//             anchor[0].style.color="rgb(20,155,31)";  
//             anchor[2].style.color="rgb(20,155,31)";  
            
//             anchor[0].style.fontSize="15px";
// anchor[1].style.fontSize="15px";  
// anchor[4].style.fontSize="15px";  
// anchor[2].style.fontSize="15px";  
// anchor[3].style.fontSize="20px";    

            });
 
            anchor[4].addEventListener("click",()=>{
                hamburger.classList.toggle("active");
                displayMenu.classList.toggle("active");
//                 anchor[4].style.color="brown"; 
//                 anchor[3].style.color="rgb(20,155,31)";  
//                 anchor[2].style.color="rgb(20,155,31)";  
//                 anchor[1].style.color="rgb(20,155,31)";  
//                 anchor[0].style.color="rgb(20,155,31)"; 
                
//                 anchor[0].style.fontSize="15px";
// anchor[1].style.fontSize="15px";  
// anchor[4].style.fontSize="20px";  
// anchor[2].style.fontSize="15px";  
// anchor[3].style.fontSize="15px";    

                });


document.addEventListener("scroll",()=>{
var scrollPosition = window.scrollY; 
console.clear();
console.log(scrollPosition);
if(scrollPosition >= 150){
  header.style.backgroundColor="#1F1E1E";
}
else{
    header.style.backgroundColor="transparent";
}

if(scrollPosition >=0){
    console.log("else");
   anchor[0].style.color="brown";
anchor[1].style.color="rgb(20,155,31)";  
anchor[4].style.color="rgb(20,155,31)";  
anchor[2].style.color="rgb(20,155,31)";  
anchor[3].style.color="rgb(20,155,31)";    

anchor[0].style.fontSize="20px";
anchor[1].style.fontSize="15px";  
anchor[4].style.fontSize="15px";  
anchor[2].style.fontSize="15px";  
anchor[3].style.fontSize="15px";    
}

if(scrollPosition >= 557){
    console.log("about");
    anchor[1].style.color="brown";
    anchor[0].style.color="rgb(20,155,31)";  
    anchor[3].style.color="rgb(20,155,31)";  
    anchor[4].style.color="rgb(20,155,31)";  
    anchor[2].style.color="rgb(20,155,31)"; 
    
    anchor[0].style.fontSize="15px";
anchor[1].style.fontSize="20px";  
anchor[4].style.fontSize="15px";  
anchor[2].style.fontSize="15px";  
anchor[3].style.fontSize="15px";    
}

  if(scrollPosition >= 1199){
    console.log("cont");
    anchor[4].style.color="rgb(20,155,31)"; 
    anchor[2].style.color="brown";  
    anchor[3].style.color="rgb(20,155,31)";  
    anchor[1].style.color="rgb(20,155,31)";  
    anchor[0].style.color="rgb(20,155,31)"; 
    
    anchor[0].style.fontSize="15px";
anchor[1].style.fontSize="15px";  
anchor[4].style.fontSize="15px";  
anchor[3].style.fontSize="15px";  
anchor[2].style.fontSize="20px";    
}


if(scrollPosition >= 2292){
    console.log("cont");
    anchor[3].style.color="brown"; 
    anchor[4].style.color="rgb(20,155,31)";  
    anchor[2].style.color="rgb(20,155,31)";  
    anchor[1].style.color="rgb(20,155,31)";  
    anchor[0].style.color="rgb(20,155,31)"; 
    
    anchor[0].style.fontSize="15px";
anchor[1].style.fontSize="15px";  
anchor[3].style.fontSize="20px";  
anchor[2].style.fontSize="15px";  
anchor[4].style.fontSize="15px";    
}

if(scrollPosition >= 2934){
    console.log("cont");
    anchor[4].style.color="brown"; 
    anchor[3].style.color="rgb(20,155,31)";  
    anchor[2].style.color="rgb(20,155,31)";  
    anchor[1].style.color="rgb(20,155,31)";  
    anchor[0].style.color="rgb(20,155,31)"; 
    
    anchor[0].style.fontSize="15px";
anchor[1].style.fontSize="15px";  
anchor[4].style.fontSize="20px";  
anchor[2].style.fontSize="15px";  
anchor[3].style.fontSize="15px";    
}

});

//moseEvent property

// let mouse=document.querySelector("body");
// mouse.addEventListener("mousemove",(e)=>{
// let x=e.clientX;
// let y=e.clientY;
// console.clear();
// console.log(x);
// console.log(y);
// });



