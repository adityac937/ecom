import { Component } from '@angular/core';

@Component({
  selector: 'app-brushes',
  templateUrl: './brushes.component.html',
})
export class BrushesComponent {
  brushes = [
    {
        name:"Stippling Makeup Brush",
        img:"../../assets/images/products/1 (1).jpg",
        price:"450",
        off:"25"
    },
    {
        name:"Brush Type 2",
        img:"../../assets/images/products/1 (2).jpg"
    },
    {
        name:"Brush 3",
        img:"../../assets/images/products/1 (3).jpg"
    }
]
}