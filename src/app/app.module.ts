import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { NewsComponent } from './news/news.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    NewsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyA9kGX1YRdl8hr6lSvN6u6G_5Lsp9i12v4',
      authDomain: 'angularfirebaseauth-93300.firebaseapp.com',
      databaseURL: 'https://angularfirebaseauth-93300.firebaseio.com',
      projectId: 'angularfirebaseauth-93300',
      storageBucket: 'angularfirebaseauth-93300.appspot.com',
      messagingSenderId: '605622647524',
      appId: '1:605622647524:web:60d9725f8881d069684af1',
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
