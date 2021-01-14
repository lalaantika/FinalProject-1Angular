import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { FormsModule } from '@angular/forms';
import { UserAuthserviceService } from './services/user-authservice.service';
import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { PricingComponent } from './pricing/pricing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnterpriseComponent } from './enterprise/enterprise.component';


const routes: Routes = [
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    UserPageComponent,
    SignUpComponent,
    LogInComponent,
    PricingComponent,
    EnterpriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    NgbModule,
  ],
  providers: [UserAuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
