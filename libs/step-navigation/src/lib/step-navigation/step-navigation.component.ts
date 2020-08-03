import { Component, OnInit, ChangeDetectionStrategy,  EventEmitter, Input,
  Output } from '@angular/core';

@Component({
  selector: 'monorepos-step-navigation',
  templateUrl: './step-navigation.component.html',
  styleUrls: ['./step-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepNavigationComponent {
  @Input() disablePrevious: boolean = false;
  @Input() disableNext: boolean = false;
  @Output() next = new EventEmitter<MouseEvent>();
  @Output() previous = new EventEmitter<MouseEvent>();

}
