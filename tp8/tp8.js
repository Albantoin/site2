function resultat() {
  var a = document.getElementById("n1").value;
  var b = document.getElementById("n2").value;
  var c = Number(a) * Number(b);

  n3.value = c;

  var d = document.getElementById("n4").value;
  var e = document.getElementById("n5").value;
  var f = Number(d) * Number(e);

  n6.value = f;

  var g = document.getElementById("n7").value;
  var h = document.getElementById("n8").value;
  var i = Number(g) * Number(h);

  n9.value = i;

  var j = document.getElementById("n3").value;
  var k = document.getElementById("n6").value;
  var l = document.getElementById("n6").value;
  var m = Number(j) + Number(k) + Number(l);

  n10.value = m;
}
function reinitiatilser() {
  window.location.reload();
}
