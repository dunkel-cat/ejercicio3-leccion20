# Ejercicio N°2 de la lección 20

var feature = "closures";
(function (){
if (typeof featrue === "undefined){
    var feature = "callbacks";
    console.log ("JS coders love its" + feature);
}else{
    console.log ("JS developers love its" + feature);
    }          
})();