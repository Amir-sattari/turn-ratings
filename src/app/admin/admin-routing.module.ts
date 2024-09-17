import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { AddSpecialtyComponent } from './components/add-specialty/add-specialty.component';
import { EditSpecialtyComponent } from './components/edit-specialty/edit-specialty.component';
import { AddReceptionComponent } from './components/add-reception/add-reception.component';
import { EditProviderComponent } from './components/edit-provider/edit-provider.component';
import { EditReceptionComponent } from './components/edit-reception/edit-reception.component';
import { ReferralsComponent } from './components/referrals/referrals.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

const routes: Routes = [
  
  { path: '', component: AdminContainerComponent, children: [

      {path: 'home', component: HomeAdminComponent},

      {path: 'add-provider', component: AddProviderComponent},
      {path: 'edit-provider', component: EditProviderComponent},

      {path: 'add-reception', component: AddReceptionComponent},
      {path: 'edit-reception', component: EditReceptionComponent},

      {path: 'add-specialty', component: AddSpecialtyComponent},
      {path: 'edit-specialty', component: EditSpecialtyComponent},

      {path: 'referrals', component: ReferralsComponent},

    ],},

  { path: 'notfound', component: NotFoundComponent },   
  { path: '**', redirectTo: '/notfound' } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
