import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BoutiqueSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BoutiqueSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BoutiqueSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoutiqueSharedModule {
  static forRoot() {
    return {
      ngModule: BoutiqueSharedModule
    };
  }
}
