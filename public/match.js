let Title = [
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",
  "LaLiga",

  "Serie A",

  "Bundesliga",

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
  "Mallorca - Granada",
  "Athletic Club - Valencia",
  "Cádiz - Elche",
  "Celta de Vigo - Deportivo Alavés",
  "Real Betis - Barcelona",

  "Torino - Napoli",

  "Greuther Fürth - Borussia Dortmund",

  "Chelsea - Wolverhampton Wanderers",
  "Brighton & Hove Albion - Manchester United",
  "Liverpool - Tottenham Hotspur",

  "Aldosivi - Arsenal",
  "Independiente - Huracán",
  "Tigre - Boca Juniors",
  "Rosario Central - Estudiantes",

  " Atlético Bucaramanga - Patriotas Boyacá",
  "Deportivo Cali - Santa Fe",
  "Deportivo Pasto - América de Cali",
  "Jaguares de Córdoba - Medellín"
];

var Est = [];

let ustat = [
  "https://es.fcstats.com/partido,mallorca,granada,509970.php",
  "https://es.fcstats.com/partido,athletic-bilbao,valencia,509962.php",
  "https://es.fcstats.com/partido,cadiz,elche,509965.php",
  "https://es.fcstats.com/partido,celta-de-vigo,deportivo-alaves,509966.php",
  "https://es.fcstats.com/partido,real-betis,fc-barcelona,509964.php",

  "https://es.fcstats.com/partido,torino,napoli,523638.php",

  "https://es.fcstats.com/partido,greuther-furth,borussia-dortmund,508923.php",

  "https://es.fcstats.com/partido,chelsea-london,wolverhampton-wanderers,505998.php",
  "https://es.fcstats.com/partido,brighton-hove-albion,manchester-united,505996.php",
  "https://es.fcstats.com/partido,liverpool,tottenham-hotspur,506001.php",

  "https://es.fcstats.com/partido,aldosivi,arsenal-de-sarandi,549336.php",
  "https://es.fcstats.com/partido,independiente,huracan,549344.php",
  "https://es.fcstats.com/partido,tigre,boca-juniors,549349.php",
  "https://es.fcstats.com/partido,rosario-central,estudiantes-de-la-plata,549346.php",

  "https://es.fcstats.com/partido,atletico-bucaramanga,patriotas,547692.php",
  "https://es.fcstats.com/partido,deportivo-cali,santa-fe,547694.php",
  "https://es.fcstats.com/partido,deportivo-pasto,america-de-cali,547695.php",
  "https://es.fcstats.com/partido,jaguares-de-cordoba,independiente-medellin,547697.php",

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
  AEsp[0],
  "", //  AEsp[0],
  "",
  "",
  "",

  AIta[0],

  AAle[0],

  "", //  AIng[0],
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
