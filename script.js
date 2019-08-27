footersElts=document.getElementsByTagName("footer")[0];
footersElts.addEventListener("click",function(){
	console.log("clique");
});
// Fonctionnalité 1-bis
let a=0
let onClick=function(){
	a++;
	console.log("clic numero" +a);
}
footersElts.addEventListener("click",onClick);
//Fonctionnalité 2
buttonEt1=document.querySelector("span.navbar-toggler-icon");
navbarElt=document.getElementById("navbarHeader");
let clicStat=false;
let buttonClick=function(){
	if(clicStat===false){
		navbarElt.classList.remove("collapse","bg-dark");
		clicStat=true;
	}else if(clicStat===true){
		navbarElt.classList.add("collapse","bg-dark");
		clicStat=false;
	}
}
buttonEt1.addEventListener("click",buttonClick);
//Fonctionnalité 3
let editBtnElt=document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
let pElt=document.getElementsByClassName("card-text")[0];
let EditClick = function(){
	pElt.style.color="red";
}
editBtnElt.addEventListener("click",EditClick);

//Fonctionnalité 4 
let editBtnElt1=document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
let pElt1=document.getElementsByClassName("card-text")[1];
let pClic=false;
let EditClick1=function(){
	if(pClic===false){
		pElt1.style.color="green";
		pClic=true;
	}else{
		pElt1.style.color="";
		pClic=false;
	}
}
editBtnElt1.addEventListener("click",EditClick1);

//Fonctionnalité 5
let linkRel=document.getElementsByTagName("link")[0];
let navClic2=document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
let navClic=false;
let effetNucleaire =function(){
	if(navClic===false){
		linkRel.removeAttribute("href");
		navClic=true;
	}else{
		linkRel.setAttribute("href","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
		navClic=false;
	}
}
navClic2.addEventListener("dbclick",effetNucleaire);