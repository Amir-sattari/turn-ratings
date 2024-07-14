import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserContainerComponent } from './user-container/user-container.component';



import { SharedModule } from '../../app/shared/shared.module';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    SidebarComponent,
    UserContainerComponent,
    ServicesComponent,
    ServiceComponent,
    

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
