import { Component } from '@angular/core';

@Component({
  selector: 'app-lipsticks',
  templateUrl: './lipsticks.component.html',
})
export class LipsticksComponent {
  lipsticks = [
    {
        name:"Lipstick 1",
        img:"../../assets/images/products/lipsticks/1 (1).jpg",
    },
    {
        name:"Lipstick 2",
        img:"../../assets/images/products/lipsticks/1 (2).jpg",
    },
    {
        name:"Lipstick 3",
        img:"../../assets/images/products/lipsticks/1 (3).jpg",
    }
]
}