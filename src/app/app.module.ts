import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { marsRoverKey } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoverFormComponent,
    PhotosListComponent,
    UserPhotosListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,

    routing,
    AngularFireModule.initializeApp(marsRoverKey),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
