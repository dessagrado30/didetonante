// let name = document.getElementById("name");
// let organization = document.getElementById("organization");
// let email = document.getElementById("email");
// let project = document.getElementById("project");
// let message = document.getElementById("messaje");


function ShowControl(){
    const donateForm = document.getElementsByClassName("donate__form");
    donateForm[0].style.translate = "-100%";
    event.preventDefault();
}

function Probe(ind){
    const donateForm = document.getElementsByClassName("donate__form");
    const checkLogo = document.getElementById("check_button");
    if (ind === true){
        checkLogo.innerHTML = '<img src="Frontend/assets/icons/check.svg" alt="sendbutton"></img>'
        checkLogo.disabled = true;
        checkLogo.outline = "none"
        donateForm[0].style.translate = "0%"
    }else{
        document.getElementById("check_button").innerHTML = '<img src="Frontend/assets/icons/triangle-alert.svg" alt="sendbutton"></img>'
    }
}

function Post(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
        "name":document.getElementById("name").value,
        "organization":document.getElementById("organization").value,
        "email":document.getElementById("email").value,
        "project":document.getElementById("project").value,
        "message":document.getElementById("message").value
    });
    let requestOption = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    fetch("/senders", requestOption)
        .then((response) => response.text())
        .then((result) => Probe(true))
        .catch((error) => console.error(error));
}

function View(result){
    const donateForm = document.getElementsByClassName("print");
    let transformado = JSON.parse(result);
    var salida="";
    var elemento="";
    for (let vc in transformado){
        elemento = "ID: " + transformado[vc].id;
        elemento = elemento + "<br>Nombre: " + transformado[vc].name;
        elemento = elemento + "<br>Organization: " + transformado[vc].organization;
        elemento = elemento + "<br>Email: " + transformado[vc].email;
        elemento = elemento + "<br>Proyecto: " + transformado[vc].project;
        elemento = elemento + "<br>Mensaje: " + transformado[vc].message;
        salida = salida  + elemento + "<br><br>";
    }
    donateForm[0].innerHTML = salida;
}
function Get(){
    let key = document.getElementById("key");
    event.preventDefault();

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`senders?${key.value}`, requestOptions)
      .then((response) => response.text())
      .then((result) => View(result))
      .catch((error) => console.error(error));
}

function PutResponse(result){
    alert(result);
}

function Put(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
        "id":document.getElementById("key").value,
        "name":document.getElementById("name").value,
        "organization":document.getElementById("organization").value,
        "email":document.getElementById("email").value,
        "project":document.getElementById("project").value,
        "message":document.getElementById("message").value
    });
    let requestOption = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    fetch(`senders`, requestOption)
        .then((response) => response.text())
        .then((result) => PutResponse(result))
        .catch((error) => console.error(error));
}

function Delete(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "appication/json")
    event.preventDefault()

    let requestOption = {
        method : "DELETE",
        headers : myHeaders,
        redirect : "follow"
    }
    let key = document.getElementById("key")
    fetch(`senders?${key.value}`, requestOption)
        .then((response) => response.text())
        .then((result) => alert(result))
        .catch((error) => console.error(error))
}
