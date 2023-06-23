import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre: string = 'spider-man';
  public edad:   number = 23;

  get capitalizedName(): string {
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string{
    return this.nombre +' - '+ this.edad;
  }

  cambiarNombre(): void {
    this.nombre = 'Captain America';
  }

  cambiarEdad(): void {
    this.edad = 80;
  }

  resetForm(): void {
    this.nombre ='spider-man';
    this.edad = 23;
  }
}
