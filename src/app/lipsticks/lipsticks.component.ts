import { Component } from '@angular/core';

@Component({
  selector: 'app-lipsticks',
  templateUrl: './lipsticks.component.html',
})
export class LipsticksComponent {
  lipsticks = [
    {
      name: "Clinique",
      img: "../../assets/images/lipsticks/1 (1).jpg",
      price: "390",
      off: "10"
    }, {
      name: "Becca",
      img: "../../assets/images/lipsticks/1 (2).jpg",
      price: "490",
      off: "12"
    }, {
      name: "Red",
      img: "../../assets/images/lipsticks/1 (3).jpg",
      price: "375",
      off: "50"
    }, {
      name: "Black Gen",
      img: "../../assets/images/lipsticks/1 (4).jpg",
      price: "220",
      off: "17"
    }, {
      name: "Gussi",
      img: "../../assets/images/lipsticks/1 (5).jpg",
      price: "390",
      off: "33"
    }, {
      name: "Royale",
      img: "../../assets/images/lipsticks/1 (6).jpg",
      price: "275",
      off: "5"
    }, {
      name: "Lancome",
      img: "../../assets/images/lipsticks/1 (7).jpg",
      price: "199",
      off: "44"
    }, {
      name: "Pink Lips",
      img: "../../assets/images/lipsticks/1 (8).jpg",
      price: "122",
      off: "3"
    },
  ]
}