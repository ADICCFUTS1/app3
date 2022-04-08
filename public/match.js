let Title = [
  "Bundesliga",

  "LaLiga",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",

  "Liga Dimayor Colombia",

  /**/
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR",
  "ERROR"
];
let Match = [
  "Stuttgart - Borussia Dortmund",
  "Sevilla - Granada",
  "Arsenal - Godoy Cruz",
  "Atlético Tucumán - Gimnasia La Plata",
  "Rosario Central - Colón",
  "Sarmiento - San Lorenzo",
  "Millonarios - La Equidad"
];

var Est = [];

let ustat = [
  /** ***TEST*** */
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estadisticas-no-disp.html",
  "https://pirlotv-redirecciones.blogspot.com/2020/09/estaisticas-no-disp.html"
];

for (var i = 0; i <= ustat.length - 1; i++) {
  Est.push("" + ustat[i]);
  //Est.push("https://pirlotv2.herokuapp.com/full/app/test/est?url=" + ustat[i]);
}

let Enl = [
  "",

  "",

  "",
  "",
  "",
  "",

  "",

  /** */
  /** */
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1",
  "error!!1"
];

function formatDate(date) {
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 101).toString().substring(1);
  var day = (date.getDate() + 100).toString().substring(1);
  return day + "/" + month + "/" + year;
}

//Usage example:
//alert(formatDate(new Date()));
let HOY = formatDate(new Date());
