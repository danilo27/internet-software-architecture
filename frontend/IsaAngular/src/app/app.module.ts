import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AuthguardGuard} from './authguard.guard';
import { UserServiceService } from './user-service.service';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';

import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'userpage',
        canActivate:[AuthguardGuard],
        component: UserpageComponent

    }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserServiceService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
