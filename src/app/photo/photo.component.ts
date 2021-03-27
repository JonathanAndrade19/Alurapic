import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  
  description = 'Flamengo-2020';
  url = '../../assets/img/flamengo-2020.jpg';
}
