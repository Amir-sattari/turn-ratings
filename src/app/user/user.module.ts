import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { HttpClientModule } from '@angular/common/http'; 


 

import { SharedModule } from '../../app/shared/shared.module';
import { SectionsComponent } from './sections/sections.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    SidebarComponent,
    UserContainerComponent,
    SectionsComponent,
    SectionComponent,
    

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class UserModule { }
