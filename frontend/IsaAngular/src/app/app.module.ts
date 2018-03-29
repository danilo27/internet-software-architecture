import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserServiceService } from './user-service.service';
import { RekvizitiService } from './rekviziti.service';
import { RekvizitComponent } from './rekvizit/rekvizit.component';
import { OglasComponent } from './oglas/oglas.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutingComponents,
    RekvizitComponent,
    OglasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserServiceService,RekvizitiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
