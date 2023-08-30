import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBoxComponent } from './boxes/add-box.component';
import { BoxesComponent } from './boxes/boxes.component';
import { ContentComponent } from './content.component';
import { FilesComponent } from './files/files.component';
import { ImagesComponent } from './images/images.component';
import { AddPageComponent } from './pages/add-page.component';
import { PageComponent } from './pages/page.component';
import { UploadComponent } from './upload/upload.component';

import { PromotionComponent } from './promotion/promotion.component';
// import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'pages/list',
        component: PageComponent,
      },
      {
        path: 'pages/add/:code',
        component: AddPageComponent,
      },
      {
        path: 'pages/add',
        component: AddPageComponent,
      },
      {
        path: 'boxes/list',
        component: BoxesComponent,
      },
      {
        path: 'boxes/add/:code',
        component: AddBoxComponent,
      },
      {
        path: 'boxes/add',
        component: AddBoxComponent,
      },
      {
        path: 'images/list',
        component: ImagesComponent,
      },
      {
        path: 'files/list',
        component: FilesComponent,
      },
      {
        path: 'promotion',
        component: PromotionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule { }

export const routedComponents = [
  ContentComponent,
  PageComponent,
  AddPageComponent,
  BoxesComponent,
  AddBoxComponent,
  ImagesComponent,
  UploadComponent,
  PromotionComponent,
  FilesComponent,
];
