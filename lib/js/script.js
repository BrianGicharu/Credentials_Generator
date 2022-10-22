
import maleNames from './data/maleNames.json' assert { type: "json" };
import femaleNames from "./data/femaleNames.json" assert { type: "json" };

window.onload = () =>{
    let codes = [generateEmail,generateNames,generatePassword]
    document.getElementById('jsonArea').innerText = codes[Math.floor(Math.random()*codes.length)]
}

// Enable copy listener
document.getElementById("jsonArea").addEventListener('click', (e)=>{
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        alert("Text copied!")
        return navigator.clipboard.writeText(window.event.target.innerText);
    return Promise.reject('operation failed!');
})

document.getElementById("copyName").addEventListener('click', ()=>{
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        alert("Text copied!")
        return navigator.clipboard.writeText(document.getElementById("full_name").value);
    return Promise.reject('operation failed!');
})

document.getElementById("copyEmail").addEventListener('click', ()=>{
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        alert("Text copied!")
        return navigator.clipboard.writeText(document.getElementById("email").value);
    return Promise.reject('operation failed!');
})

document.getElementById("copyPassword").addEventListener('click', ()=>{
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        alert("Text copied!")
        return navigator.clipboard.writeText(document.getElementById("password").value);
    return Promise.reject('operation failed!');
})

document.getElementById('generateData')?.addEventListener("click", ()=>{

    let name = (document.getElementById("includeName").checked)?
                    (document.getElementById("male").checked)?
                    generateNames("male"):
                    ((document.getElementById("female").checked)?
                        generateNames("female"):
                        (document.getElementById("neutral").checked?
                    generateNames("neutral"):"no name")):
                ""

    let email = (document.getElementById("includeEmail").checked)?generateEmail():""

    let password = (document.getElementById("includePassword").checked)?generatePassword(15):""
   
    document.getElementById('jsonArea').innerText = `
    {
        \t"name": "${name}",
        \t"email":"${email}",
        \t"password":"${password}",
    }`
    document.querySelector('#full_name').value = name
    document.querySelector('#email').value = email
    document.querySelector('#password').value= password
})

function generateNames(gender){
    return (gender === "male")?
            maleNames.names[Math.floor(Math.random()*maleNames.names.length)]
            +" "+
            maleNames.names[Math.floor(Math.random()*maleNames.names.length)]:
            (gender==="female")?
            femaleNames.names[Math.floor(Math.random()*femaleNames.names.length)]
            +" "+
            femaleNames.names[Math.floor(Math.random()*femaleNames.names.length)]:
            "Jeanette Doe"
}

function generatePassword($len){
    let pass = ""
    for(let i=0; i<=$len; i++){
        pass += String.fromCharCode(Math.floor(Math.random()*(127-32)+32))
    }
    return pass;
}

function generateEmail(){
    let email = ""
    for(let i=0; i<=10; i++){
        email +=  String.fromCharCode(Math.floor(Math.random()*(122-97)+97))
    }
    return email+"@email.com";
}