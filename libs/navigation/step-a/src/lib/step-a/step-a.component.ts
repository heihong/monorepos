import { Component, OnInit, OnDestroy,  ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './step-a.component.html',
  styleUrls: ['./step-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepAComponent{

  next() {
    
  }
}
