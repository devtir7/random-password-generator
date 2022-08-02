const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let index = 0
let passLength = 7
let password1
let password2
    
function genPass(){
    password1 = ""
    password2 = ""
    
    for (let i=0; i<passLength; i++){
        index = Math.floor(Math.random() * characters.length)
        password1 += characters[index]
    }
    
    for (let i=0; i<passLength; i++){
        index = Math.floor(Math.random() * characters.length)
        password2 += characters[index]
    }
    
    dispPass()
}

function dispPass(){
    let pass1El = document.getElementById("pass1")
    let pass2El = document.getElementById("pass2")
    pass1El.textContent = password1
    pass2El.textContent = password2
}


function copyToClipboard(){
    
        document.execCommand("Copy")
    
}