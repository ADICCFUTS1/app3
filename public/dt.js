var dt = [
  "1651318200",
  "1651336200",

  "1651320000",
  "1651328100",
  "1651336200",
  "1651345200",

  "1651323600",

  "1651325400",
  "1651325400",

  "1651330800",
  "1651345200",
  "1651345200",
  "1651356000",
  "1651356000",
  "1651365000",
  "1651365000",

  "1651345200",
  "1651352700",
  "1651360200",
  "1651367700",

  /*ERRORES*/
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400",
  "1634324400"
];

var dtprox = ["1618763400", "1618771500", "1618779600", "1618790400"];

var dta = [];
for (var i = 0; i <= dt.length; i++) {
  var date = new Date(dt[i] * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
    hours + ":" + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/

  dta.push(formattedTime);

  // console.log(dta[i]);
}
