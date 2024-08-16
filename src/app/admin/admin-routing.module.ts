import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { AddSpecialtyComponent } from './add-specialty/add-specialty.component';
import { DeleteSpecialtyComponent } from './delete-specialty/delete-specialty.component';
import { EditSpecialtyComponent } from './edit-specialty/edit-specialty.component';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {path: 'home', component: HomeAdminComponent},
      {path: 'add-provider', component: AddProviderComponent},
      {path: 'add-specialty', component: AddSpecialtyComponent},
      {path: 'delete-specialty', component: DeleteSpecialtyComponent},
      {path: 'edit-specialty', component: EditSpecialtyComponent},
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
