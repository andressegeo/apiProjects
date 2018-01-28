import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {AboutService} from '../services/about.service';
import {TestService} from './test.service';
import {Routes} from '@angular/router'
import {RouterModule} from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component'

const routes: Routes = [
  {path : 'about', component : AboutComponent},
  {path : 'contacts', component : ContactComponent},
  {path : 'gallery', component : GalleryComponent},  
  {path : '', redirectTo:'/about', pathMatch: 'full'}, 
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule, 
    HttpModule
  ],
  providers: [AboutService, TestService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
