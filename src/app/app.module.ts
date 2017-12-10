import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { FourGComponent } from './four-g/four-g.component';
import { FourGlteComponent } from './four-glte/four-glte.component';
import { FourGnewsComponent } from './four-gnews/four-gnews.component';
import { FiveGComponent } from './five-g/five-g.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { APP_CONFIG, AppConfig } from './api.config';


@NgModule({
  declarations: [
    AppComponent,
    FourGComponent,
    FourGlteComponent,
    FourGnewsComponent,
    FiveGComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
