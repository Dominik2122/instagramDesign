import {Component, OnInit} from '@angular/core';
import {Card} from 'src/app/wall/cards/card/card';
import {CdkDragDrop , moveItemInArray} from '@angular/cdk/drag-drop';
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  photos = [];

  constructor(private af: AngularFireStorage) {

  }



  drop(event: CdkDragDrop<any>) {
    this.items[event.previousContainer.data.index] = event.container.data.item;
    this.items[event.container.data.index] = event.previousContainer.data.item;
  }
}

