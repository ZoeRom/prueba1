function validarNumero(input){
    input.value = input.value.replace(/[^0-9]/g, '');


}

function sumar() {
  
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("resultado").innerHTML = "Por favor ingresa dos números válidos.";
    } else {
  
      var suma = num1 + num2;
      document.getElementById("resultado").innerHTML = "La suma es: " + suma;
      document.getElementById("numero1").value = "";
      document.getElementById("numero2").value = "";
    }
  }

