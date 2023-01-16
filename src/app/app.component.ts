import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <div class="app">Hello Angular!</div> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {}
