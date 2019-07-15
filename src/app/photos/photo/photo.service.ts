import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable( { providedIn: 'root'} )
export class PhotoService {

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http
    .get<Photo[]>('https://3000-e7a1f90e-d9da-491c-8ff0-08391352c19c.ws-us0.gitpod.io/flavio/photos')

  }

}
