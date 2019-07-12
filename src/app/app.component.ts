import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos : Object[] = [];

  constructor(http: HttpClient) {
    http
    .get<Object[]>('https://3000-e7a1f90e-d9da-491c-8ff0-08391352c19c.ws-us0.gitpod.io/flavio/photos')
    .subscribe(photos => this.photos = photos);
  }

}
