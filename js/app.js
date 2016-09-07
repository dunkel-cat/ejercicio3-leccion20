function conteo(num){
    setInterval(function(){document.write(num++ + "..."); }, 2000);
}
conteo(10)