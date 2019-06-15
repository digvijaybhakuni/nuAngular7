import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nu7-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  data = [];
  items = [
    {label: 'Edit', icon: 'pi pi-refresh', command: () => {}},
    {label: 'Delete', icon: 'pi pi-refresh', command: () => {}}
  ];

  constructor() { }

  ngOnInit() {
    this.data.push({ name: 'Digvijay', age: 28, gender: 'Male' });
    this.data.push({ name: 'Amit', age: 22, gender: 'Male' });
  }

}
