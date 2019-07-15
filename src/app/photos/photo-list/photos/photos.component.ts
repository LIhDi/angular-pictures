import { Component, OnInit, OnChanges } from '@angular/core';
import { Photo } from '../../photo/photo';
import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges) {
        if(changes.photos)
            this.rows = this.groupColumns(this.photos);
  }

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3) {
        newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }
}
