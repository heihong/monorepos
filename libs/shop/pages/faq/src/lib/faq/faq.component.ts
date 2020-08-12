import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Faq } from '../faq-service-config';

@Component({
  selector: 'monorepos-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {
  faq: Faq[];
}
