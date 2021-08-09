import { Component } from '@angular/core';
import {AngularFireStorage, AngularFireStorageModule} from "@angular/fire/storage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  path: string;
  url: string;

  constructor(private af: AngularFireStorage) {

  }

  ngOnInit() {
    // this.af.ref(this.url).getDownloadURL().subscribe((x) => console.log(x) )
  }

  upload($event) {
    this.path = $event.target.files[0]
  }

  uploadImage() {
    this.url = "/files"+Math.random()+this.path
    this.af.upload(this.url, this.path).then((x) => {
      x.ref.getDownloadURL().then(y => {
        this.url = y
      })
    })
  }
}
