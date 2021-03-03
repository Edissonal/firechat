import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


//componentes
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
