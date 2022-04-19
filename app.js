var name = prompt("Enter Your Name:");
var gender = prompt("Enter Your Gender:");

var userAge = prompt("Enter Your Age:");
if (userAge<=0){
    alert("Your Input For Age Not Allowed, Becuse Your Input Age Under 0...!");
}

var welMsg = confirm("You Want To Skip Welcome Messege");
if(!welMsg){
    if (gender.toLowerCase() === "male"){
        var nickName = "Mr";
        alert(`Welcome ${nickName} ${name} in website`);
    }
    else if (gender.toLowerCase() === "female"){
        var nickName = "Ms";
        alert(`Welcome ${nickName} ${name} in website`);
    }
    else{
        alert(`Welcome ${name} in website`);
    }
}

/* Task 6 .......... */
var qustions = [prompt("Are You a Fan of The Premier Leaque?"), prompt("Do you like travelling?"),
            prompt("Are You a Fan of Summer")];


function checkQ1(){
    if (qustions[0].toLowerCase() !== "yes" && qustions[0].toLowerCase() !== "no"){
        qustions[0] = "invalid";
    }
}

function checkQ2(){
    if (qustions[1].toLowerCase() !== "yes" && qustions[1].toLowerCase() !== "no"){
        qustions[1] = "invalid";
    }
}

function checkQ3(){
    if (qustions[2].toLowerCase() !== "yes" && qustions[2].toLowerCase() !== "no"){
        qustions[2] = "invalid";
    }
}

checkQ1();
checkQ2();
checkQ3();
console.log(qustions);

for(var i=0; i<qustions.length; i++){
    console.log(qustions[i]);
}
