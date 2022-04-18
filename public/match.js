let Title = [
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Bundesliga",

  "FA CUP",

  "Ligue 1",

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
  "Granada - Levante",
  "Atlético Madrid - Espanyol",
  "Athletic Club - Celta de Vigo",
  "Sevilla - Real Madrid",

  "Arminia Bielefeld - Bayern München",

  "Chelsea - Crystal Palace",

  "PSG - Olympique Marseille",

  "Defensa y Justicia - Atlético Tucumán",
  "Godoy Cruz - Vélez Sarsfield",
  "Argentinos Juniors - Talleres Córdoba",
  "Boca Juniors - Lanús",
  "Banfield - River Plate",

  "Rionegro Águilas - Atlético Nacional",
  "Deportivo Pereira - Millonarios",
  "América de Cali - Deportivo Cali",
  "Medellín - Unión Magdalena"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,granada,levante,509938.php",
  "https://es.fcstats.com/partido,atletico-madrid,espanyol-barcelona,509934.php",
  "https://es.fcstats.com/partido,athletic-bilbao,celta-de-vigo,509933.php",
  "https://es.fcstats.com/partido,sevilla,real-madrid,509940.php",

  "https://es.fcstats.com/partido,arminia-bielefeld,bayern-munchen,508891.php",

  "https://es.fcstats.com/partido,chelsea-london,crystal-palace,561044.php",

  "https://es.fcstats.com/partido,paris-saint-germain,olympique-marseille,508186.php",

  "https://es.fcstats.com/partido,defensa-y-justicia,atletico-tucuman,549287.php",
  "https://es.fcstats.com/partido,argentinos-juniors,talleres-de-cordoba,549281.php",
  "https://es.fcstats.com/partido,godoy-cruz,velez-sarsfield,549289.php",
  "https://es.fcstats.com/partido,boca-juniors,lanus,549284.php",
  "https://es.fcstats.com/partido,banfield,river-plate,549282.php",

  "https://es.fcstats.com/partido,rionegro-aguilas,atletico-nacional,547661.php",
  "https://es.fcstats.com/partido,deportivo-pereira,millonarios,547669.php",
  "https://es.fcstats.com/partido,america-de-cali,deportivo-cali,547662.php",
  "https://es.fcstats.com/partido,independiente-medellin,union-magdalena,547664.php",

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
  "",
  Extra[0],

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
