import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './user-container/user-container.component';
import { SectionsComponent } from './sections/sections.component';


const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [
      {path: 'sections', component: SectionsComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
