import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  NbSpinnerModule,
  NbTreeGridComponent,
  NbTreeGridModule,
} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { PickListModule } from 'primeng/picklist';
import { TreeTableModule } from 'primeng/treetable';
import { ThemeModule } from '../../@theme/theme.module';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { FiveHundredComponent } from './components/five-hundred/five-hundred.component';
import { ImageUploadingComponent } from './components/image-uploading/image-uploading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PasswordPromptComponent } from './components/password-prompt/password-prompt';
import { RightSidemenuComponent } from './components/right-sidemenu/right-sidemenu.component';
import { ShowcaseDialogComponent } from './components/showcase-dialog/showcase-dialog.component';
import { ValidateNumberDirective } from './validation/validate-number.directive';
@NgModule({
  declarations: [
    RightSidemenuComponent,
    NotFoundComponent,
    FiveHundredComponent,
    ImageUploadingComponent,
    ShowcaseDialogComponent,
    PasswordPromptComponent,
    PaginatorComponent,
    BackButtonComponent,
    ValidateNumberDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbTreeGridModule,
    Angular2SmartTableModule,
    ThemeModule,
    NbSpinnerModule,
    TranslateModule,
    TreeTableModule,
    FilePickerModule,
    DragDropModule,
  ],
  exports: [
    Angular2SmartTableModule,
    ThemeModule,
    NbSpinnerModule,
    TranslateModule,
    TreeTableModule,
    RightSidemenuComponent,
    NotFoundComponent,
    FiveHundredComponent,
    ImageUploadingComponent,
    ShowcaseDialogComponent,
    PaginatorComponent,
    BackButtonComponent,
    NbTreeGridModule,
    NbTreeGridComponent,
    PickListModule,
    DropdownModule,
    AutoCompleteModule,
    MultiSelectModule,
    ValidateNumberDirective,
    DragDropModule,
    // EqualValidator
  ],
  providers: [CurrencyPipe],
})
export class SharedModule { }
