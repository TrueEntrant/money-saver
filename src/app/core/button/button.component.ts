import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() data: string;
  @Output() send = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onClick(data: string) {
    this.send.emit(data);
  }
}
