let Title = [
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Bundesliga",

  "Premier League",
  "Premier League",

  "FA CUP",

  "Serie A",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",

  "Liga Dimayor Colombia",
  "Liga Dimayor Colombia",
  "Liga Dimayor Colombia",
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
  "Elche - Mallorca",
  "Deportivo Alavés - Rayo Vallecano",
  "Valencia - Osasuna",
  "Getafe - Villarreal",

  "Borussia Dortmund - Wolfsburg",

  "Manchester United - Norwich City",
  "Southampton - Arsenal",

  "Manchester City - Liverpool",

  "Juventus - Bologna",

  "San Lorenzo - Platense",
  "Colón - Independiente",
  "Barracas Central - Estudiantes",
  "Racing Club - Unión Santa Fe",

  "Once Caldas - Cortuluá",
  "Deportes Tolima - Deportivo Pasto",
  "La Equidad - Jaguares de Córdoba",
  "Junior - Atlético Bucaramanga"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,elche,mallorca,509936.php",
  "https://es.fcstats.com/partido,deportivo-alaves,rayo-vallecano,509932.php",
  "https://es.fcstats.com/partido,valencia,osasuna,509941.php",
  "https://es.fcstats.com/partido,getafe,villarreal,509937.php",

  "https://es.fcstats.com/partido,borussia-dortmund,vfl-wolfsburg,508895.php",

  "https://es.fcstats.com/partido,manchester-united,norwich-city,505967.php",
  "https://es.fcstats.com/partido,southampton,arsenal-london,505969.php",

  "https://es.fcstats.com/partido,manchester-city,liverpool,561043.php",

  "https://es.fcstats.com/partido,juventus-torino,bologna,523605.php",

  "https://es.fcstats.com/partido,san-lorenzo,platense,549292.php",
  "https://es.fcstats.com/partido,colon,independiente,549286.php",
  "https://es.fcstats.com/partido,barracas-central,estudiantes-de-la-plata,549283.php",
  "https://es.fcstats.com/partido,racing-club,union-de-santa-fe,549291.php",

  "https://es.fcstats.com/partido,once-caldas,cortulua,547667.php",
  "https://es.fcstats.com/partido,deportes-tolima,deportivo-pasto,547663.php",
  "https://es.fcstats.com/partido,la-equidad,jaguares-de-cordoba,547666.php",
  "https://es.fcstats.com/partido,atletico-junior,atletico-bucaramanga,547665.phps",

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
  AEsp[0],
  "",

  "",

  "",
  "",

  "",

  AIta[0],

  ACol[0],
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
