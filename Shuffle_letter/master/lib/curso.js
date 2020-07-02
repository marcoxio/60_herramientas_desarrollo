var txtMezclar = $("#txtMezclar");
var txtTexto   = $("#txtTexto");
var mensajes =['Hola Marco...','Bienvenido a mi página web','Espero te guste...'];
var actual = 0;

txtMezclar.text(mensajes[0]);

// txtMezclar.shuffleLetters();



setInterval(function (){
    actual++;
    if(actual >= mensajes.length){
        actual =0;
    }

    txtMezclar.shuffleLetters({
        "text": mensajes[actual]
      });

}, 4000);
