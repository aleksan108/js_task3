function sayHello(){
    let name = document.getElementById('name');
    let sayhi = document.getElementById('result');
    sayhi.innerText="Привет " + name.value +"!";
}
