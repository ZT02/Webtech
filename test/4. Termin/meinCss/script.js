/*window.onresize = () => {
    location.reload();
  } */
  
 window.addEventListener('resize', function() {
	// viewport and full window dimensions will change
	
	let viewport_width = window.innerWidth;
    if(viewport_width>=770 & viewport_width <= 780){
        location.reload();
    }
	
}); 

function openClose(element, element2) {
    let condition = element.style.backgroundColor;
if(condition === "rgb(72, 86, 78)" || condition==="") {
    element.style.backgroundColor = "#EAEBEB";
    element.style.color = "#48564E";
    document.getElementById(element2).style.display = "flex";
}
else{
    element.style.backgroundColor = "#48564E";
    element.style.color = "#EAEBEB";
    document.getElementById(element2).style.display = "none";
}
    
}


function navMenuEnter(element) {
    element.style.backgroundColor = "#EAEBEB";
    element.style.color = "#48564E";
}

function navMenuLeave(element) {
    element.style.backgroundColor = "#48564E";
    element.style.color = "#EAEBEB";
}

var check = false;

function navMenuKlapp() {

    if (!check) {
        
        document.getElementById("nav").style.flexDirection = "column";
        document.getElementById("item1").style.backgroundColor = "#EAEBEB";
        document.getElementById("item1").style.color = "#48564E";
        document.getElementById("item2").style.display = "flex";
        document.getElementById("item3").style.display = "flex";
        document.getElementById("item4").style.display = "flex";
        document.getElementById("hamcross").style.paddingTop = "0";
        document.getElementById("hamcross").setAttribute("class", "icon-hsc-x");
        
        check = true;
    } else {
        document.getElementById("nav").style.flexDirection = "row";
        document.getElementById("item1").style.backgroundColor = "#48564E";
        document.getElementById("item1").style.color = "#EAEBEB";
        document.getElementById("item2").style.display = "none";
        document.getElementById("item3").style.display = "none";
        document.getElementById("item4").style.display = "none";
        document.getElementById("hamcross").style.paddingTop = "0";
        document.getElementById("hamcross").setAttribute("class", "icon-hsc-hamburger");
        
        
        check = false;
    }
}



function revertChanges() {
    document.getElementById("vorname").style.borderColor = "#EAEBEB";
    document.getElementById("nachname").style.borderColor = "#EAEBEB";
    document.getElementById("email").style.borderColor = "#EAEBEB";
    document.getElementById("nachricht").style.borderColor = "#EAEBEB";
    document.getElementById("errortext").innerHTML = "";

}

function numbersOrSpecialValues(str) {
    let characters =/[`1234567890!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return characters.test(str);
}

function validateForm() {
    revertChanges();
    const x = document.forms["form"]["vorname"].value;
    const y = document.forms["form"]["nachname"].value;
    const z = document.forms["form"]["email"].value;
    const w = document.forms["form"]["nachricht"].value;
    var statusCheck = true;
        
        let countat = 0;
        let countdot = 0;
    
    if(z.match("@") != null) {
        countat = z.match(/@/g).length;
    }
    
        if(z.match(/\./g) != null) {
        countdot =  z.match(/\./g).length;
        }

    if(x=="" || numbersOrSpecialValues(x)) {
        document.getElementById("vorname").style.borderColor = "#D80030";
        document.getElementById("errortext").innerHTML = "Bitte einen Vornamen eingeben.";
        statusCheck = false;
    }
    else if(y=="" || numbersOrSpecialValues(y)) {
        document.getElementById("nachname").style.borderColor = "#D80030";
        document.getElementById("errortext").innerHTML = "Bitte einen Nachnamen eingeben.";
        statusCheck = false;
    }
     else if(z=="" || (countdot == 0) || (countat != 1)) {
         
        document.getElementById("email").style.borderColor = "#D80030";
        document.getElementById("errortext").innerHTML = "Bitte eine valide E-mail eingeben.";
        statusCheck = false;
    }
     else if(w=="") {
        
        document.getElementById("nachricht").style.borderColor = "#D80030";
        document.getElementById("errortext").innerHTML = "Bitte einen Nachricht eingeben.";
        statusCheck = false;
     }

     if(statusCheck==true) {
     setTimeout("location.href = 'EBestätigung.html';",5000);
     }
     


     return statusCheck;
     
    
  }

  const einträge = ["b1.txt", "b2.txt","b3.txt", "b4.txt"];
  const selectBlog = document.getElementsByClassName("blognav");
let myRequest = new XMLHttpRequest();
let slide = 0;

selectBlog[0].onclick = function() {
    slide = slide - 1;
    swipe();
}
selectBlog[selectBlog.length-1].onclick = function() {
    slide = slide + 1;
    swipe();
}
console.log("0"+selectBlog[0]);
console.log("1"+ selectBlog[1]);
console.log("2"+selectBlog[2]);



function swipe() {
    let asString;
    if(slide>einträge.length-1) {
        slide = 0;
    }
    else if(slide<0){
        slide = einträge.length-1;
    }
    asString = einträge[slide].toString;
    console.log(asString);
    myRequest.onload = function() {
          
        document.getElementById("blogentry").innerHTML = myRequest.responseText;
      }
      
    myRequest.open("GET", einträge[slide]);
    myRequest.send();
}






    
      


        
       

// icon icon-hsc-caret-left 
// icon icon-hsc-book
// icon icon-hsc-caret-right