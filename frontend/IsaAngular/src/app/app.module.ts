import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AuthguardGuard} from './authguard.guard';
import { UserServiceService } from './user-service.service';
import { RekvizitiService } from './rekviziti.service';
import { RekvizitComponent } from './rekvizit/rekvizit.component';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';

import { OglasComponent } from './oglas/oglas.component';

import {RouterModule, Routes} from '@angular/router';
import { ActivationPageComponent } from './activation-page/activation-page.component';
import {RegisterComponent} from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UploadFileService } from "./upload-file.service";

import { UpdateUserComponent } from './update-user/update-user.component';
import { LogoutComponent } from './logout/logout.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutingComponents,
    RekvizitComponent,
    OglasComponent,
    UserprofileComponent,
    UpdateUserComponent,
    LogoutComponent,
    RezervacijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAL7fctJPUvG52w9R2KjlVbcoHAG1CRlzs'
      })
  ],
  providers: [UserServiceService,RekvizitiService, AuthguardGuard, UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
