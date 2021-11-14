import { Component } from '@angular/core';

@Component({
  selector: 'app-brushes',
  templateUrl: './brushes.component.html',
})
export class BrushesComponent {
  brushes = [
    {
      name: "Stippling Makeup Brush",
      img: "../../assets/images/products/1 (1).jpg",
      price: "450",
      off: "25"
    },
    {
      name: "Cocool  Brush",
      img: "../../assets/images/products/1 (3).jpg",
      price: "250",
      off: "10"
    }, {
      name: "Brush Set",
      img: "../../assets/images/products/1 (4).jpg",
      price: "187",
      off: "2"
    }, {
      name: "Fancy Brush",
      img: "../../assets/images/products/2 (1).jpg",
      price: "350",
      off: "25"
    },{
      name: "White Brush Set",
      img: "../../assets/images/products/2 (2).jpg",
      price: "450",
      off: "15"
    }, {
      name: "Red Brush",
      img: "../../assets/images/products/2 (3).jpg",
      price: "650",
      off: "24"
    },  {
      name: "Gen Makeup Brush",
      img: "../../assets/images/products/2 (4).jpg",
      price: "150",
      off: "23"
    }, {
      name: "Blue Gen Brush",
      img: "../../assets/images/products/2 (5).jpg",
      price: "740",
      off: "11"
    }, {
      name: "Brush Set stand",
      img: "../../assets/images/products/2 (6).jpg",
      price: "715",
      off: "14"
    }, {
      name: "lakme Brush",
      img: "../../assets/images/products/2 (7).jpg",
      price: "650",
      off: "65"
    }, {
      name: "Brush Bag",
      img: "../../assets/images/products/2 (8).jpg",
      price: "550",
      off: "11"
    }
  ]
}