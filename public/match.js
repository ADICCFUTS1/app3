let Title = [
  "Premier League",
  "Premier League",

  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Serie A",

  "Bundesliga",
  "Bundesliga",

  "Liga Profesional Argentina",
  "Liga Profesional Argentina",
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
  "Newcastle United - Liverpool",
  "Leeds United - Manchester City",

  "Deportivo Alavés - Villarreal",
  "Real Madrid - Espanyol",
  "Valencia - Levante",
  "Athletic Club - Atlético Madrid",

  "Napoli - Sassuolo",

  "Borussia Dortmund - Bochum",
  "Mainz 05 - Bayern München",

  "Atlético Tucumán - Talleres Córdoba",
  "Racing Club - Banfield",
  "Vélez Sarsfield - Tigre",
  "Arsenal - Colón",
  "Boca Juniors - Barracas Central",
  "Lanús - Independiente",
  "Sarmiento - River Plate",

  "La Equidad - Atlético Bucaramanga",
  "Medellín - Atlético Nacional",
  "Santa Fe - Jaguares de Córdoba",
  "Deportes Tolima - Cortuluá"
];

var Est = [];

let ustat = [
  /*ENLACES ** ENLACES ** ENLACES  */
  /*"https://es.fcstats.com/partido,manchester-united,chelsea-london,506007.php",

  "https://es.fcstats.com/partido,west-ham-united,eintracht-frankfurt,561684.php",

  "https://es.fcstats.com/partido,olimpia-asuncion,colon,560092.php",
  "https://es.fcstats.com/partido,always-ready,deportivo-cali,560093.php",

  "https://es.fcstats.com/partido,defensa-y-justicia,liga-de-quito,560305.php",
  "https://es.fcstats.com/partido,oriente-petrolero,atletico-junior,560308.php",
  "https://es.fcstats.com/partido,montevideo-wanderers,lanus,560310.php",
*/
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

for (var i = 0; i <= ustat.length - 1; i++) {
  Est.push("" + ustat[i]);
  //Est.push("https://pirlotv2.herokuapp.com/full/app/test/est?url=" + ustat[i]);
}

let Enl = [
  AIng[0], // "",
  "",

  AEsp[0], // "",
  "", // AEsp[0],
  "",
  "",

  AIta[0],

  Extra[0],
  AAle[0],

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
