import { Component } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';
import { CurrencyPipe, DatePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { GoBackButtonComponent } from "../../../components/go-back-button/go-back-button.component";

@Component({
  selector: 'app-pipes',
  imports: [CurrencyPipe, UpperCasePipe, DatePipe, SlicePipe, GoBackButtonComponent],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  standalone: true,
})
export class PipesComponent {

  products: IProduct[] = [
    { name: 'Ordenador', price: 999.99, createdAt: new Date(2024, 5, 1), quantity: 10 },
    { name: 'Smartphone', price: 499.99, createdAt: new Date(2024, 4, 15), quantity: 25 },
    { name: 'Monitor', price: 199.99, createdAt: new Date(2024, 3, 10), quantity: 7 },
    { name: 'Teclado', price: 49.99, createdAt: new Date(2024, 2, 5), quantity: 50 }
  ];

  // https://angular.dev/guide/templates/pipes
}
