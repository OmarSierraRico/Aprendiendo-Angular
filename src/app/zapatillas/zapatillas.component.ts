import { Component, OnInit } from "@angular/core";
import { zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class zapatillasComponent implements OnInit{
    public titulo: string = "componente de zapatillas";
    public zapatillas: Array<zapatilla>;

    constructor(){
        this.zapatillas = [
            new zapatilla('Rebook classic', 'Rebook', 'Negra', 100,true)
        ];
    }
    ngOnInit(){
        console.log(this.zapatillas);
    }
        
    }

