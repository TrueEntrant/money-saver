import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaningComponent } from './planing/planing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlaningComponent],
  exports : [PlaningComponent]
})
export class PlaningModule { }
