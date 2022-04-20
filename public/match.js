let Title = [
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Premier League",
  "Premier League",

  "Ligue 1",
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
  "Atlético Madrid - Granada",
  "Celta de Vigo - Getafe",
  "Osasuna - Real Madrid",

  "Chelsea - Arsenal",
  "Manchester City - Brighton & Hove Albion",

  "Angers SCO - PSG",

  "Juventus - Fiorentina",

  "Newell's Old Boys - Banfield",
  "Patronato - Racing Club",
  "Vélez Sarsfield - Central Córdoba SdE",
  "Lanús - Rosario Central",
  "Talleres Córdoba - River Plate",
  "Boca Juniors - Godoy Cruz"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,atletico-madrid,granada,509942.php",
  "https://es.fcstats.com/partido,celta-de-vigo,getafe,509945.php",
  "https://es.fcstats.com/partido,osasuna,real-madrid,509949.php",

  "https://es.fcstats.com/partido,chelsea-london,arsenal-london,505886.php",
  "https://es.fcstats.com/partido,manchester-city,brighton-hove-albion,505938.php",

  "https://es.fcstats.com/partido,angers,paris-saint-germain,508190.php",

  "https://es.fcstats.com/partido,juventus-torino,fiorentina,556862.php",

  "https://es.fcstats.com/partido,newells-old-boys,banfield,549301.php",
  "https://es.fcstats.com/partido,patronato-parana,racing-club,549302.php",
  "https://es.fcstats.com/partido,patronato-parana,racing-club,549302.php",
  "https://es.fcstats.com/partido,lanus,rosario-central,549300.php",
  "https://es.fcstats.com/partido,talleres-de-cordoba,river-plate,549305.php",
  "https://es.fcstats.com/partido,boca-juniors,godoy-cruz,549296.php",

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
  AEsp[1],
  AEsp[0],

  AIng[0],
  AIng[1],

  AFra[0],

  AIta[0],

  "",
  Extra[1],
  Extra[0],
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
