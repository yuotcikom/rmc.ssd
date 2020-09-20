alert("Hello Welcome to RMC"
var header = document.querySelector("header");
header.style.color = "yellow";

var header = document.querySelector("header");
var IsBlue = false;
SetInterval(function(){
	if(IsBlue){
		header.style.background = "#fff";
	}
	else{
		header.style.background = "pink";
	}
	IsBlue = !IsBlue;
},1000);

var h2 = document.queryselector("h2");
h2.style.color = "pink";