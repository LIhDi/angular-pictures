import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://cifrasparaflauta.files.wordpress.com/2009/07/uzumaki-naruto1.png',
      description: 'Leão'
    },
    {
      url: 'https://cde.peru.com//ima/0/1/1/0/6/1106194/611x458/naruto.jpg',
      description: 'Leoa'
    },
    {
      url: 'https://www.einerd.com.br/wp-content/uploads/2017/10/Naruto_Uzumaki.jpg',
      description: 'Gata'
    },
    {
      url: 'https://cifrasparaflauta.files.wordpress.com/2009/07/uzumaki-naruto1.png',
      description: 'Gata'
    }
  ];
}
