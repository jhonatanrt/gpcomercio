import $ from 'jquery'

var $contenedor = $('#app-body').find('.result-show')
var aray={};
var a=0;
var valor=0;
var arr=[];
var pos_mov = function(i, j, value,pivot){
    this.i = i;
    this.j = j;
    this.value = value;
    this.pivot= pivot;
    };

//Sirve para clickear un boton oculto en el div
  $('#app-body').find('form').submit(function (ev) {
      setTimeout(function(){
        $('.right').trigger('click');
      },10)
    })

//ejecuta la animacion, reinicia el diccionario para obtener el ordenamiento
$contenedor.on('click', 'button.right', function (ev) {
  aray=[]; a=0;valor=0;arr=[];
  var temp=$("#numero").text();
  var numOrdenar=temp.split(",").map(Number);
  numOrdenar.forEach(function () {
    aray[a]=a;
    a++;
  })

  $("#numero").text("El numero Ordenado es: "+ordenar(numOrdenar,0,numOrdenar.length-1));
  arr.forEach(function (a) {
    setTimeout(function() {

        mover(a["i"],a["j"],a["value"])
        var aTemp=aray[a["j"]]
        aray[a["j"]]=aray[a["i"]]
        aray[a["i"]]=aTemp

    }, a["value"]*6000);


  })

})
//funcion quicksort
function ordenar(a,inic,fin) {
    var i=inic;
    var j=fin;
    var temp;
    var idpivot=Math.round((i+j)/2);
    var pivot=a[idpivot];

    while (i<=j) {

        while (a[i]<pivot) {
          i++;
        }
        while (a[j]>pivot) {
          j--;
        }

        if (i<=j) {
          if(i!=j){
            arr.push((new pos_mov(i,j,valor,idpivot)))
            valor++;

          }
          temp=a[i];
          a[i]=a[j];
          a[j]=temp;
          i++;
          j--;
        }
    }

    if (inic<j)
        ordenar(a,inic,j);

    if (i<fin)
        ordenar(a,i,fin);

  return a;
}
//ejecuta la animacion de movimiento
function mover(i,j,val) {

      $( "#"+aray[i] ).animate({ "top": "-=50px" }, 1000 )
                      .animate({ "left": "+="+50*(j-i)+"px" }, 1000 )
                      .animate({ "top": "+=50px" }, 1000 );


      $( "#"+aray[j] ).animate({ "top": "-=50px" }, 1000 )
                      .animate({ "left": "-="+50*(j-i)+"px" }, 1000 )
                      .animate({ "top": "+=50px" }, 1000 );

}

export default $contenedor
