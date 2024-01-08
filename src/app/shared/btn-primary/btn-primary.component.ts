import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.css']
})
export class BtnPrimaryComponent {
  @Input() text: string = '';
}
