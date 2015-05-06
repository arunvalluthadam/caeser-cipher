var cip = document.getElementById("cipher");
var pmt = String(prompt("Enter a Mesage..."));

var alpha = "abcdefghijklmnopqrstuvwxyz";

pmt1 = pmt.toLowerCase();
var spl = pmt1.split("");
var rev = spl.reverse();
var clip = "";
while (rev.length > 0) {
	var fin = alpha.charAt(alpha.indexOf(rev.pop())+3);
	clip += fin;
}

cip.textContent = clip;