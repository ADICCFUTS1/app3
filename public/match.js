let Title = [
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Premier League",
  "Premier League",

  "Bundesliga",

  "Ligue 1",

  "Serie A",

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
  "Getafe - Rayo Vallecano",
  "Villarreal - Sevilla",
  "Espanyol - Osasuna",
  "Atlético Madrid - Real Madrid",

  "Arsenal - Leeds United",
  "Manchester City - Newcastle United",

  "Bayern München - Stuttgart",

  "PSG - Troyes",

  "Hellas Verona - Milan",

  "Argentinos Juniors - Unión Santa Fe",
  "Defensa y Justicia - Patronato",
  "Gimnasia La Plata - Newell's Old Boys",
  "Talleres Córdoba - Sarmiento",
  "River Plate - Platense",

  "Cortuluá - Junior",
  "Envigado - Rionegro Águilas",
  "Millonarios - Deportes Tolima",
  "Alianza Petrolera - Once Caldas"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,getafe,rayo-vallecano,509968.php",
  "https://es.fcstats.com/partido,villarreal,sevilla,509971.php",
  "https://es.fcstats.com/partido,espanyol-barcelona,osasuna,509967.php",
  "https://es.fcstats.com/partido,atletico-madrid,real-madrid,509963.php",

  "https://es.fcstats.com/partido,arsenal-london,leeds-united,505994.php",
  "https://es.fcstats.com/partido,manchester-city,newcastle-united,506002.php",

  "https://es.fcstats.com/partido,bayern-munchen,vfb-stuttgart,508918.php",

  "https://es.fcstats.com/partido,paris-saint-germain,troyes,508228.php",

  "https://es.fcstats.com/partido,hellas-verona,ac-milan,523640.php",

  "https://es.fcstats.com/partido,argentinos-juniors,union-de-santa-fe,549337.php",
  "https://es.fcstats.com/partido,defensa-y-justicia,patronato-parana,549342.php",
  "https://es.fcstats.com/partido,gimnasia-la-plata,newells-old-boys,549343.php",
  "https://es.fcstats.com/partido,talleres-de-cordoba,sarmiento,549348.php",
  "https://es.fcstats.com/partido,river-plate,platense,549345.php",

  "https://es.fcstats.com/partido,cortulua,atletico-junior,547693.php",
  "https://es.fcstats.com/partido,envigado-fc,rionegro-aguilas,547696.php",
  "https://es.fcstats.com/partido,millonarios,deportes-tolima,547698.php",
  "https://es.fcstats.com/partido,alianza-petrolera,once-caldas,547699.php",

  /** ***TEST*** */
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html",
  "https://apps-innova-redirects.blogspot.com/2020/03/no-disponible.html"
];

for (var i = 0; i <= ustat.length - 23; i++) {
  //Est.push("" + ustat[i]);
  Est.push("https://pirlotv2.herokuapp.com/full/app/test/est?url=" + ustat[i]);
}

let Enl = [
  "",
  AEsp[0],
  "",
  "",

  AIng[0], //  "",
  "", //  AIng[0],

  "", //  AAle[0],

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
