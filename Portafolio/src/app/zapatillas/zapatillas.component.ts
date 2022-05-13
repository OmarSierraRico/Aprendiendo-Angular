import { Component, OnInit } from "@angular/core";
import { zapatilla } from '../models/zapatilla';
import { zapatillaService } from "../zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
    //providers: [zapatillaService]
})
export class zapatillasComponent implements OnInit{
    public titulo: string = "componente de zapatillas";
    //public zapatillas: Array<zapatilla>;
    


    constructor(
        private _zapatillaService: zapatillaService
    ){
        
    }
    
    ngOnInit(){
       // console.log(this.zapatillas);
    }
        
    }

