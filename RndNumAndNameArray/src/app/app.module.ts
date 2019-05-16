import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RndNumberComponent } from './rnd-number/rnd-number.component';
import { NameArrayComponent } from './name-array/name-array.component';

@NgModule({
  declarations: [
    AppComponent,
    RndNumberComponent,
    NameArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
