export function syracuse(rangDepart: number): number[]{
    let premierTerme: number = rangDepart ;
    let rang = 0;
    let termeSuivant: number;
    const termes: number[] = [];
    termes[0] = premierTerme;
    while (rang < 50 || termeSuivant !== 1) {
        if (premierTerme % 2 === 0) {
            termeSuivant    =   premierTerme / 2;
        }
        else {
            termeSuivant    =    3 * premierTerme + 1;
        }
        termes[rang] = premierTerme;
        premierTerme = termeSuivant;
        rang++;
    }
    return termes;
  }

export function maxTab(tab: number[]): number{
    let maxi = 0;
    for (let i = 0 ; i < tab.length ; i++){
        if (tab[i] > maxi){
            maxi = tab[i];
        }
    }
    return maxi;
}

export function rang1(tab: number[]): number{
    let un = 0;
    let i = 0;
    while(true){
        if (tab[i] === 1){
            un = i;
            break;
        }
        i++;

    }
    return un;
}

export function tempsDeVolEnAltitude(tab: number[]): number{
    let un = 0;
    let i = 0;
    while (true){
        if (tab[i] < tab[0]){
            un = i;
            break;
        }
        i++;

    }
    return tab[i-1];
}

export function genereAbscisse(dep: number): number[] {
    const absc: number[] = [];
    for (let i = 0 ; i <= rang1(syracuse(dep)) ; i++) {
        absc[i] = i;
    }
    return absc;
  }

export function genereAbscisseCst(nbElts: number ): number[] {
    const absc: number[] = [];
    for (let i = 0 ; i < nbElts ; i++) {
        absc[i] = i;
    }
    return absc;
}

