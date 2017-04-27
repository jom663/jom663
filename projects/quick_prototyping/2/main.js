function time(){
	var today = new Date();
	var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
  var r = parseInt(s) * 4;
  var g = parseInt(s) * 4;
  var b = parseInt(s) * 4;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  var t = setTimeout(time, 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}

time();