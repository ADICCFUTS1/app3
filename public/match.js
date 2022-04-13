let Title = [
  "UEFA Champions League",
  "UEFA Champions League",

  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",

  "Conmebol Sudamericana",
  "Conmebol Sudamericana",
  "Conmebol Sudamericana",

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
  "Atlético Madrid - Manchester City",
  "Liverpool - Benfica",

  "Atlético Mineiro - América Mineiro",
  "Corinthians - Deportivo Cali",
  "Nacional - Estudiantes",
  "River Plate - Fortaleza",
  "Independiente del Valle - Deportes Tolima",

  "Racing Club - Cuiabá",
  "Santos - Universidad Católica",
  "Junior - Fluminense"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,atletico-madrid,manchester-city,560021.php",
  "https://es.fcstats.com/partido,liverpool,benfica-lisbon,560022.php",

  "https://es.fcstats.com/partido,atletico-mineiro,america-mineiro,560071.php",
  "https://es.fcstats.com/partido,corinthians,deportivo-cali,560072.php",
  "https://es.fcstats.com/partido,club-nacional-de-football,estudiantes-de-la-plata,560073.php",
  "https://es.fcstats.com/partido,river-plate,fortaleza-ec,560070.php",
  "https://es.fcstats.com/partido,independiente-jose-teran,deportes-tolima,560074.php",

  "https://es.fcstats.com/partido,racing-club,cuiaba,560287.php",
  "https://es.fcstats.com/partido,santos,universidad-catolica-del-ecuador,560285.php",
  "https://es.fcstats.com/partido,atletico-junior,fluminense,560286.phps",

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
