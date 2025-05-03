const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function randomCharacter() {
    let number = Math.floor(Math.random() * characters.length)
    return characters[number]
}

function newPassword() {
    let password = ""
    for (i = 0; i < 15; i++) {
        char = randomCharacter()
        password += char
    }
    return password
}

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

function passwordGen() {
    password1.textContent = newPassword()
    password2.textContent = newPassword()
}

function copy(password) {
    let myPass = document.getElementById(password)
    let text = myPass.textContent
    if (text === "") {
        alert("Please generate some passwords")
    } else {
    navigator.clipboard.writeText(text)
    alert("Copied the text: " + myPass.textContent)
    }
}