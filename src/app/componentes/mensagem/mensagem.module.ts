import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem.component';



@NgModule({
  declarations: [MensagemComponent],
  exports: [MensagemComponent],
  imports: [
    CommonModule
  ]
})
export class MensagemModule { }
