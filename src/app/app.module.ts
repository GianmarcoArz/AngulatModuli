import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './pages/home/home-roting.module';
import { ContattiRoutingModule } from './pages/contatti/contatti-roting.module';
import { ChiSiamoRoutingModule } from './pages/chi-siamo/chi-siamo-roting.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeRoutingModule,
    ContattiRoutingModule,
    ChiSiamoRoutingModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
