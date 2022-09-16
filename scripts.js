function sayHello(){
    const name = document.getElementById('name');
    const sayhi = document.getElementById('result');
    sayhi.innerText="Привет " + name.value +"!";
}
