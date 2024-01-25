
//Deklarerer variablerne, der vil blive brugt til at opbevare vægt, højde, BMI, målinger, og fejlmeddelelse:
let vægt, højde, udregn, bmi, error;

// Dette er funktionen, der udføres, når knappen klikkes for at beregne BMI (se samme funktion  i Index fil).
function udregnBmi() {

  //Bruger document.getElementById til at hente værdierne fra HTML-inputfelterne med id 'vægt' og 'højde'.
	vægt = document.getElementById("vægt").value;
	højde = document.getElementById("højde").value;

  //Definerer en fejlmeddelelse, som vil blive vist, hvis brugeren ikke har indtastet vægt eller højde.
	error = "Udfyld din VÆGT og HØJDE for BMI!!!!";

  //Omregner højden fra centimeter til meter og sætter den anden. (x = x/y, også x = x*y).

	højde /= 100;
	højde *= højde;

  //Beregner BMI ved at dividere vægten med ny værdi af højde(x / y^2) af højden.Og Properti/metode .toFixed(1) bruges til at runde BMI til en decimal. 
	bmi = vægt/højde;
	bmi = bmi.toFixed(1);


  // Fortolker BMI-resultatet og danner en meddelelse omkring BMI.
	if (bmi <= 18.4) {
		udregn = "Din BMI er " + bmi + " hvilket desværre betyder at " + "du er undervægtig... Spis mere mad du!";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		udregn = "Din BMI er " + bmi + " hvilket betyder at " + "din vægt er normal.. Godt for dig";
	} else if (bmi >= 25 && bmi <= 29.9) {
		udregn = "Din BMI er " + bmi + " hvilket desværre betyder at " + "du er overvægtig... Op på løbebåndet med dig du!";
	} else if (bmi >= 30) {
		udregn = "Din BMI er " + bmi + " hvilket desværre betyder at " + "du er svært overvægtig... Op på løbebåndet med dig i en fart du!";
		
	}
	
//Tjekker, om vægt eller højde er nul, og viser fejlmeddelelse i så fald.
	if (vægt === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (højde === 0){
		document.getElementById("results").innerHTML = error;
	}

  //Hvis ingen fejl blev fundet, vises BMI-resultat og meddelelse.
	 else {

		document.getElementById("results").innerHTML = udregn;

/*

Her bruges document.getElementById("results") til at få fat i det HTML-element med id "results". fra Index fil, hvor resultatet af BMI-beregningen skal vises.

innerHTML bruges derefter til at ændre indholdet af dette HTML-element til værdien af variablen udregn. udregn indeholder den tidligere beregnede meddelelse baseret på BMI-kategorien.

Derfor opdaterer dette skridt websiden med den relevante meddelelse om BMI-resultatet og "udregn", og dette vises for brugeren.
*/
	}

  // Hvis vægten er negativ, vises en særlig meddelelse.
	if (vægt < 0) {
		document.getElementById("results").innerHTML = "Hov hov det kan vist ikke være rigtigt. Vær sød kun at skrive positive værdier:)";
	}
}