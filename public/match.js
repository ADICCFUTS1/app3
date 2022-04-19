let Title = [
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Premier League",

  "Coppa Italia",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",

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
  "Mallorca - Deportivo Alavés",
  "Real Betis - Elche",
  "Villarreal - Valencia",

  "Liverpool - Manchester United",
  "Internazionale - Milan",

  "Arsenal - Barracas Central",
  "Unión Santa Fe - San Lorenzo",
  "Estudiantes - Tigre",
  "Huracán - Colón",
  "Independiente - Aldosivi",
  "Platense - Gimnasia La Plata"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,mallorca,deportivo-alaves,509948.php",
  "https://es.fcstats.com/partido,real-betis,elche,509943.php",
  "https://es.fcstats.com/partido,villarreal,valencia,509951.php",

  "https://es.fcstats.com/partido,liverpool,manchester-united,505937.php",

  "https://es.fcstats.com/partido,internazionale-milano,ac-milan,556861.php",

  "https://es.fcstats.com/partido,arsenal-de-sarandi,barracas-central,549294.php",
  "https://es.fcstats.com/partido,union-de-santa-fe,san-lorenzo,549306.php",
  "https://es.fcstats.com/partido,estudiantes-de-la-plata,tigre,549297.php",
  "https://es.fcstats.com/partido,huracan,colon,549298.php",
  "https://es.fcstats.com/partido,independiente,aldosivi,549299.php",
  "https://es.fcstats.com/partido,platense,gimnasia-la-plata,549303.php",

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
  AEsp[0],
  AEsp[1],

  AIng[0],

  AIta[0],

  "",
  Extra[0],
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
