// NOTA: Sé que es mejor usar getElementsById() para selección única, pero quice hacer distinto el código porque así comprendo mejor cada detelle.
// siento que usar class será interesante cuando quiera una seleccion de múltiples elementos más adelante.

let code = document.getElementsByClassName("code");
let name = document.getElementsByClassName("name");
let price = document.getElementsByClassName("price");
let units = document.getElementsByClassName("units");
let searchcode = document.getElementsByClassName("searchcode");
let productOutput = document.getElementsByClassName("productOutput");
let zine = document.getElementsByClassName("view__img");
let productsList=[];

class Producto{
    constructor(code , name, price, units){
        this.code=code;
        this.name=name;
        this.price=price;
        this.units=units;
    }
}
function add(){
    if (localStorage.getItem("products") === null){
        productsList=[];
    }else {
        productsList = localStorage.getItem("products");
        productsList = JSON.parse(productsList);
    }

    for (let i=0; i<productsList.length; i++)
        if (code[0].value === productsList[i].code){
            if (name[0].value === productsList[i].name | name[0].value === 0){
                productsList[i].units = Number (units[0].value) + Number (productsList[i].units);
            }
            name[0].value = productsList[i].name;
            price[0].value = productsList[i].price;
            units[0].value = productsList[i].units;
            return localStorage.setItem("products", JSON.stringify(productsList))
        }
    let product = new Producto(code[0].value, name[0].value, price[0].value, units[0].value)
    productsList.push(product)
    alert("Ha incluido: " + product.units + " " + product.name + ", con un costo de " + "COP $" + product.price + " c/u")
    return localStorage.setItem("products", JSON.stringify(productsList))
}
function deleteDataBase(){
    productsList = []
    localStorage.setItem("products", JSON.stringify(productsList))
}

function search(){
    productsList = localStorage.getItem("products")
    pr = JSON.parse(productsList)
    for (let i=0; i<pr.length; i++)
        if (searchcode[0].value === pr[i].code){
            return "Nombre:" + " " + pr[i].name + "<br>" + "Valor:" + " " + pr[i].price + "<br>" + "Unidades:" + " " + pr[i].units
        }
    return "No se encuentra el Producto."
}

function check(){
    let dataElement = search();

    productOutput[0].innerHTML = dataElement;
    zine[0].innerHTML = `<img class="img__int" src="./REVISTAS/${searchcode[0].value}.png">`;
    console.log(pr)
}

function createTable(){
    strg = localStorage.getItem("products")
    productsList = JSON.parse(strg)
    let tbl = ""
    let count = 0
    for (let i=0; i < productsList.length/3; i++){
        tbl += "<tr>";
        for (let d=0; d < 3; d++){
            tbl += "<td>";
            if (count<productsList.length){
                tbl += "Nombre:" + " " + productsList[count].name + "<br>" + "Código:" + " " + productsList[count].code + "<br>" + "Valor:" + " " + productsList[count].price + "<br>" + "Unidades:" + " " + productsList[count].units+ `<img src="./REVISTAS/${productsList[count].code}.png" style="width:100%">`;
            }
            tbl += "</td>";
            count++;            
        }        
    } 
    let tab = document.getElementById("table");
    tab.innerHTML = tbl   
}

let selZine = new Producto("R001", "InTension/Borderland", 35000, 1);

function select(c, n, p){
    code[0].value = c;
    name[0].value = n;
    price[0].value = p;
    units[0].value = 1;
}
