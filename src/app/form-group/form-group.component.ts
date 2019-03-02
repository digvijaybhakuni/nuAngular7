import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nu7-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormGroupComponent implements OnInit {

  @Input('name') name: string;

  @Input('refId') refId: string;

  constructor() { }

  ngOnInit() {
  }

}
