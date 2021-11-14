import { Component } from '@angular/core';

@Component({
    selector: 'app-toner',
    templateUrl: './toner.component.html',
})
export class TonerComponent {
    toners = [
        {
            name: "Nivia Toner",
            img: "../../assets/images/toner/1 (1).jpg",
            price: "399",
            off: "25"
        },{
            name: "Ponds Toner",
            img: "../../assets/images/toner/1 (2).jpg",
            price: "399",
            off: "25"
        },{
            name: "Spl Toner",
            img: "../../assets/images/toner/1 (3).jpg",
            price: "49",
            off: "2"
        },{
            name: "2 in 1 Toner",
            img: "../../assets/images/toner/1 (4).jpg",
            price: "199",
            off: "35"
        },{
            name: "Skin Toner",
            img: "../../assets/images/toner/1 (5).jpg",
            price: "299",
            off: "45"
        },]

}