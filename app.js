function calcularIMC(){
  let peso =  document.getElementById("peso").value;
  let altura = document.getElementById("Altura").value;

  if (peso == '' || altura == ''){
      alert("Preencha todos os campos")
  }


let calculo = (peso / (altura * altura))
let resultado = document.getElementById("resultado") 
    
if (calculo < 18.5) {
  resultado.innerHTML = `IMC: ${calculo.toFixed(2)} Você está abaixo do peso`; 
  resultado.style.backgroundColor = "#9C27B0"
} else if (calculo < 25) {
  resultado.innerHTML = `IMC: ${calculo.toFixed(2)} Você está no peso ideal. Parabéns!!`;
  resultado.style.backgroundColor = "4CAF50"
} else if (calculo < 30) {
  resultado.innerHTML = ` IMC: ${calculo.toFixed(2)} Você está acima do peso ideal`;
  resultado.style.backgroundColor =  "#FFC107"
} else if (calculo < 35 ) {
  resultado.innerHTML = `IMC: ${calculo.toFixed(2)} Você está com obesidade nível I`;
  resultado.style.backgroundColor = "#FF9800"
} else if (calculo < 40){
  resultado.innerHTML = `IMC: ${calculo.toFixed(2)} Você está com obesidade nível II`
  resultado.style.backgroundColor = " #FF5722"
}
else {
  resultado.textContent = `IMC: ${calculo.toFixed(2)} Você está com obesidade nível III`
  resultado.style.backgroundColor = " #795548"
}

return false

}  


