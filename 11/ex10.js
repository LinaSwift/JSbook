let login = prompt("your login");
let pass = prompt("enter password");
document.addEventListener("keydown", function(event);



if (login === "admin"){
    
    if (pass === "i'm first"){
        alert("hello");
    }else if (pass === " " || pass === null){
        alert("escape");
    } else alert("wrong password");
} else if (login === " " || login === null) {
    alert("escape");
}else alert ("i don't know you")