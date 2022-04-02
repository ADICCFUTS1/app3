let Title = [
  "Premier League",
  "Premier League",
  "Premier League",
  "Premier League",

  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Bundesliga",
  "Bundesliga",

  "Liga Profesional Argentina",
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
  "Liverpool - Watford",
  "Burnley - Manchester City",
  "Chelsea - Brentford",
  "Manchester United - Leicester City",

  "Getafe - Mallorca",
  "Levante - Villarreal",
  "Celta de Vigo - Real Madrid",
  "Atlético Madrid - Deportivo Alavés",

  "Freiburg - Bayern München",
  "B. Dortmund - RB Leipzig",

  "Racing Club - Sarmiento",
  "Godoy Cruz - Estudiantes",
  "Vélez Sarsfield - Lanús",
  "Defensa y Justicia - River Plate",
  "Boca Juniors - Arsenal",

  "Medellín - Envigado",
  "Deportivo Pereira - Deportes Tolima",
  "Patriotas Boyacá - Atlético Nacional",
  "Junior - Alianza Petrolera"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,liverpool,watford,505949.php",
  "https://es.fcstats.com/partido,burnley,manchester-city,505945.php",
  "https://es.fcstats.com/partido,chelsea-london,brentford,505946.php",
  "https://es.fcstats.com/partido,manchester-united,leicester-city,505950.php",

  "https://es.fcstats.com/partido,getafe,mallorca,509917.php",
  "https://es.fcstats.com/partido,levante,villarreal,509919.php",
  "https://es.fcstats.com/partido,celta-de-vigo,real-madrid,509916.php",
  "https://es.fcstats.com/partido,atletico-madrid,deportivo-alaves,509913.php",

  "https://es.fcstats.com/partido,freiburg,bayern-munchen,508879.php",
  "https://es.fcstats.com/partido,borussia-dortmund,rb-leipzig,508877.php",

  "https://es.fcstats.com/partido,racing-club,sarmiento,549262.php",
  "https://es.fcstats.com/partido,godoy-cruz,estudiantes-de-la-plata,549259.php",
  "https://es.fcstats.com/partido,velez-sarsfield,lanus,549265.php",
  "https://es.fcstats.com/partido,defensa-y-justicia,river-plate,549257.php",
  "https://es.fcstats.com/partido,boca-juniors,arsenal-de-sarandi,549254.php",

  "https://es.fcstats.com/partido,independiente-medellin,envigado-fc,547644.php",
  "https://es.fcstats.com/partido,deportivo-pereira,deportes-tolima,547649.php",
  "https://es.fcstats.com/partido,patriotas,atletico-nacional,547648.php",
  "https://es.fcstats.com/partido,atletico-junior,alianza-petrolera,547645.php",
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

  "", //"",
  "", //"",

  "",
  "",
  "",
  Extra[1],
  "",

  "",
  "",
  ACol[0],
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
