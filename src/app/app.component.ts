import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos = [
    {
      url: '../assets/img/Gabi.jpg',
      description: 'Gabi and Gerson'
    },
    {
      url: '../assets/img/flamengo-2020.jpg',
      description: 'team of Flamengo'
    },
    {
      url: '../assets/img/campeao.jpeg',
      description: 'congratulation'
    }
  ]

}
