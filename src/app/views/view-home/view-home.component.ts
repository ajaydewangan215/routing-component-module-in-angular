import { Component } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent {
  stats = [
    { value: 10, label:'Ten'},
    { value: 50, label:'fifty'},
    { value: 100, label:'Hundred'}
  ]

  items = [
    { 
      image: '/assets/images/image.png',
      title: 'Demo',
      description: 'Description here'
    },
    { 
      image: '/assets/images/image.png',
      title: 'Demo',
      description: 'Description here'
    }
  ]
}
