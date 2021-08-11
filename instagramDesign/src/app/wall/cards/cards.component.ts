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
  photos = [];

  constructor(private af: AngularFireStorage) {

  }

  getDownloadedLinks($event: string) {
    this.photos.push($event)
  }

  drop(event: CdkDragDrop<any>) {
    this.photos[event.previousContainer.data.index] = event.container.data.item;
    this.photos[event.container.data.index] = event.previousContainer.data.item;
  }
}

