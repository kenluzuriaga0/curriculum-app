import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoPage } from '../info/info.page';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'info',
    component: InfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
