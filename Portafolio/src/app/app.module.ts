import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//Se trae de la API
import { FormsModule } from '@angular/forms';//Se trae de la API
import { routing, appRoutingProviders } from './app.routing';//Se importan de "app.routing.ts"

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { SliderComponent } from './components/slider/slider.component';
import { ResaltadoDirective } from './resaltado.directive';

// import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    SliderComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    routing, //Se carga aca el routin de arriba
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders //se carga el servicio tambien de arriba 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
