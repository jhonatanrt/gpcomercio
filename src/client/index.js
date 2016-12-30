import $ from 'jquery'
import page from 'page'
import showRender from 'src/client/render'
import 'src/client/search-form'


page('/', function (ctx, next) {

})

page('/search', function (ctx, next) {

  var number=ctx.querystring;
  var array=[];
  array=number.split("").map(Number);
  showRender(array);
  })
