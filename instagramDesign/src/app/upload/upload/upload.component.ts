import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  @Output()
  downloadLinks = new EventEmitter<string>()

  path: string;
  paths: Array<string>=[];
  url: string;

  constructor(private af: AngularFireStorage) {

  }

  ngOnInit() {
    this.af.ref(this.url).getDownloadURL().subscribe((x) => console.log(x) )
  }

  upload($event) {
    this.path = $event.target.files[0]
    this.paths = $event.target.files
  }

  uploadImage() {

    for(const path of this.paths) {
      console.log('upload')
      let url = "/files"+Math.random()+path
      this.af.upload(url, path).then((x) => {
        x.ref.getDownloadURL().then(path => {
          this.downloadLinks.emit(path)
        })
      })
    }
  }

}
