let Title = [
  "UEFA Europa League",
  "UEFA Europa League",

  "UEFA Conference League",
  "UEFA Conference League",

  "Conmebol Libertadores",
  "Conmebol Libertadores",

  "Conmebol Sudamericana",
  "Conmebol Sudamericana",

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
  "Eintracht Frankfurt - West Ham United",
  "Rangers - RB Leipzig",

  "Olympique Marseille - Feyenoord",
  "Roma - Leicester City",

  "Fortaleza - River Plate",
  "RB Bragantino - Vélez Sarsfield",

  "Unión Santa Fe - Oriente Petrolero",
  "Banfield - Unión La Calera",

  "Unión Magdalena - La Equidad"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,eintracht-frankfurt,west-ham-united,561685.php",
  "https://es.fcstats.com/partido,rangers,rb-leipzig,561686.php",

  "https://es.fcstats.com/partido,olympique-marseille,feyenoord-rotterdam,561690.php",
  "https://es.fcstats.com/partido,as-roma,leicester-city,561689.php",

  "https://es.fcstats.com/partido,fortaleza-ec,river-plate,560107.php",
  "https://es.fcstats.com/partido,bragantino,velez-sarsfield,560108.php",

  "https://es.fcstats.com/partido,union-de-santa-fe,oriente-petrolero,560323.php",
  "https://es.fcstats.com/partido,banfield,union-la-calera,560325.php",

  "https://es.fcstats.com/partido,union-magdalena,la-equidad,547700.php",

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
  Extra[0],
  Extra[1],

  Extra[2],
  Extra[3],

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
