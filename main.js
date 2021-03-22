function syrcuse(rangDepart) {
    var premierTerme = rangDepart;
    var rang = 0;
    var termeSuivant;
    while (rang < 20) {
        if (premierTerme % 2 == 0) {
            termeSuivant = premierTerme / 2;
        }
        else {
            termeSuivant = 3 * premierTerme + 1;
        }
        premierTerme = termeSuivant;
        rang++;
        console.log(termeSuivant);
    }
    return termeSuivant;
}
syrcuse(15);
