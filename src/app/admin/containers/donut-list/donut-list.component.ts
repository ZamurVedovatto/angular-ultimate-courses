import { Component, OnInit } from "@angular/core";
import { Donut } from "./../../models/donut.model";

@Component({
  selector: "donut-list",
  templateUrl: "./donut-list.component.html",
  styleUrls: ["./donut-list.component.scss"],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: "y8z0As",
        name: "Just Chocolate Donut",
        icon: "just-chocolate",
        price: 119,
        description: "For the pure chocoholic.",
      },
      {
        id: "y9z0As",
        name: "Glazed Donut",
        icon: "glazed-fudge",
        price: 129,
        description: "Sticky perfection.",
        promo: true
      },
      {
        id: "y8z0Ds",
        name: "Caramel Swirl",
        icon: "caramel-swirl",
        price: 119,
        description: "Chocolate drizzled with caramel.",
      },
    ];
  }
}
