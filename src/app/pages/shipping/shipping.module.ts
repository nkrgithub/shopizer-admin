import { NgModule } from '@angular/core';
import { NgxAngularQueryBuilderModule } from 'ngx-angular-query-builder';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { NgxSummernoteModule } from 'ngx-summernote';
import { CustomModule } from '../custom-component/custom.module';
import { SharedModule } from '../shared/shared.module';
import {
  routedComponents,
  ShippingRoutingModule,
} from './shipping-routing.module';
import { TransferBoxModule } from './transferlistbox/transferlistbox.module';
@NgModule({
  declarations: [
    ...routedComponents,
    // OriginComponent
  ],
  imports: [
    ShippingRoutingModule,
    SharedModule,
    TransferBoxModule,
    MalihuScrollbarModule.forRoot(),
    NgxAngularQueryBuilderModule,
    CustomModule,
    NgxSummernoteModule,
  ],
  exports: [],
})
export class ShippingModule { }
