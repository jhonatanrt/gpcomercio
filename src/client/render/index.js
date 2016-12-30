import $ from 'jquery'
import $containerSearch from 'src/client/container-search'
//plantilla para llenar los numeros con su respectivo id
var number='<div class="number" id=":id:">:value:</div>'

var template = `<article class="view-res">
          <div class="info">
            <div id="numero">:name:</div>
            <button class="right">&raquo;</button>
          </div>

          <p>El Ordenamiento esta basado en quicksort, algoritmo de ordenamiento rapido</p>
          <p>Que divide el arreglo en porciones mas pequeñas</p>
          </div>
          <div class="resultado">
          :bloque:
          </div>

        </article>`

export default function renderShows(temp) {
  $containerSearch.find('.view-res').remove();

  var temporal=""
  var i=0;

  temp.forEach(function(c){
    temporal+=number
      .replace(':id:',i)
      .replace(':value:',c)
    i++;
  })

  var article=template
      .replace(':name:',temp)
      .replace(':bloque:',temporal)
  var $article = $(article)

  $containerSearch.append($article.fadeIn(1500));
}
