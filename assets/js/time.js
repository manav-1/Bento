// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();
  var min = (mins = ("0" + d.getMinutes()).slice(-2));
  var hh = d.getHours();
  var ampm = "";
  var ss = d.getSeconds();

  if (ss < 10) {
    ss = "0" + ss;
  }

  if (CONFIG.twelveHourFormat) {
    ampm = hh >= 12 ? " pm" : " am";
    hh = hh % 12;
    hh = hh ? hh : 12;
  }

  document.getElementById("hour").innerText = hh;
  document.getElementById("separator1").innerHTML = " : ";
  document.getElementById("minutes").innerText = min;
  document.getElementById("separator2").innerHTML = " : ";
  console.log(document.getElementById("seconds"));
  document.getElementById("seconds").innerText = ss + ampm;

  document.getElementById("month").innerText = mm;
  document.getElementById("day").innerText = dd;

  setTimeout(displayClock, 1000);
}
