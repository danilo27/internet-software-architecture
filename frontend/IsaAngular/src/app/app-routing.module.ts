import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { FanpageComponent } from './fanpage/fanpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TheatresComponent } from './theatres/theatres.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ActivationPageComponent} from './activation-page/activation-page.component';
import { UpdateUserComponent} from './update-user/update-user.component';

import { AuthguardGuard} from './authguard.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'cinemas', component: CinemasComponent},
  { path: 'fanpage', component: FanpageComponent},
  { path: 'theatres', component: TheatresComponent},
  { path: 'userpage', canActivate: [AuthguardGuard], component: UserpageComponent},
  { path: 'userprofile', component: UserprofileComponent},
  { path: 'activation-page', component: ActivationPageComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'update-user', component: UpdateUserComponent},
  { path: 'users/:username', component: UserprofileComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  HomepageComponent,
  LoginComponent,
  RegisterComponent,
  CinemasComponent,
  FanpageComponent,
  TheatresComponent,
  UserpageComponent,
  PageNotFoundComponent,
  ActivationPageComponent
];
