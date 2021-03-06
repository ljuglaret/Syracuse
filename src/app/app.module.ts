import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { ElementsSuiteSyracuseComponent } from './elements-suite-syracuse/elements-suite-syracuse.component';
import { MathjaxComponent } from './mathjax/mathjax.component';
@NgModule({
  declarations: [
    AppComponent,
    ElementsSuiteSyracuseComponent,
    MathjaxComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
