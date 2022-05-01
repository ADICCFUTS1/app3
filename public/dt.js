var dt = [
  "1651410000",
  "1651419000",

  "1651406400",
  "1651414500",
  "1651422600",
  "1651431600",

  "1651401000",
  "1651410000",
  "1651420800",

  "1651431600",
  "1651439100",
  "1651454100",

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
