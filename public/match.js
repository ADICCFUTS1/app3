let Title = [
  "Premier League",
  "Premier League",

  "Serie A",
  "Serie A",

  "LaLiga",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
  "Liga Profesional Argentina",

  "Liga Dimayor Colombia",
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
  "Chelsea - West Ham United",
  "Liverpool - Everton",

  "Empoli - Napoli",
  "Lazio - Milan",

  "Barcelona - Rayo Vallecano",

  "Racing Club - Newell's Old Boys",
  "River Plate - Atlético Tucumán",
  "Defensa y Justicia - Platense",
  "Godoy Cruz - Lanús",

  "Envigado - Deportivo Pereira",
  "Deportivo Cali - Rionegro Águilas",
  "Jaguares de Córdoba - América de Cali",
  "Millonarios - Santa Fe",
  "Alianza Petrolera - Deportes Tolima"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,chelsea-london,west-ham-united,505978.php",
  "https://es.fcstats.com/partido,liverpool,everton,505981.php",

  "https://es.fcstats.com/partido,empoli,napoli,523612.php",
  "https://es.fcstats.com/partido,ss-lazio,ac-milan,523615.php",

  "https://es.fcstats.com/partido,fc-barcelona,rayo-vallecano,509824.php",

  "https://es.fcstats.com/partido,racing-club,newells-old-boys,549317.php",
  "https://es.fcstats.com/partido,river-plate,atletico-tucuman,549318.php",
  "https://es.fcstats.com/partido,defensa-y-justicia,platense,549314.php",
  "https://es.fcstats.com/partido,godoy-cruz,lanus,549316.php",

  "https://es.fcstats.com/partido,envigado-fc,deportivo-pereira,547676.php",
  "https://es.fcstats.com/partido,deportivo-cali,rionegro-aguilas,547674.php",
  "https://es.fcstats.com/partido,jaguares-de-cordoba,america-de-cali,547677.php",
  "https://es.fcstats.com/partido,millonarios,santa-fe,547678.php",
  "https://es.fcstats.com/partido,alianza-petrolera,deportes-tolima,547679.php",

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
  Extra[0],
  Extra[1],

  "",
  "",
  "",
  ACol[0],
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
