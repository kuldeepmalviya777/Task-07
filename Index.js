

function backend()  
{

  var i = document.getElementById("input").value;

 var xhr = new XMLHttpRequest();
 xhr.open("GET", "http://192.168.43.200/cgi-bin/CGI.py?command="+i , true);
 xhr.send();

 //output from url
xhr.onload = function(){
 var output = xhr.responseText;
 document.getElementById("output").innerHTML = output; 
}


}

function backend1()  
{

  var i = document.getElementById("btn1").value;

 var xhr = new XMLHttpRequest();
 xhr.open("GET", "http://192.168.43.200/cgi-bin/CGI.py?command="+i , true);
 xhr.send();

 //output from url
xhr.onload = function(){
 var output = xhr.responseText;
 document.getElementById("output").innerHTML = output; 
}


}

function backend2()  
{

  var i = document.getElementById("btn2").value;

 var xhr = new XMLHttpRequest();
 xhr.open("GET", "http://192.168.43.200/cgi-bin/CGI.py?command="+i , true);
 xhr.send();

 //output from url
xhr.onload = function(){
 var output = xhr.responseText;
 document.getElementById("output").innerHTML = output; 
}


}

function backend3()  
{

  var i = document.getElementById("btn3").value;

 var xhr = new XMLHttpRequest();
 xhr.open("GET", "http://192.168.43.200/cgi-bin/CGI.py?command="+i , true);
 xhr.send();

 //output from url
xhr.onload = function(){
 var output = xhr.responseText;
 document.getElementById("output").innerHTML = output; 
}


}

function backend4()  
{

  var i = document.getElementById("btn4").value;

 var xhr = new XMLHttpRequest();
 xhr.open("GET", "http://192.168.43.200/cgi-bin/CGI.py?command="+i , true);
 xhr.send();

 //output from url
xhr.onload = function(){
 var output = xhr.responseText;
 document.getElementById("output").innerHTML = output; 
}


}

