import { Component } from '@angular/core';

@Component({
  selector: 'app-store-tasks',
  templateUrl: './store-tasks.component.html',
  styleUrls: ['./store-tasks.component.scss']
})
export class StoreTasksComponent {

  storeTaskString = 'Hello Students'
  palettes = [
    {
      barcode: 'b001',
      product: 'red-shoes',
      amount: '10',
      location: 'shelf 42'
    },
    {
      barcode: 'b002',
      product: 'blue-shoes',
      amount: '8',
      location: 'shelf 43'
    }
  ]

  ngOnInit(): void {
    this.storeTaskString = 'Store task component has been initialized'
  }
}
