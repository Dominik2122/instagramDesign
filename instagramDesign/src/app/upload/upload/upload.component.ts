import {Component, EventEmitter, Input, OnInit, Output, SimpleChange} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";
import {of} from "rxjs";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  @Output()
  downloadLinks = new EventEmitter<string>()

  @Input()
  dragging: boolean = false

  paths: Array<string>=[];

  constructor(private af: AngularFireStorage) {}

  upload($event) {
    this.paths = $event.target.files
  }

  uploadImage() {
    for(const path of this.paths) {
      let url = "/files"+Math.random()+path
      this.af.upload(url, path).then((x) => {
        x.ref.getDownloadURL().then(path => {
          this.downloadLinks.emit(path)
        })
      })
    }
    this.paths = []
  }

}
