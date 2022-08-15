import { Component } from "@angular/core"; 

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>
        <button (click)=" acumularBase(+base) "> +{{ base }} </button>
        <span> {{ numero }} </span>
        <button (click)=" acumularBase(-base) "> -{{ base }} </button>
    `
})

export class ContadorComponent{
    public titulo : string = 'Hola Mundo!'
    public numero : number =  10;
    public base   : number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }

    acumularBase(base: number = this.base) {
        this.numero  += base;
    }
}