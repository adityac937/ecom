import { Component } from '@angular/core';

@Component({
    selector: 'app-cleanser',
    templateUrl: './cleanser.component.html',
})
export class CleanserComponent {
    cleansers = [
        {
            name: "Face Cleanser",
            img: "../../assets/images/cleanser/a (1).jpg",
            price: "250",
            off: "40"
        },
        {
            name: "Stippling Cleanser",
            img: "../../assets/images/cleanser/a (2).jpg",
            price: "450",
            off: "25"
        },
        {
            name: "Men CLeanser",
            img: "../../assets/images/cleanser/a (3).jpg",
            price: "399",
            off: "35"
        },
        {
            name: "Reynolds Cleanser",
            img: "../../assets/images/cleanser/a (4).jpg",
            price: "199",
            off: "50"
        },
        {
            name: "2 in 1 Cleanser",
            img: "../../assets/images/cleanser/a (5).jpg",
            price: "499",
            off: "70"
        },
        {
            name: "Handy Cleanser",
            img: "../../assets/images/cleanser/a (6).jpg",
            price: "280",
            off: "42"
        },
        {
            name: "Pocket Cleanser",
            img: "../../assets/images/cleanser/a (7).jpg",
            price: "250",
            off: "75"
        },
        {
            name: "Stippling Cleanser",
            img: "../../assets/images/cleanser/a (8).jpg",
            price: "750",
            off: "10"
        },
    ]
}