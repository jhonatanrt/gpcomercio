
import $ from 'jquery'
import page from 'page'

$('#app-body')
  .find('form')
  .submit(function (ev) {
    ev.preventDefault();
    var busqueda = $(this)
      .find('input[type="text"]')
      .val();

    page(`/search?${busqueda}`)
  })

$('#numBusc').keypress(function(evt){
      var charCode = (evt.which) ? evt.which : event.keyCode
      var numt=String.fromCharCode(evt.which);
      var numInput=$("#numBusc").val()+"";
      if (charCode > 31 && (charCode < 48 || charCode > 57))
          return false;

      if (numInput.split("").indexOf(""+numt)!=-1) {
          return false;
      }
      return true;

    })
