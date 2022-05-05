import { Injectable } from "@angular/core";
import { zapatilla } from "./models/zapatilla";


@Injectable()
export class zapatillaService{
    public zapatillas: Array<zapatilla>;
    constructor(){
        this.zapatillas = [
                new zapatilla('Nike','Adidas','Saeta',40,true),
                new zapatilla('Reebook','Adidas','Nike',80,true),
                new zapatilla('Yerzzy','Croidon','Puma',180,true),
                new zapatilla('Puma','Yerzy','Saeta',60,true),
                new zapatilla('Nike','Coydon','Saeta',180,true),



        ];

    }

        /*getTexto(){
            return "Hola mundo desde un servidor";
        }
         getZapatillas(): Array<zapatilla>{
             return this.zapatillas;

         }*/

        }

