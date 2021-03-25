import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-mathjax',
  templateUrl: './mathjax.component.html',
  styleUrls: ['./mathjax.component.css']
})
export class MathjaxComponent  implements OnChanges, OnInit {
  definition = 'La suite de Syracuse d un nombre entier N > 0'
              + 'est définie par récurrence, de la manière suivante : '
              + '$u_{n+1} = {u_{n}\\over 2}$ si n est pair, et '
              + '$u_{n+1} = {3*u_{n}} + 1$ si n est impair';
  tempsDeVol = 'Le temps de vol (en rouge)'
              + ': c est le plus petit indice n tel que '
              + '$u_{n+1} = 1 $';
  tempsDeVolEnAltitude = 'Le temps de vol en altitude (en noir) : c est le plus petit indice n tel que '
              + '$u_{n+1} < u_{0} $';
  altitudeMax = 'L altitude maximale(en bleu) : c est la valeur maximale de la suite.';

  remarque = 'Une fois que le terme 1 est atteint pour un rang p on obtient :'
              + '$u_p = 1$ ;$u_{p+1} = 3*1+1=4$; $u_ {p+2} = {4\\over 2} = 2$ ; $u_ {p+3} = {2\\over 2} = 1$  '
  content;
  constructor(public cs: ConfigService) { }
  mathJaxObject;

  ngOnChanges(changes: SimpleChanges): void {
    // to render math equations again on content change
    if (changes[this.content]) {
      this.renderMath();
    }
  }
  ngOnInit(): void {
   this.loadMathConfig();
   this.renderMath();
  }

  updateMathObt(){
    this.mathJaxObject = this.cs.nativeGlobal()['MathJax'];
  }

  renderMath() {
    this.updateMathObt();
    let angObj = this;
    setTimeout(() => {
      angObj.mathJaxObject['Hub'].Queue(['Typeset', angObj.mathJaxObject.Hub], 'mathContent');
    },1000)
  }
  loadMathConfig() {
    this.updateMathObt();
    this.mathJaxObject.Hub.Config({
      showMathMenu: false,
      tex2jax: { inlineMath: [['$', '$']],displayMath:[["$$", "$$"]] },
      menuSettings: { zoom: 'Double-Click', zscale: '150%' },
      CommonHTML: { linebreaks: { automatic: true } },
      "HTML-CSS": { linebreaks: { automatic: true } },
      SVG: { linebreaks: { automatic: true } }
    });
  }
}