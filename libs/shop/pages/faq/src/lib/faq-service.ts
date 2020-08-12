import { Injectable, InjectionToken, Inject } from '@angular/core';
import { FaqServiceConfig } from './faq-service-config';

export const APP_FAQ_SETTING: InjectionToken<FaqServiceConfig> = new InjectionToken<FaqServiceConfig>('APP_FAQ_SETTING');

@Injectable()
export class FaqService {

  faqs: any;

  constructor(@Inject(APP_FAQ_SETTING) config: FaqServiceConfig) {
    let index = 0;
    this.faqs = config.faqs.map((element) => {
      return {...element,
        id: index++
      };
    });
  }
}