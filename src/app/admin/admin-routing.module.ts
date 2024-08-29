import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { AddSpecialtyComponent } from './components/add-specialty/add-specialty.component';
import { EditSpecialtyComponent } from './components/edit-specialty/edit-specialty.component';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {path: 'home', component: HomeAdminComponent},
      {path: 'add-provider', component: AddProviderComponent},
      {path: 'add-specialty', component: AddSpecialtyComponent},
      {path: 'edit-specialty', component: EditSpecialtyComponent},
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
