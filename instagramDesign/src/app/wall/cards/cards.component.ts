import {Component, OnInit} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  photos;

  dragging
  constructor() {
  }

  ngOnInit() {
    this.photos = JSON.parse(localStorage.getItem("photos"))
  }

  getDownloadedLinks($event: string) {
    this.photos.push($event)
    localStorage.setItem('photos', JSON.stringify(this.photos));
  }

  drop(event: CdkDragDrop<any>) {
    this.photos[event.previousContainer.data.index] = event.container.data.item;
    this.photos[event.container.data.index] = event.previousContainer.data.item;
    localStorage.setItem('photos', JSON.stringify(this.photos));
  }

  delete(event: CdkDragDrop<any>): void {
    const newPhotosArray: string[] = [...this.photos]
    newPhotosArray.splice(event.currentIndex, 1)
    this.photos = newPhotosArray
    localStorage.setItem('photos', JSON.stringify(this.photos));
  }

  dragStart() {
    this.dragging = true
  }

  dragStop() {
    this.dragging = false
  }
}

