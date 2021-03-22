import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}

function syracuse (rangDepart : number) : number[]{
    let premierTerme : number = rangDepart ;
    let rang : number = 0;
    let termeSuivant : number;
    let termes : number[]; 
    termes[0] = premierTerme;
    while(rang < 20) {
        if (premierTerme %2 == 0) {
            termeSuivant        =   premierTerme/2;
        }
        else {
            termeSuivant   =   3* premierTerme+ 1;
        }
        termes[rang] = premierTerme;
        premierTerme = termeSuivant;
        rang++;
    }
    return termes;
  }

  syracuse(15)



