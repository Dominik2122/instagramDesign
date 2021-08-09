import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';
import {MaterialModule} from 'src/app/material.module';



@NgModule({
  declarations: [
    CardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardsComponent,
    CardComponent
  ],
})
export class CardsModule { }
