import { Component } from '@angular/core';

@Component({
  selector: 'app-add-palette',
  templateUrl: './add-palette.component.html',
  styleUrls: ['./add-palette.component.scss']
})
export class AddPaletteComponent {

  barcode = ''
  product = ''
  amount = ''
  location = ''

  addPalette() {
    const newPalette = {
      barcode: this.barcode,
      product: this.product,
      amount: this.amount,
      location: this.location
    }

    console.log(JSON.stringify(newPalette,null,3))
  }


}

