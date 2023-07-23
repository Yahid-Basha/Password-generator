const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

pass1 = document.getElementById('password1')
pass2 = document.getElementById('password2')
passLen = document.getElementById('length')
NumSyms = document.getElementById('NumSyms')
console.log(NumSyms.value)

function getIndex(){
    if(NumSyms.checked === true){
        return characters.length
    } else {
        return 52
    }
}

function passwordGen(){
    let password =""    
    for(let i = 0; i < parseInt(passLen.value); i++){
        let pick = Math.floor(Math.random()*getIndex())
        password+=characters[pick]
    }
    return password
}
function setPassword(){
    pass1.textContent = passwordGen()
    pass2.textContent = passwordGen()
    
}

function copy2(){
        console.log("hiii")
        document.execCommand("copy");
        // navigator.clipboard.writeText(pass2.textContent);
        alert("Copied the text: " + pass2.textContent);
}

