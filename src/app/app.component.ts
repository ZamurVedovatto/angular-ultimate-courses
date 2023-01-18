import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="app">
      <header>
        <img src="/assets/img/logo.svg" alt="Logo" class="logo" />
      </header>
      <donut-list></donut-list>
    </div>
  `,
  styles: [
    `
      header {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
      }
      .logo {
        width: 100px;
        height: 88px;
      }
      .app {
        background-color: #f1f1f1;
        border-radius: 8px;
        max-width: 400px;
        width: 94%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #ef9fc7;
      }
    `,
  ],
})
export class AppComponent {}
