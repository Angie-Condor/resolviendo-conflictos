  function enviaDatos(){
    var talla = document.getElementById('talla').value;
    var peso = document.getElementById('peso').value;
    var imc= parseFloat(peso/Math.pow(talla,2));
    document.getElementById("datos").innerHTML="</br>" + "IMC : " + imc;
}
