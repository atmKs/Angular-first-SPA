import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-filter',
  templateUrl: './radio-filter.component.html',
  styleUrls: ['./radio-filter.component.scss'],
})
export class RadioFilterComponent {
  @Input()
  options!: string[];

  @Input() value!: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  getValue(value: string) {
    this.valueChange.emit(value);
  }
}
