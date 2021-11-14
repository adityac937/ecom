import { Component } from '@angular/core';

@Component({
    selector: 'app-moisturizer',
    templateUrl: './moisturizer.component.html',
})
export class MoisturizerComponent {
    moists = [
        {
            name: "Kinn Moisturizer",
            img: "../../assets/images/mosturizer/1 (1).jpg",
            price: "199",
            off: "25"
        },
        {
            name: "Glossier Moisturizer",
            img: "../../assets/images/mosturizer/1 (2).jpg",
            price: "399",
            off: "35"
        },
        {
            name: "Plain Moisturizer",
            img: "../../assets/images/mosturizer/1 (3).jpg",
            price: "499",
            off: "45"
        },
        {
            name: "Cream Moisturizer",
            img: "../../assets/images/mosturizer/1 (4).jpg",
            price: "599",
            off: "65"
        },
        {
            name: "Poko Moisturizer",
            img: "../../assets/images/mosturizer/1 (5).jpg",
            price: "199",
            off: "25"
        },
        {
            name: "Clarins Moisturizer",
            img: "../../assets/images/mosturizer/1 (6).jpg",
            price: "249",
            off: "5"
        },
        {
            name: "nivia Moisturizer",
            img: "../../assets/images/mosturizer/1 (7).jpg",
            price: "99",
            off: "5"
        },
        {
            name: "Curulogy Moisturizer",
            img: "../../assets/images/mosturizer/1 (8).jpg",
            price: "299",
            off: "25"
        },  
    ]}