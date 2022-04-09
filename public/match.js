let Title = [
  "Premier League",
  "Premier League",
  "Premier League",

  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Bundesliga",

  "Serie A",
  "Serie A",

  "Ligue 1",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",

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
  "Everton - Manchester United",
  "Arsenal - Brighton & Hove Albion",
  "Southampton - Chelsea",

  "Cádiz - Real Betis",
  "Mallorca - Atlético Madrid",
  "Villarreal - Athletic Club",
  "Real Madrid - Getafe",

  "Bayern München - Augsburg",

  "Internazionale - Hellas Verona",
  "Cagliari - Juventus",

  "Clermont - PSG",

  "Unión Santa Fe - Newell's Old Boys",
  "Talleres Córdoba - Defensa y Justicia",
  "Independiente - Tigre",
  "Vélez Sarsfield - Boca Juniors",

  "Deportes Tolima - Rionegro Águilas",
  "Unión Magdalena - Patriotas Boyacá",
  "Deportivo Cali - Junior"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,everton,manchester-united,505957.php",
  "https://es.fcstats.com/partido,arsenal-london,brighton-hove-albion,505954.php",
  "https://es.fcstats.com/partido,southampton,chelsea-london,505962.php",

  "https://es.fcstats.com/partido,cadiz,real-betis,509922.php",
  "https://es.fcstats.com/partido,mallorca,atletico-madrid,509926.php",
  "https://es.fcstats.com/partido,villarreal,athletic-bilbao,509931.php",
  "https://es.fcstats.com/partido,real-madrid,getafe,509929.php",

  "https://es.fcstats.com/partido,bayern-munchen,augsburg,508882.php",

  "https://es.fcstats.com/partido,internazionale-milano,hellas-verona,523596.php",
  "https://es.fcstats.com/partido,cagliari-calcio,juventus-torino,523593.php",

  "https://es.fcstats.com/partido,clermont,paris-saint-germain,508173.php",

  "https://es.fcstats.com/partido,union-de-santa-fe,newells-old-boys,549278.php",
  "https://es.fcstats.com/partido,talleres-de-cordoba,defensa-y-justicia,549277.php",
  "https://es.fcstats.com/partido,independiente,tigre,549270.php",
  "https://es.fcstats.com/partido,velez-sarsfield,boca-juniors,549279.php",

  "https://es.fcstats.com/partido,deportes-tolima,rionegro-aguilas,547654.php",
  "https://es.fcstats.com/partido,union-magdalena,patriotas,547660.php",
  "https://es.fcstats.com/partido,deportivo-cali,atletico-junior,547653.php",

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
  AEsp[0],
  "",

  "",

  AIta[0],
  "",

  "",

  Extra[0],
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
