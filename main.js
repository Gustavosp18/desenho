let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let desenhando = false;
let corAtual = "#0000ff"; // Cor inicial (azul)

canvas.addEventListener("mousedown", function(event){
    desenhando = true;
    contexto.fillStyle = corAtual; // Define a cor de preenchimento
    contexto.strokeStyle = corAtual; // Define a cor do traço (necessário para o preenchimento)
    contexto.lineWidth = 30; // Define a largura da linha para pintar áreas maiores
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
})

canvas.addEventListener("mousemove", function(event){
    if(desenhando) {
        contexto.lineTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
        contexto.stroke();
    }
})

canvas.addEventListener("mouseup", function(event){
    desenhando = false;
    contexto.closePath();
})

let colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", function(event){
    corAtual = event.target.value;
});

let darkBlueButton = document.getElementById("darkBlueButton");
darkBlueButton.addEventListener("click", function(){
    corAtual = "#00008b"; // Azul escuro
});

let greenButton = document.getElementById("greenButton");
greenButton.addEventListener("click", function(){
    corAtual = "#008000"; // Verde
});

let yellowButton = document.getElementById("yellowButton");
yellowButton.addEventListener("click", function(){
    corAtual = "#ffff00"; // Amarelo
});

let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function(){
    contexto.clearRect(0, 0, canvas.width, canvas.height);
});
