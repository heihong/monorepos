import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FaqServiceConfig } from './faq-service-config';
import { APP_FAQ_SETTING, FaqService } from './faq-service';
import { FaqComponent } from './faq/faq.component';

export const faqRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule],
  declarations: [FaqComponent]
})
export class FaqModule {
   static forRoot(config: FaqServiceConfig): ModuleWithProviders<FaqModule> {
    return {
      ngModule: FaqModule,
      providers: [
        {provide: APP_FAQ_SETTING, useValue: config},
        FaqService
      ]
    };
  }
}
