import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    {title :'1', content: 'One'},
    {title :'2', content: 'Two'},
    {title :'3', content: 'Three'}
  ]

  showModal(){
    this.modalOpen= !this.modalOpen;
  }
}
