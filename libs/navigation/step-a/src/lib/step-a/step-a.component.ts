import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './step-a.component.html',
  styleUrls: ['./step-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
