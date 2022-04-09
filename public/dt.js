var dt = [
  "1649503800",
  "1649512800",
  "1649512800",

  "1649505600",
  "1649513700",
  "1649521800",
  "1649530800",

  "1649511000",

  "1649520000",
  "1649529900",

  "1649530800",

  "1649523600",
  "1649532600",
  "1649541600",
  "1649550600",

  "1649538300",
  "1649545800",
  "1649553300",

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
