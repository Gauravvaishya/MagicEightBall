var randomNumber = ["It is certain","It is decidedly so","Reply hazy try again","Cannot predict now","Do not count on it","My sources say no","Outlook not so good","Signs point to yes"];


function nam(){
	document.getElementById("but").innerHTML = "";
	var userName = "";
	userName = document.getElementById("input1").value;
	(userName != "") ? document.getElementById("hello").innerText = "Hello , " + userName + "!" : document.getElementById("hello").innerHTML = "Hello!";
	(userName != "" || userName == "") ? document.getElementById("msg").style.display = "block" : document.getElementById("hello").innerHTML = "" ;
    document.getElementById("inp1").innerHTML = "";	

}

function tran(){
	document.getElementById("hello").style.transform = "scale(1,1)";
}




function randomtest(){
	         
             let ans = Math.floor(Math.random() * 8);
             document.getElementById("drop2").style.display = "block";
             document.getElementById("output").innerHTML =randomNumber[ans] ; 
}


function rad(){
     if(document.getElementById("yes").checked){
         document.getElementById("hello1").innerHTML = "QUESTIONS";
         document.getElementById("msg").innerHTML = "";
         document.getElementById("inp1").innerHTML = "";
         document.getElementById("drop").style.display = "block";
         document.getElementById("but").innerHTML = "";
         document.getElementById("but1").style.display = "block";
     }
	 else{
        document.getElementById("inp1").innerHTML= "";
	 	document.getElementById("msg").innerHTML = "We will wait for you.......All the best";
     }
}


 
function quit(){
	  document.getElementById("hello1").innerHTML = "";
	  document.getElementById("drop").innerHTML = "";
	  document.getElementById("but1").innerHTML = "";
      document.getElementById("drop2").innerHTML = "";
	  document.getElementById("hello1").innerHTML = "Thank you for entering into the game...";
	  document.getElementById("but7").style.display = "block";
}    



function hide(){
	document.getElementById("output").innerHTML = "";

}  


// function restart(){
// 	document.getElementById("hello1").innerHTML = "";
// 	document.getElementById("head7").innerHTML = "";
// }