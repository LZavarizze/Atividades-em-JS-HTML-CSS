var calcular = 0;

function soma(n1 , n2){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var calcular = (n1+n2);
   alert ("A soma da: " + (calcular));
}
function sub(n1 , n2){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var calcular = (n1-n2);
   alert ("A subtração da: " + (calcular));
}
function mult(n1 , n2){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var calcular = (n1*n2);
   alert ("A multiplicação da: " + (calcular));
}
function div(n1 , n2){
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var calcular = (n1/n2);
   alert ("A divisão da: " + (calcular));
}
