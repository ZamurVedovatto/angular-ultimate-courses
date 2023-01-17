import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CurrencyBRLPipe } from "./pipes/currency-brl.pipe";

const pipes = [CurrencyBRLPipe];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes],
})
export class SharedModule {}
