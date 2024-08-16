import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { AddSpecialtyComponent } from './add-specialty/add-specialty.component';
import { DeleteSpecialtyComponent } from './delete-specialty/delete-specialty.component';
import { EditSpecialtyComponent } from './edit-specialty/edit-specialty.component';


@NgModule({
  declarations: [
    AdminContainerComponent,
    HomeAdminComponent,
    SidebarComponent,
    AddProviderComponent,
    AddSpecialtyComponent,
    DeleteSpecialtyComponent,
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
