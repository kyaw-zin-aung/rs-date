# rs-date
Our Relationship Date
// Created by Kyaw Zin Aung



window.onload=()=>{

 var d1 = document.querySelector('.d1');

 var d2 = document.querySelector('.d2');

 var d3 = document.querySelector('.d3');

 var d4 = document.querySelector('.d4');   

  var countDownDate = new Date("Jun 19, 2019 13:15:00").getTime();

  var x = setInterval(function() {

  var now = new Date().getTime();

    

  var distance = - countDownDate + now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    

   d1.innerHTML=days;

   d2.innerHTML=hours;

   d3.innerHTML=minutes;

   d4.innerHTML=seconds;

  if(distance < 0) {

    clearInterval(x);

    document.getElementById("demo").innerHTML = "EXPIRED";

  }

  

},1000); 

    

}
