import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardComponent } from './card/card.component';
import {MaterialModule} from 'src/app/material.module';
import {UploadModule} from "src/app/upload/upload/upload.module";



@NgModule({
  declarations: [
    CardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UploadModule
  ],
  exports: [
    CardsComponent,
    CardComponent
  ],
})
export class CardsModule { }
