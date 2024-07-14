import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './user-container/user-container.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [
      {path: 'services', component: ServiceComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
