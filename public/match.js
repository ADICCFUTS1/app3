let Title = [
  "UEFA Champions League",

  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",

  "Conmebol Sudamericana",
  "Conmebol Sudamericana",
  "Conmebol Sudamericana",

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
  "Manchester City - Real Madrid",

  "Estudiantes - RB Bragantino",
  "Libertad - Athletico-PR",
  "Vélez Sarsfield - Nacional",
  "Corinthians - Boca Juniors",
  "Independiente del Valle - Atlético Mineiro",
  "Talleres Córdoba - Sporting Cristal",

  "Deportivo La Guaira - Independiente",
  "Fluminense - Unión Santa Fe",
  "Medellín - Internacional",

  "Deportivo Pasto - Patriotas Boyacá"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,manchester-city,real-madrid,561679.php",

  "https://es.fcstats.com/partido,estudiantes-de-la-plata,bragantino,560078.php",
  "https://es.fcstats.com/partido,libertad-asuncion,atletico-paranaense,560080.php",
  "https://es.fcstats.com/partido,velez-sarsfield,club-nacional-de-football,560081.php",
  "https://es.fcstats.com/partido,corinthians,boca-juniors,560082.php",
  "https://es.fcstats.com/partido,independiente-jose-teran,atletico-mineiro,560083.php",
  "https://es.fcstats.com/partido,talleres-de-cordoba,sporting-cristal,560084.php",

  "https://es.fcstats.com/partido,deportivo-la-guaira,independiente,560296.php",
  "https://es.fcstats.com/partido,fluminense,union-de-santa-fe,560298.php",
  "https://es.fcstats.com/partido,independiente-medellin,internacional,560299.php",

  "https://es.fcstats.com/partido,deportivo-pasto,patriotas,547675.php",

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

for (var i = 0; i <= ustat.length - 23; i++) {
  //Est.push("" + ustat[i]);
  Est.push("https://pirlotv2.herokuapp.com/full/app/test/est?url=" + ustat[i]);
}

let Enl = [
  "",

  "",
  "",
  "",
  Extra[0],
  Extra[1],
  Extra[2],

  "",
  Extra[3],
  Extra[4],

  ACol[0],

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
