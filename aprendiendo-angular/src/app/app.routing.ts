//Importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Importar componentes
import { HomeComponent } from "./home/home.component";
import { zapatillasComponent } from "./zapatillas/zapatillas.component";
import { videojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ContactoComponent } from "./contacto/contacto.component";


//Array de rutas 
const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'zapatillas', component: zapatillasComponent},
    { path: 'videojuego', component: videojuegoComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: HomeComponent}
];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
