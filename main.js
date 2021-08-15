var guests = []
document.getElementById("nice").style.display = "none";

function submit(){
    var are= document.getElementById("guest").value;
    console.log(are);
    guests.push(are);
    alert("your guest are added.");
    document.getElementById("guest").value = " ";
    document.getElementById("submitted").innerHTML = guests;
    document.getElementById("nice").style.display = "none";
}
function show(){
    document.getElementById("hello").style.display = "block ";
    document.getElementById("hello").innerHTML = guests; 
    document.getElementById("nice").style.display = "block" 
}
function hide(){
    document.getElementById("hello").style.display = "none";
}
function sort(){
    var sorted = guests.sort();
    document.getElementById("hey").innerHTML = sorted; 
}
function end(){
    alert("Thank you for using guest list, we are super delighted. plus we will give you the list right below the END button" );
   document.getElementById("demo").innerHTML = guests;
  
}


