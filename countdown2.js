// ETAPE 1 : Recuperer les valeurs des inputs - X

/*var jou = parseInt(document.forms["jor"].elements["startjour"].value);
var heu = parseInt(document.forms["her"].elements["startheur"].value);
var min = parseInt(document.forms["mint"].elements["startmin"].value);
var sec = parseInt(document.forms["secd"].elements["startsec"].value);*/

// ETAPE 2 : Additionner le tout avec un peu de convertion - X

/*var countDown = (((jou*86400) + (heu*3600) + (min*60) + sec) *1)*/

// ETAPE 3 : Créer la fonctoin startC - V

function startC() {

// ETAPE 4 : Calcul de conversion. - X
var jou = parseInt(document.forms["jor"].elements["startjour"].value);
var heu = parseInt(document.forms["her"].elements["startheur"].value);
var min = parseInt(document.forms["mint"].elements["startmin"].value);
var sec = parseInt(document.forms["secd"].elements["startsec"].value);


var countDown = (((jou*86400) + (heu*3600) + (min*60) + sec) *1)
var compte = setInterval(function(compteAReb){
	countDown--;
		var jour = Math.floor(countDown/(1*60*60*24));
		var heur = Math.floor((countDown %(1*60*60*24))/(1*60*60));
		var minu = Math.floor((countDown %(1*60*60))/(1*60));
		var seco = Math.floor((countDown %(1*60))/1);


// ETAPE 5 : Afficher le resultat sur le HTML. - V
	document.getElementById("j").innerHTML = jour;
	document.getElementById("h").innerHTML = heur;
	document.getElementById("m").innerHTML = minu;
	document.getElementById("s").innerHTML = seco;

	stop2.onclick=function(){clearInterval(compte)};
	reset.onclick=function(){clearInterval(compte);
	var joureset = 0;
	var heurereset = 0;
	var minreset = 0;
	var secreset = 0;

	document.getElementById("j").innerHTML = joureset;
	document.getElementById("h").innerHTML = heurereset;
	document.getElementById("m").innerHTML = minreset;
	document.getElementById("s").innerHTML = secreset;}

if (countDown < 0) {
    
        document.getElementById("title").innerHTML = "Boum";
        clearInterval(compte);
        }

},1000);
}


//Je n'ai pas réussi a faire 3 fonctions distinctes. A la base, c'était le but. J'ai du tout regrouper dans la function startC.