import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: 'Andres',
    apellido: 'Martinez',
    correo: 'andrescamm07@gmail.com',
    pais: 'COL',
    genero: 'M',
  };

  paises: any[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;

      this.paises.unshift({
        nombre: '[seleccione Pais]',
        codigo: '',
      });
    });
  }

  guardar(format: NgForm) {
    console.log(format);
    console.log(format.value);

    if (format.invalid) {
      Object.values(format.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}
