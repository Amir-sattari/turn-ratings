import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { AddSpecialtyComponent } from './components/add-specialty/add-specialty.component';
import { EditSpecialtyComponent } from './components/edit-specialty/edit-specialty.component';


@NgModule({
  declarations: [
    AdminContainerComponent,
    HomeAdminComponent,
    SidebarComponent,
    AddProviderComponent,
    AddSpecialtyComponent,
    EditSpecialtyComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    UserModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
