let Title = [
  "UEFA Champions League",

  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",
  "Conmebol Libertadores",

  "Conmebol Sudamericana",
  "Conmebol Sudamericana",
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
  "Real Madrid - Manchester City",

  "Colón - Cerro Porteño",
  "Talleres Córdoba - Flamengo",
  "Always Ready - Boca Juniors",
  "Deportivo Cali - Corinthians",
  "Olimpia - Peñarol",
  "Deportes Tolima - Independiente del Valle",

  "Atlético Goianiense - Defensa y Justicia",
  "Barcelona - Lanús",
  "Fluminense - Junior"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,real-madrid,manchester-city,561682.php",

  "https://es.fcstats.com/partido,colon,cerro-porteno,560100.php",
  "https://es.fcstats.com/partido,talleres-de-cordoba,flamengo,560101.php",
  "https://es.fcstats.com/partido,always-ready,boca-juniors,560102.php",
  "https://es.fcstats.com/partido,deportivo-cali,corinthians,560103.php",
  "https://es.fcstats.com/partido,olimpia-asuncion,penarol,560104.php",
  "https://es.fcstats.com/partido,deportes-tolima,independiente-jose-teran,560105.php",

  "https://es.fcstats.com/partido,atletico-goianiense,defensa-y-justicia,560317.php",
  "https://es.fcstats.com/partido,barcelona-sc,lanus,560319.php",
  "https://es.fcstats.com/partido,fluminense,atletico-junior,560320.php",

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

  "",
  "",
  Extra[0],
  Extra[1],
  Extra[2],
  "",

  "",
  Extra2[0],
  Extra2[1],

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
