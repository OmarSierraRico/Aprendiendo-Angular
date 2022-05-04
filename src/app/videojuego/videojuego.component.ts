import { Component } from "@angular/core";

@Component({
    selector: 'videojuego',
    template: `
        <h2>Componente de videojuegos</h2>
        <ul>
            <li>GTA</li>
            <li>Mario Bros</li>
            <li>Halo</li>
            <li>Mortal combat</li>
            <li>Geometrias</li>
            <li>Roblox</li>
        </ul>

    `

})
export class videojuegoComponent {

    constructor(){
        console.log("se ha cargado el componente: videojuego.Componente.ts");
    }

}

