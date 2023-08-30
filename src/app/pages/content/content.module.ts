import { NgModule } from '@angular/core';
import { NbDialogModule } from '@nebular/theme';
import { ngfModule } from 'angular-file';
import { FileManagerModule } from 'ng6-file-man';
import { NgxAngularQueryBuilderModule } from 'ngx-angular-query-builder';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { LightboxModule } from 'ngx-lightbox';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { NgxSummernoteModule } from 'ngx-summernote';
import { CustomModule } from '../custom-component/custom.module';
import { SharedModule } from '../shared/shared.module';
import {
  ContentRoutingModule,
  routedComponents,
} from './content-routing.module';
@NgModule({
  declarations: [...routedComponents],
  imports: [
    ContentRoutingModule,
    SharedModule,
    FileManagerModule,
    NgxAngularQueryBuilderModule,
    NbDialogModule.forChild(),
    NgxSummernoteModule,
    NgxDropzoneModule,
    LightboxModule,
    MalihuScrollbarModule.forRoot(),
    CustomModule,
    ngfModule,
  ],
})
export class ContentModule { }
