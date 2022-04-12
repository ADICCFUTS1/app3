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
  "Bayern München - Villarreal",
  "Real Madrid - Chelsea",

  "Boca Juniors - Always Ready",
  "Cerro Porteño - Colón",
  "Flamengo - Talleres Córdoba",
  "Palmeiras - Independiente Petrolero",
  "Peñarol - Olimpia",

  "Oriente Petrolero - Unión Santa Fe",
  "Defensa y Justicia - Atlético Goianiense",
  "Independiente - General Caballero JLM",

  "Atlético Bucaramanga - Cortuluá"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,bayern-munchen,villarreal,560019.php",
  "https://es.fcstats.com/partido,real-madrid,chelsea-london,560020.php",

  "https://es.fcstats.com/partido,boca-juniors,always-ready,560062.php",
  "https://es.fcstats.com/partido,cerro-porteno,colon,560063.php",
  "https://es.fcstats.com/partido,flamengo,talleres-de-cordoba,560065.php",
  "https://es.fcstats.com/partido,palmeiras,independiente-petroleros,560066.php",
  "https://es.fcstats.com/partido,penarol,olimpia-asuncion,560067.php",

  "https://es.fcstats.com/partido,oriente-petrolero,union-de-santa-fe,560280.php",
  "https://es.fcstats.com/partido,defensa-y-justicia,atletico-goianiense,560281.php",
  "https://es.fcstats.com/partido,independiente,general-caballero,560282.php",

  "https://es.fcstats.com/partido,atletico-bucaramanga,cortulua,547652.php",

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

  AConmebol[0],
  Extra[0],
  "",
  "",
  "",

  Extra[1],
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
