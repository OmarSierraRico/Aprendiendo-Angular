//Aca se crea los ficheros de rutas despues de crear los componetes
import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule} from "@angular/router";

//aca copiamos los import de mis componentes "app.module.ts"
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

//Aca ya se define mis Routes
const appRoutes: Routes = [
    {path:'',component: AboutComponent},
    {path: 'Sobre-mi', component: ProjectsComponent},
    {path: 'Crear-proyecto',component: CreateComponent},
    {path:'Conctacto',component: ContactComponent},
    {path: '**', component: ErrorComponent}
];

//Aca se exporta la configuracion de las rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders <any> = RouterModule.forRoot(appRoutes);// Aca toco agregar el <any>
