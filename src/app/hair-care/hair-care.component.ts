import { Component } from '@angular/core';

@Component({
    selector: 'app-hair-care',
    templateUrl: './hair-care.component.html',
})
export class HairCareComponent {
    hairs = [
        {
            name: "Hair Conditioner",
            img: "../../assets/images/hair-care/1 (1).jpg",
            price: "399",
            off: "25"
        },
        {
            name: "Handy Conditioner",
            img: "../../assets/images/hair-care/1 (2).jpg",
            price: "499",
            off: "35"
        },
        {
            name: "2 in 1 Conditioner",
            img: "../../assets/images/hair-care/1 (3).jpg",
            price: "699",
            off: "25"
        },
        {
            name: "Nivia Conditioner",
            img: "../../assets/images/hair-care/1 (4).jpg",
            price: "499",
            off: "2"
        },
        {
            name: "Ponds Conditioner",
            img: "../../assets/images/hair-care/1 (5).jpg",
            price: "499",
            off: "60"
        },
        {
            name: "4 in 1 Conditioner",
            img: "../../assets/images/hair-care/1 (6).jpg",
            price: "249",
            off: "25"
        },
        {
            name: "Genuine Conditioner",
            img: "../../assets/images/hair-care/1 (7).jpg",
            price: "999",
            off: "1"
        },
        {
            name: "Special Conditioner",
            img: "../../assets/images/hair-care/1 (8).jpg",
            price: "899",
            off: "22"
        }
    ]
}