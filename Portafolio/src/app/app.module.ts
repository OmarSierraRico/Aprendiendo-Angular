import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders} from './app.routing';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { videojuegoComponent } from './videojuego/videojuego.component';
import { zapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    videojuegoComponent,
    zapatillasComponent,
    CursosComponent,
    HomeComponent,
    ContactoComponent
  
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
