let Title = [
  "Premier League",
  "Premier League",
  "Premier League",

  "Serie A",

  "Bundesliga",

  "Ligue 1",

  "Copa del Rey",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
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
  "Arsenal - Manchester United",
  "Manchester City - Watford",
  "Brentford - Tottenham Hotspur",

  "Internazionale - Roma",

  "Bayern München - Borussia Dortmund",

  "PSG - Lens",

  "Real Betis - Valencia",

  "Gimnasia La Plata - Unión Santa Fe",
  "San Lorenzo - Patronato",
  "Rosario Central - Independiente",
  "Central Córdoba SdE - Boca Juniors",
  "Banfield - Talleres Córdoba",
  "Barracas Central - Vélez Sarsfield",

  "Atlético Bucaramanga - Medellín",
  "Atlético Nacional - Once Caldas",
  "Unión Magdalena - Junior"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,arsenal-london,manchester-united,505974.php",
  "https://es.fcstats.com/partido,manchester-city,watford,505982.php",
  "https://es.fcstats.com/partido,brentford,tottenham-hotspur,505975.php",

  "https://es.fcstats.com/partido,internazionale-milano,as-roma,523614.php",

  "https://es.fcstats.com/partido,bayern-munchen,borussia-dortmund,508900.php",

  "https://es.fcstats.com/partido,paris-saint-germain,lens,508206.php",

  "https://es.fcstats.com/partido,real-betis,valencia,561698.php",

  "https://es.fcstats.com/partido,gimnasia-la-plata,union-de-santa-fe,549315.php",
  "https://es.fcstats.com/partido,san-lorenzo,patronato-parana,549320.php",
  "https://es.fcstats.com/partido,rosario-central,independiente,549319.php",
  "https://es.fcstats.com/partido,central-cordoba,boca-juniors,549312.php",
  "https://es.fcstats.com/partido,banfield,talleres-de-cordoba,549310.php",
  "https://es.fcstats.com/partido,barracas-central,velez-sarsfield,549311.php",

  "https://es.fcstats.com/partido,atletico-bucaramanga,independiente-medellin,547672.php",
  "https://es.fcstats.com/partido,atletico-nacional,once-caldas,547671.php",
  "https://es.fcstats.com/partido,union-magdalena,atletico-junior,547680.php",
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
  AIng[0], // "",
  "", // AIng[0],
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
