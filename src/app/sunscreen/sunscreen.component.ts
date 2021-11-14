import { Component } from '@angular/core';

@Component({
    selector: 'app-sunscreen',
    templateUrl: './sunscreen.component.html',
})
export class SunScreenComponent {
    sunscreens = [
        {
            name: "CLarins",
            img: "../../assets/images/sunscreen/1 (1).jpg",
            price: "399",
            off: "25"
        }, {
            name: "Neutrogens",
            img: "../../assets/images/sunscreen/1 (2).jpg",
            price: "699",
            off: "50"
        }, {
            name: "Laroche",
            img: "../../assets/images/sunscreen/1 (3).jpg",
            price: "499",
            off: "25"
        }, {
            name: "Bisun",
            img: "../../assets/images/sunscreen/1 (4).jpg",
            price: "299",
            off: "50"
        }, {
            name: "CBL",
            img: "../../assets/images/sunscreen/1 (5).jpg",
            price: "199",
            off: "50"
        }, {
            name: "Solaire",
            img: "../../assets/images/sunscreen/1 (6).jpg",
            price: "299",
            off: "35"
        }, {
            name: "Fast Tan",
            img: "../../assets/images/sunscreen/1 (7).jpg",
            price: "299",
            off: "65"
        }, {
            name: "Nora",
            img: "../../assets/images/sunscreen/1 (8).jpg",
            price: "399",
            off: "25"
        },]
}