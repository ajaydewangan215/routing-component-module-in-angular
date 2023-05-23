import { Component } from '@angular/core';

interface DataType {
  name: string;
  age: number;
  job: string;
}

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})

export class CollectionHomeComponent {
  data: DataType[] = [
    {name:'Ajay', age:27, job: 'Developer'},
    {name:'Ashok', age:32, job: 'Painter'},
    {name:'Santosh', age:38, job: 'Painter'}
  ];

  headers = [
    {key:'name', label:'Name'},
    {key:'age', label:'Age'},
    {key:'job', label:'Job'}
  ]
}
